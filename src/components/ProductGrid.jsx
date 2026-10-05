
import ProductCard from './ProductCard.jsx'

export default function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <p className="py-10 text-center text-husk-500">
        No products found in this category yet.
      </p>
    )
  }

  return (
    <div className="no-scrollbar -mx-4 flex gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 lg:grid-cols-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-[82%] shrink-0 sm:w-auto"
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}

