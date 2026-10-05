import { useState } from 'react'
import CashewIllustration from './CashewIllustration.jsx'

const galleryCategories = [
  'All',
  'Products',
  'Processing',
  'Packaging',
  'Factory',
  'Orders',
  'Business',
]

// Replace with real photos: { src: '/gallery/xyz.jpg', category: 'Products', alt: '...' }
const placeholderImages = Array.from({ length: 9 }).map((_, i) => ({
  id: i,
  category: galleryCategories[(i % (galleryCategories.length - 1)) + 1],
  alt: 'Cashew processing at our facility in Kankavli — photo to be added',
}))

export default function GalleryGrid() {
  const [active, setActive] = useState('All')

  const visible =
    active === 'All'
      ? placeholderImages
      : placeholderImages.filter((img) => img.category === active)

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {galleryCategories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === c
                ? 'bg-husk-800 text-cream'
                : 'bg-husk-50 text-husk-600 hover:bg-husk-100'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {visible.map((img) => (
          <figure key={img.id} className="overflow-hidden rounded-2xl border border-husk-100">
            <CashewIllustration className="aspect-square w-full object-cover" />
            <figcaption className="sr-only">{img.alt}</figcaption>
          </figure>
        ))}
      </div>

      <p className="mt-6 text-center text-sm text-husk-400">
        Gallery photos shown are placeholders — replace with real photography
        from processing, packaging and dispatch.
      </p>
    </div>
  )
}
