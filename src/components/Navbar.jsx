import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Globe } from 'lucide-react'
import { business } from '../config/business.js'
import WhatsAppButton from './WhatsAppButton.jsx'
import MobileNavbar from './MobileNavbar.jsx'
import LanguageSwitcher from './LanguageSwitcher.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'AboutUs' },
  { to: '/products', label: 'Products' },
  { to: '/wholesale', label: 'Wholesale' },
  { to: '/quality', label: 'Quality' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/80 border-b border-husk-100">
      <div
        className={`container-page flex items-center justify-between transition-[padding] duration-200 ${
          scrolled ? 'py-2.5' : 'py-4'
        }`}
      >
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <CashewMark className="h-9 w-9 text-turmeric-500 shrink-0" />
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold text-husk-900">
              {business.name}
            </span>
            <span className="block text-[11px] tracking-wide text-husk-500">
              {business.tagline}
            </span>
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-1 sm:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-husk-100 text-husk-900'
                    : 'text-husk-600 hover:text-husk-900'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Actions: Google Translate + WhatsApp + Mobile Toggle */}
        <div className="flex items-center gap-2">
          
          {/* Google Translate Switcher */}
          <LanguageSwitcher />

          <div className="hidden sm:block">
            <WhatsAppButton label="Enquire Now" />
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full text-husk-700 sm:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <MobileNavbar open={open} onNavigate={() => setOpen(false)} />
    </header>
  )
}

function CashewMark(props) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M30.5 6C24 6 19 11.5 19 18.5c0 4.8 2.6 8.2 4.6 10.9 1.7 2.3 2.9 4 2.4 6-.6 2.5-3.4 3.6-5.9 2.6-2.1-.9-3.1-3-4.3-5.4-1.4-2.8-3-6-6.6-7-3-.8-6 .6-7 3-1 2.5 0 5.4 2.6 6.6 1.7.8 3-1.6 1.3-2.4-.9-.4-1.2-1.4-.8-2.3.4-.9 1.5-1.3 2.6-1 2.1.6 3.1 2.6 4.4 5.1 1.4 2.7 3 5.9 6.8 7.4 5.2 2.1 10.8-.6 12-5.6 1-4.2-1.2-7.2-3-9.7-1.8-2.5-3.3-4.6-3.3-7.7 0-4.7 3.4-8.5 7.7-8.5 4.6 0 8.3 3.9 8.3 8.7 0 3.5-1.9 5.9-3.6 7.9-1 1.2.7 2.7 1.8 1.5 2-2.3 4.3-5.4 4.3-9.4C42.4 11.6 37.1 6 30.5 6Z"
        fill="currentColor"
      />
    </svg>
  )
}