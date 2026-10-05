import { useParams, Link, Navigate } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import Breadcrumb from '../components/Breadcrumb.jsx'
import CashewIllustration from '../components/CashewIllustration.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import CTASection from '../components/CTASection.jsx'
import { getProductById, products } from '../data/products.js'
import { productInquiryMessage } from '../config/business.js'

export default function ProductDetails() {
  const { id } = useParams()
  const product = getProductById(id)

  if (!product) return <Navigate to="/products" replace />

  const related = products.filter((p) => p.id !== product.id).slice(0, 3)

  return (
    <>
      <Seo
        title={`${product.name} | Konkan Cashew Co., Kankavli`}
        description={product.shortDescription}
      />
      <Breadcrumb items={[{ label: 'Products', to: '/products' }, { label: product.name }]} />

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
          <CashewIllustration className="aspect-[4/3] w-full rounded-2xl object-cover" />

          <div>
            <p className="text-sm font-medium tracking-wide text-leaf-600">
              Grade: {product.grade}
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl">{product.name}</h1>
            <p className="mt-4 text-husk-600">{product.description}</p>

            <div className="mt-6">
              <p className="text-xs font-medium uppercase tracking-wide text-husk-400">
                Available Sizes
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.weights.map((w) => (
                  <span
                    key={w}
                    className="rounded-full border border-husk-200 bg-husk-50 px-3.5 py-1.5 text-sm text-husk-700"
                  >
                    {w}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs font-medium uppercase tracking-wide text-husk-400">
                Suitable For
              </p>
              <ul className="mt-2 grid grid-cols-2 gap-y-1.5 text-sm text-husk-700">
                {product.suitableFor.map((s) => (
                  <li key={s} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-leaf-500" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 rounded-xl bg-husk-50 p-4 text-sm text-husk-600">
              Contact us for today's wholesale price.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton
                message={productInquiryMessage(product.name)}
                label="Ask Price on WhatsApp"
                className="flex-1 justify-center"
              />
              <Link
                to="/wholesale"
                className="flex-1 rounded-full border border-husk-200 px-5 py-3 text-center text-sm font-semibold text-husk-800 hover:bg-husk-50"
              >
                Wholesale Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-husk-50">
        <div className="container-page">
          <h2 className="text-2xl sm:text-3xl">You may also like</h2>
          <div className="mt-8">
            <ProductGrid products={related} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
