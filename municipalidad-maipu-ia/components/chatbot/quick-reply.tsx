"use client"

interface QuickReplyProps {
  text: string
  onClick: () => void
}

export function QuickReply({ text, onClick }: QuickReplyProps) {
  return (
    <button
      onClick={onClick}
      className="bg-maipu-blue/5 hover:bg-maipu-blue/10 text-maipu-blue text-xs py-1 px-3 rounded-full transition-colors"
    >
      {text}
    </button>
  )
}
