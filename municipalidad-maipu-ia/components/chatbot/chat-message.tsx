import { Avatar } from "@/components/ui/avatar"
import { Bot, User } from "lucide-react"
import { cn } from "@/lib/utils"
import ReactMarkdown from "react-markdown"

interface ChatMessageProps {
  message: string
  isUser: boolean
}

export function ChatMessage({ message, isUser }: ChatMessageProps) {
  return (
    <div className={cn("flex items-start mb-4", isUser && "justify-end")}>
      {!isUser && (
        <Avatar className="h-8 w-8 mr-2 bg-maipu-blue/10">
          <Bot className="h-4 w-4 text-maipu-blue" />
        </Avatar>
      )}
      <div
        className={cn(
          "rounded-lg p-3 max-w-[80%]",
          isUser ? "bg-maipu-blue text-white rounded-tr-none" : "bg-maipu-blue/5 text-gray-700 rounded-tl-none",
        )}
      >
        <div className="prose prose-sm max-w-none">
          <ReactMarkdown
            components={{
              a: ({ node, ...props }) => (
                <a
                  {...props}
                  className="text-maipu-blue/80 underline hover:text-maipu-blue/70"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              ),
              ul: ({ node, ...props }) => <ul {...props} className="list-disc pl-4 mt-2" />,
              ol: ({ node, ...props }) => <ol {...props} className="list-decimal pl-4 mt-2" />,
              li: ({ node, ...props }) => <li {...props} className="mt-1" />,
              p: ({ node, ...props }) => <p {...props} className="mb-2 last:mb-0" />,
              strong: ({ node, ...props }) => (
                <strong {...props} className={isUser ? "text-white font-bold" : "text-maipu-blue font-bold"} />
              ),
            }}
          >
            {message}
          </ReactMarkdown>
        </div>
      </div>
      {isUser && (
        <Avatar className="h-8 w-8 ml-2 bg-maipu-blue">
          <User className="h-4 w-4 text-white" />
        </Avatar>
      )}
    </div>
  )
}
