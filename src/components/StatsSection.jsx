import { business } from '../config/business.js'

export default function StatsSection() {
  const filled = business.stats.filter((s) => s.value)

  if (filled.length === 0) {
    // No real numbers supplied yet — do not show fabricated stats.
    return null
  }

  return (
    <section className="section-pad bg-husk-800">
      <div className="container-page grid grid-cols-2 gap-8 sm:grid-cols-4">
        {filled.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-4xl font-semibold text-cream">{s.value}</p>
            <p className="mt-1 text-sm text-husk-300">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
