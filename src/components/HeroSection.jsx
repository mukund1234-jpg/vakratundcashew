import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton.jsx'
import CashewIllustration from './CashewIllustration.jsx'

const badges = ['Quality Products', 'Wholesale Supply', 'Direct Contact', 'Bulk Orders']

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-page grid gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-sm font-medium tracking-wide text-leaf-600">
            Kankavli, Sindhudurg, Maharashtra
          </p>
          <h1 className="mt-3 text-4xl leading-[1.08] text-husk-900 sm:text-5xl lg:text-6xl">
            Premium cashews,
            <br />
            direct from Konkan
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-husk-600">
            Quality cashews processed with care, supplied for retail and
            wholesale customers across Maharashtra.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full bg-husk-800 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-husk-900"
            >
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </Link>
            <WhatsAppButton />
          </div>

          <p className="mt-6 text-sm text-husk-500">
            Retail · Wholesale · Bulk Orders
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {badges.map((b) => (
              <li key={b} className="flex items-center gap-1.5 text-sm text-husk-700">
                <Check className="h-4 w-4 text-leaf-500" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-organic bg-leaf-100/60 hidden sm:block" />
          <div className="overflow-hidden rounded-organic shadow-soft">
            <CashewIllustration className="aspect-[4/5] w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
