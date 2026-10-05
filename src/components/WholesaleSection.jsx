import {
  Store,
  Cookie,
  Hotel,
  ShoppingCart,
  Truck,
  Package,
} from 'lucide-react'

const audiences = [
  { icon: Store, title: 'Dry Fruit Shops' },
  { icon: Cookie, title: 'Sweet Shops' },
  { icon: Hotel, title: 'Hotels & Restaurants' },
  { icon: ShoppingCart, title: 'Supermarkets' },
  { icon: Truck, title: 'Distributors' },
  { icon: Package, title: 'Bulk Buyers' },
]

export default function WholesaleSection() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {audiences.map((a) => (
        <div
          key={a.title}
          className="flex flex-col items-center gap-3 rounded-2xl border border-husk-100 bg-white p-6 text-center"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-turmeric-400/15 text-turmeric-600">
            <a.icon className="h-5 w-5" />
          </div>
          <p className="text-sm font-semibold text-husk-900">{a.title}</p>
        </div>
      ))}
    </div>
  )
}
