export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="rounded-2xl border border-husk-100 bg-white/60 p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-leaf-50 text-leaf-600">
        <Icon className="h-5 w-5" />
      </div>
      <p className="mt-4 text-base font-semibold text-husk-900">{title}</p>
      <p className="mt-1.5 text-sm leading-relaxed text-husk-600">{description}</p>
    </div>
  )
}
