import { Link } from 'react-router-dom'
import CashewIllustration from './CashewIllustration.jsx'

export default function AboutSection() {
  return (
    <section className="section-pad">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <p className="text-sm font-medium tracking-wide text-leaf-600">Our Story</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">From Konkan to your table</h2>
          <p className="mt-5 leading-relaxed text-husk-600">
            We are a local cashew business based in Kankavli, Maharashtra,
            focused on supplying quality cashew products to retail and
            wholesale customers.
          </p>
          <p className="mt-4 leading-relaxed text-husk-600">
            Our focus is simple: quality products, reliable communication and
            long-term customer relationships.
          </p>
          <p className="mt-4 rounded-xl bg-husk-50 p-4 text-sm text-husk-500">
            [Add actual business story here — how the business started, who
            runs it, and what makes it distinct.]
          </p>
          <Link
            to="/about"
            className="mt-6 inline-block text-sm font-semibold text-husk-800 underline decoration-turmeric-400 decoration-2 underline-offset-4"
          >
            Read our full story
          </Link>
        </div>
        <div className="order-1 overflow-hidden rounded-organic shadow-soft lg:order-2">
          <CashewIllustration className="aspect-[4/3] w-full object-cover" />
        </div>
      </div>
    </section>
  )
}
