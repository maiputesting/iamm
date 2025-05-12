from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from pydantic import BaseModel
from typing import Optional
import sqlite3
from datetime import datetime, timedelta
from jose import JWTError, jwt
from passlib.context import CryptContext
from pathlib import Path

# Configuración de seguridad
SECRET_KEY = "tu_clave_secreta_aqui"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# Configuración de la base de datos
DB_PATH = Path("../data/municipalidad.db")

# Configuración de password hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

app = FastAPI(title="API Municipalidad de Maipú")

# Modelos Pydantic
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: Optional[str] = None

class Usuario(BaseModel):
    email: str
    nombre: Optional[str] = None
    rol: Optional[str] = None

class UsuarioInDB(Usuario):
    password_hash: str

# Funciones de utilidad
def get_db():
    conn = sqlite3.connect(str(DB_PATH))
    try:
        yield conn
    finally:
        conn.close()

def verificar_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def crear_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

# Endpoints
@app.post("/token", response_model=Token)
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    db = next(get_db())
    cursor = db.cursor()
    cursor.execute("SELECT * FROM usuarios WHERE email = ?", (form_data.username,))
    user = cursor.fetchone()
    
    if not user or not verificar_password(form_data.password, user[2]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Credenciales incorrectas",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token = crear_access_token(data={"sub": user[1]})
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/usuarios/me", response_model=Usuario)
async def read_users_me(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise HTTPException(status_code=401, detail="Token inválido")
    except JWTError:
        raise HTTPException(status_code=401, detail="Token inválido")
    
    db = next(get_db())
    cursor = db.cursor()
    cursor.execute("SELECT * FROM usuarios WHERE email = ?", (username,))
    user = cursor.fetchone()
    
    if user is None:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")
    
    return {"email": user[1], "nombre": user[3], "rol": user[4]}

# Endpoint para el chatbot
@app.post("/chat")
async def chat(mensaje: str):
    # Aquí iría la lógica de procesamiento del chatbot
    return {"respuesta": f"Respuesta al mensaje: {mensaje}"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)