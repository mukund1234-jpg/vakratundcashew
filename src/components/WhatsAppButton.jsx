import { MessageCircle } from 'lucide-react'
import { buildWhatsAppLink } from '../config/business.js'

/**
 * WhatsApp CTA. Use `floating` for the persistent corner bubble,
 * or omit it to render an inline button you can style/place yourself.
 */
export default function WhatsAppButton({
  message,
  floating = false,
  label = 'WhatsApp Us',
  className = '',
}) {
  const href = buildWhatsAppLink(message)

  if (floating) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-leaf-500 text-cream shadow-soft transition-transform hover:scale-105 active:scale-95 sm:bottom-6 sm:right-6"
      >
        <MessageCircle className="h-7 w-7" fill="currentColor" strokeWidth={0} />
      </a>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        'inline-flex items-center justify-center gap-2 rounded-full bg-leaf-500 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-leaf-600 ' +
        className
      }
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </a>
  )
}
