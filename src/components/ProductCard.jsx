import { Link } from 'react-router-dom'
import WhatsAppButton from './WhatsAppButton.jsx'
import CashewIllustration from './CashewIllustration.jsx'
import { productInquiryMessage } from '../config/business.js'

export default function ProductCard({ product }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-husk-100 bg-white/70 transition-shadow hover:shadow-soft">
      <Link to={`/products/${product.id}`} className="block overflow-hidden">
        <CashewIllustration className="h-58 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-husk-900">{product.name}</h3>
        </Link>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-husk-600">
          {product.shortDescription}
        </p>

        <div className="mt-4">
          <p className="text-xs font-medium uppercase tracking-wide text-husk-400">
            Available
          </p>
          <p className="mt-1 text-sm text-husk-700">{product.weights.join(' | ')}</p>
        </div>

        <div className="mt-5 flex items-center gap-2">
          <Link
            to={`/products/${product.id}`}
            className="flex-1 rounded-full border border-husk-200 px-4 py-2.5 text-center text-sm font-semibold text-husk-800 transition-colors hover:bg-husk-50"
          >
            View Details
          </Link>
          <WhatsAppButton
            message={productInquiryMessage(product.name)}
            label="Order"
            className="flex-1"
          />
        </div>
      </div>
    </div>
  )
}
