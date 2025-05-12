/**
 * Este script verifica que el entorno esté correctamente configurado
 * para ejecutar el proyecto.
 */

const fs = require("fs")
const path = require("path")
const { execSync } = require("child_process")

// Colores para la consola
const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
}

console.log(`${colors.cyan}=== Verificando configuración del proyecto ===${colors.reset}\n`)

// Verificar versión de Node.js
try {
  const nodeVersion = process.version
  const versionNumber = nodeVersion.replace("v", "").split(".")
  const majorVersion = Number.parseInt(versionNumber[0], 10)

  console.log(`${colors.blue}Versión de Node.js:${colors.reset} ${nodeVersion}`)

  if (majorVersion < 18) {
    console.log(`${colors.red}Error: Se requiere Node.js 18 o superior.${colors.reset}`)
    process.exit(1)
  } else {
    console.log(`${colors.green}✓ Versión de Node.js compatible${colors.reset}`)
  }
} catch (error) {
  console.error(`${colors.red}Error al verificar la versión de Node.js:${colors.reset}`, error)
  process.exit(1)
}

// Verificar que existen las carpetas necesarias
const requiredDirs = ["public", "public/images", "app", "components", "lib"]

console.log(`\n${colors.blue}Verificando estructura de directorios:${colors.reset}`)

for (const dir of requiredDirs) {
  const dirPath = path.join(process.cwd(), dir)
  if (!fs.existsSync(dirPath)) {
    console.log(`${colors.red}✗ Directorio no encontrado: ${dir}${colors.reset}`)
    console.log(`  Creando directorio ${dir}...`)
    fs.mkdirSync(dirPath, { recursive: true })
    console.log(`${colors.green}✓ Directorio creado: ${dir}${colors.reset}`)
  } else {
    console.log(`${colors.green}✓ Directorio encontrado: ${dir}${colors.reset}`)
  }
}

// Verificar que existe la imagen del logo
const logoPath = path.join(process.cwd(), "public", "images", "MaipuMunicipio_blue_socials.png")
console.log(`\n${colors.blue}Verificando archivos de imagen:${colors.reset}`)

if (!fs.existsSync(logoPath)) {
  console.log(`${colors.yellow}⚠ Imagen no encontrada: MaipuMunicipio_blue_socials.png${colors.reset}`)
  console.log(`  Asegúrate de colocar la imagen en public/images/MaipuMunicipio_blue_socials.png`)
} else {
  console.log(`${colors.green}✓ Imagen encontrada: MaipuMunicipio_blue_socials.png${colors.reset}`)
}

// Verificar dependencias
console.log(`\n${colors.blue}Verificando dependencias:${colors.reset}`)

try {
  console.log("Ejecutando npm list --depth=0...")
  execSync("npm list --depth=0", { stdio: "ignore" })
  console.log(`${colors.green}✓ Todas las dependencias están instaladas correctamente${colors.reset}`)
} catch (error) {
  console.log(`${colors.yellow}⚠ Algunas dependencias pueden faltar o tener problemas${colors.reset}`)
  console.log("  Ejecuta npm install para asegurarte de que todas las dependencias estén instaladas correctamente")
}

console.log(`\n${colors.green}=== Verificación completada ===${colors.reset}`)
console.log(`\nPara iniciar el proyecto en modo desarrollo, ejecuta: ${colors.cyan}npm run dev${colors.reset}`)
console.log(`Para compilar el proyecto para producción, ejecuta: ${colors.cyan}npm run build${colors.reset}`)
