import { useMemo, useState } from 'react'
import Seo from '../components/Seo.jsx'
import Breadcrumb from '../components/Breadcrumb.jsx'
import ProductCategoryFilter from '../components/ProductCategoryFilter.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import CTASection from '../components/CTASection.jsx'
import { products } from '../data/products.js'
import { ArrowDownAZ, Flame } from 'lucide-react'

const sortOptions = [
  { id: 'name', label: 'Product Name' },
  { id: 'popular', label: 'Popular' },
]

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [sort, setSort] = useState('popular')

  const filtered = useMemo(() => {
    let list =
      activeCategory === 'all'
        ? products
        : products.filter(
            (p) => p.category === activeCategory || p.tags.includes(activeCategory)
          )

    list = [...list]
    if (sort === 'name') {
      list.sort((a, b) => a.name.localeCompare(b.name))
    }
    // 'popular' keeps the curated default order defined in data/products.js
    return list
  }, [activeCategory, sort])

  return (
    <>
      <Seo
        title="Cashew Products | Whole, Broken & Flavoured Cashews | Kankavli"
        description="Browse our range of cashew products — W180, W210, W240, W320, broken cashew, small pieces, masala cashew and gift packs. Retail and wholesale available."
      />
      <Breadcrumb items={[{ label: 'Products' }]} />

      <section className="section-pad pb-8">
        <div className="container-page">
          <p className="text-sm font-medium tracking-wide text-leaf-600">Our Range</p>
          <h1 className="mt-2 text-3xl sm:text-4xl">Our cashew products</h1>
          <p className="mt-3 max-w-xl text-husk-600">
            Choose from our range of carefully processed cashew products for
            retail, wholesale and bulk requirements.
          </p>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="container-page">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <ProductCategoryFilter active={activeCategory} onChange={setActiveCategory} />

            <div className="flex items-center gap-2 text-sm text-husk-600">
              <Flame className="h-4 w-4 text-turmeric-500" />
              <label htmlFor="sort" className="sr-only">
                Sort products
              </label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-full border border-husk-200 bg-white px-3 py-1.5 text-sm text-husk-700 focus:outline-none focus-visible:outline-turmeric-500"
              >
                {sortOptions.map((o) => (
                  <option key={o.id} value={o.id}>
                    {o.label}
                  </option>
                ))}
              </select>
              <ArrowDownAZ className="h-4 w-4 text-husk-400" />
            </div>
          </div>

          <div className="mt-8">
            <ProductGrid products={filtered} />
          </div>
        </div>
      </section>

      <CTASection
        title="Can't find the grade you need?"
        subtitle="Tell us your requirement on WhatsApp and we'll help you find the right product."
        whatsappMessage="Hello, I'm looking for a specific cashew grade — can you help?"
      />
    </>
  )
}
