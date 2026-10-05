import ProcessingSteps from './ProcessingSteps.jsx'
import WhatsAppButton from './WhatsAppButton.jsx'

export default function QualitySection() {
  return (
    <section className="section-pad bg-husk-50">
      <div className="container-page">
        <div className="max-w-xl">
          <p className="text-sm font-medium tracking-wide text-leaf-600">Our Process</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">Quality you can trust</h2>
          <p className="mt-4 leading-relaxed text-husk-600">
            Every batch moves through the same careful stages, from raw
            cashew to a packed, dispatch-ready product.
          </p>
        </div>

        <div className="mt-12">
          <ProcessingSteps compact />
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-medium text-husk-900">
            Want to know more about our products?
          </p>
          <WhatsAppButton label="Talk to Us on WhatsApp" />
        </div>
      </div>
    </section>
  )
}
