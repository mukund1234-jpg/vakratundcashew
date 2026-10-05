import { categories } from '../data/products.js'

export default function ProductCategoryFilter({
active,
onChange,
sort,
onSortChange,
}) {
return ( <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
{/* Category horizontal scroll on mobile */} <div className="no-scrollbar -mx-4 flex flex-nowrap gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
{categories.map((c) => (
<button
key={c.id}
onClick={() => onChange(c.id)}
className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === c.id
                ? 'bg-husk-800 text-cream'
                : 'bg-husk-50 text-husk-600 hover:bg-husk-100'
            }`}
>
{c.label} </button>
))} </div>


  {onSortChange && (
    <label className="flex shrink-0 items-center gap-2 text-sm text-husk-600">
      Sort by
      <select
        value={sort}
        onChange={(e) => onSortChange(e.target.value)}
        className="rounded-lg border border-husk-200 bg-white px-3 py-2 text-sm text-husk-800"
      >
        <option value="name">Product Name</option>
        <option value="popular">Popular</option>
      </select>
    </label>
  )}
</div>


)
}
