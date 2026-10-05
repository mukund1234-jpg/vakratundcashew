import {
  Wheat,
  SprayCan,
  Cog,
  Layers,
  ShieldCheck,
  Package,
  Truck,
} from 'lucide-react'

const fullSteps = [
  { icon: Wheat, title: 'Raw Cashew Selection', text: 'Raw cashew is sourced and checked before processing begins.' },
  { icon: SprayCan, title: 'Cleaning', text: 'Raw cashew is cleaned to remove dust and impurities.' },
  { icon: Cog, title: 'Processing', text: 'Cashew is processed to prepare it for shell removal.' },
  { icon: Layers, title: 'Shell Removal', text: 'Shells are removed to release the kernel inside.' },
  { icon: Layers, title: 'Kernel Separation', text: 'Kernels are separated and prepared for grading.' },
  { icon: Layers, title: 'Grading', text: 'Kernels are graded by size and type, such as W180, W210, W240 and W320.' },
  { icon: ShieldCheck, title: 'Quality Check', text: 'Each batch is checked for quality before packaging.' },
  { icon: Package, title: 'Packaging', text: 'Kernels are packed by weight for retail and wholesale.' },
  { icon: Truck, title: 'Dispatch', text: 'Orders are prepared and dispatched to customers.' },
]

const compactSteps = [
  { icon: Wheat, title: 'Raw Cashew Selection' },
  { icon: Cog, title: 'Processing' },
  { icon: Layers, title: 'Grading' },
  { icon: ShieldCheck, title: 'Quality Checking' },
  { icon: Package, title: 'Packaging' },
  { icon: Truck, title: 'Dispatch' },
]

export default function ProcessingSteps({ compact = false }) {
  const steps = compact ? compactSteps : fullSteps

  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="relative rounded-2xl border border-husk-100 bg-white p-6"
        >
          <span className="font-display text-sm text-turmeric-500">
            {String(i + 1).padStart(2, '0')}
          </span>
          <div className="mt-3 flex h-10 w-10 items-center justify-center rounded-full bg-leaf-50 text-leaf-600">
            <step.icon className="h-5 w-5" />
          </div>
          <p className="mt-3 font-semibold text-husk-900">{step.title}</p>
          {step.text && (
            <p className="mt-1.5 text-sm leading-relaxed text-husk-600">{step.text}</p>
          )}
        </li>
      ))}
    </ol>
  )
}
