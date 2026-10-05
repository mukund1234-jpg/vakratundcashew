import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import { business } from '../config/business.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-husk-100 bg-husk-900 text-husk-100">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-semibold text-cream">{business.name}</p>
          <p className="mt-1 text-sm text-husk-300">{business.tagline}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-husk-300">
            A local cashew manufacturer and supplier based in Kankavli, Konkan —
            serving retail and wholesale customers across Maharashtra.
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-cream">Explore</p>
          <ul className="space-y-2 text-sm text-husk-300">
            <li><Link to="/about" className="hover:text-cream">About Us</Link></li>
            <li><Link to="/products" className="hover:text-cream">Products</Link></li>
            <li><Link to="/wholesale" className="hover:text-cream">Wholesale</Link></li>
            <li><Link to="/quality" className="hover:text-cream">Quality &amp; Processing</Link></li>
            <li><Link to="/gallery" className="hover:text-cream">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-cream">Support</p>
          <ul className="space-y-2 text-sm text-husk-300">
            <li><Link to="/faq" className="hover:text-cream">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-cream">Contact Us</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-cream">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold text-cream">Get in Touch</p>
          <ul className="space-y-2.5 text-sm text-husk-300">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-turmeric-400" />
              <span>{business.address.village}, {business.address.district}, {business.address.state}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-turmeric-400" />
              <span>{business.phone}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-turmeric-400" />
              <span>{business.email}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-husk-800">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-husk-400 sm:flex-row">
          <p>© {year} {business.name}. All rights reserved.</p>
          <p>Cashew supplier serving Kankavli, Sindhudurg &amp; Maharashtra.</p>
        </div>
      </div>
    </footer>
  )
}
