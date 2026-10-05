import WhatsAppButton from './WhatsAppButton.jsx'

export default function CTASection({
  title = 'Have a question about our cashews?',
  subtitle = "Message us directly — we'll reply with availability and pricing.",
  whatsappMessage,
  buttonLabel = 'WhatsApp Us',
}) {
  return (
    <section className="section-pad bg-leaf-500">
      <div className="container-page flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl text-cream sm:text-3xl">{title}</h2>
          <p className="mt-2 max-w-lg text-leaf-50/90">{subtitle}</p>
        </div>
        <WhatsAppButton
          message={whatsappMessage}
          label={buttonLabel}
          className="!bg-cream !text-leaf-700 hover:!bg-cream/90"
        />
      </div>
    </section>
  )
}
