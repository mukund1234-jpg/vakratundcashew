import { NavLink } from 'react-router-dom'
import WhatsAppButton from './WhatsAppButton.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/wholesale', label: 'Wholesale' },
  { to: '/quality', label: 'Quality' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function MobileNavbar({ open, onNavigate }) {
  return (
    <div
      className={`grid overflow-hidden border-t border-husk-100 bg-cream transition-[grid-template-rows] duration-300 ease-out sm:hidden ${
        open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
      }`}
    >
      <div className="min-h-0">
        <nav className="container-page flex flex-col gap-1 py-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={onNavigate}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2.5 text-base font-medium ${
                  isActive ? 'bg-husk-100 text-husk-900' : 'text-husk-700'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="mt-2 px-3">
            <WhatsAppButton className="w-full" />
          </div>
        </nav>
      </div>
    </div>
  )
}
