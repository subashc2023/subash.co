import { cn } from "@/lib/utils"
import { forwardRef } from "react"

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={id} className="text-sm font-medium">
            {label}
          </label>
        )}
        <textarea
          id={id}
          ref={ref}
          className={cn(
            "w-full rounded-lg border bg-background/50 backdrop-blur-sm px-4 py-3 text-base min-h-[200px] focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm hover:shadow transition-shadow",
            error && "border-destructive focus:ring-destructive",
            props.disabled && "opacity-50 cursor-not-allowed",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-sm text-destructive">{error}</p>
        )}
      </div>
    )
  }
)

TextArea.displayName = "TextArea" 