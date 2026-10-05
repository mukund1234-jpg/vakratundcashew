import Seo from '../components/Seo.jsx'
import Breadcrumb from '../components/Breadcrumb.jsx'
import CashewIllustration from '../components/CashewIllustration.jsx'
import StatsSection from '../components/StatsSection.jsx'
import CTASection from '../components/CTASection.jsx'

export default function About() {
  return (
    <>
      <Seo
        title="About Us | Konkan Cashew Co., Kankavli"
        description="Konkan Cashew Co. is a local cashew manufacturer and supplier based in Kankavli, Sindhudurg, Maharashtra, supplying retail and wholesale customers."
      />
      <Breadcrumb items={[{ label: 'About' }]} />

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="text-sm font-medium tracking-wide text-leaf-600">About Us</p>
            <h1 className="mt-2 text-3xl sm:text-4xl">From Konkan to your table</h1>
            <div className="mt-5 space-y-4 text-husk-600">
              <p>
                We are a local cashew business based in Kankavli, Maharashtra,
                focused on supplying quality cashew products to retail and
                wholesale customers.
              </p>
              <p>
                Our focus is simple: quality products, reliable communication
                and long-term customer relationships.
              </p>
              <p className="rounded-xl border border-dashed border-husk-200 bg-husk-50 p-4 text-sm text-husk-500">
                [Add actual business story here — how the business started,
                who runs it, and what makes your process distinct.]
              </p>
            </div>
          </div>
          <CashewIllustration className="h-72 w-full sm:h-96" />
        </div>
      </section>

      <StatsSection />

      <section className="section-pad">
        <div className="container-page grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-husk-100 bg-white/60 p-7">
            <h2 className="text-xl">What we focus on</h2>
            <ul className="mt-4 space-y-3 text-husk-600">
              <li>• Careful selection and processing of raw cashew</li>
              <li>• Clear communication on price and availability</li>
              <li>• Supplying both small retail packs and bulk orders</li>
              <li>• Building long-term relationships with repeat buyers</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-husk-100 bg-white/60 p-7">
            <h2 className="text-xl">A note on claims</h2>
            <p className="mt-4 text-husk-600">
              We only display business details, certifications and
              statistics that are accurate and provided by the business
              owner. Placeholder sections on this site will be replaced with
              real information as it becomes available — we'd rather show
              nothing than an exaggerated claim.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Want to know more about how we work?"
        subtitle="Ask us directly on WhatsApp about our process, products or an order."
        whatsappMessage="Hello, I'd like to know more about Konkan Cashew Co."
        buttonLabel="Talk to Us on WhatsApp"
      />
    </>
  )
}
