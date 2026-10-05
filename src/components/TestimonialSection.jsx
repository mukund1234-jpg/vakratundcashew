const placeholderReviews = [
  { name: '[Customer Name]', city: '[City]' },
  { name: '[Customer Name]', city: '[City]' },
  { name: '[Customer Name]', city: '[City]' },
]

export default function TestimonialSection() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="max-w-xl">
          <p className="text-sm font-medium tracking-wide text-leaf-600">Customers</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">What customers say</h2>
          <p className="mt-4 text-husk-600">
            Real reviews will appear here once shared by customers.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {placeholderReviews.map((r, i) => (
            <div key={i} className="rounded-2xl border border-dashed border-husk-200 bg-husk-50/60 p-6">
              <p className="text-sm italic leading-relaxed text-husk-500">
                "Add genuine customer review here."
              </p>
              <p className="mt-4 text-sm font-semibold text-husk-800">{r.name}</p>
              <p className="text-xs text-husk-500">{r.city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
