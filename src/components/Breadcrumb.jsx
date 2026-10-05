import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-husk-100 bg-cream-dark/60">
      <div className="container-page flex items-center gap-1.5 py-3 text-sm text-husk-600">
        <Link to="/" className="flex items-center gap-1 hover:text-husk-800">
          <Home className="h-3.5 w-3.5" />
          <span className="sr-only">Home</span>
        </Link>
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-husk-300" />
            {item.to ? (
              <Link to={item.to} className="hover:text-husk-800">
                {item.label}
              </Link>
            ) : (
              <span className="text-husk-800">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  )
}
