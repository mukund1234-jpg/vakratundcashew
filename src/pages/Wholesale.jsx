import Seo from '../components/Seo.jsx'
import Breadcrumb from '../components/Breadcrumb.jsx'
import WholesaleSection from '../components/WholesaleSection.jsx'
import WholesaleInquiryForm from '../components/WholesaleInquiryForm.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import { business } from '../config/business.js'

export default function Wholesale() {
  return (
    <>
      <Seo
        title="Wholesale & Bulk Cashew Supply | Kankavli, Maharashtra"
        description="Wholesale and bulk cashew supply for dry fruit shops, sweet shops, hotels, restaurants, supermarkets and distributors across Maharashtra. Request today's wholesale price."
      />
      <Breadcrumb items={[{ label: 'Wholesale' }]} />

      <section className="section-pad pb-8">
        <div className="container-page max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-leaf-600">Wholesale</p>
          <h1 className="mt-2 text-3xl sm:text-4xl">Wholesale &amp; bulk cashew supply</h1>
          <p className="mt-4 text-husk-600">
            Looking for reliable cashew supply for your business?
          </p>
          <p className="mt-2 text-husk-600">
            We accept wholesale and bulk inquiries for shops, hotels, sweet
            shops, distributors, restaurants and other businesses.
          </p>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="container-page">
          <WholesaleSection />
        </div>
      </section>

      <section className="section-pad bg-husk-50">
        <div className="container-page grid gap-10 lg:grid-cols-5 lg:gap-14">
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl">Request wholesale price</h2>
            <p className="mt-3 text-husk-600">
              Fill in your requirement below and it will open as a
              ready-to-send WhatsApp message — or message us directly.
            </p>
            <div className="mt-6">
              <WhatsAppButton
                message="Hello, I would like to enquire about wholesale cashew supply."
                label="WhatsApp Us Directly"
              />
            </div>
            <p className="mt-6 text-sm text-husk-500">
              Prices change with the market, so we don't list them here —
              contact us for today's wholesale price and we'll reply as
              quickly as we can.
            </p>
          </div>
          <div className="lg:col-span-3">
            <WholesaleInquiryForm />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <p className="text-sm font-medium tracking-wide text-leaf-600">Local Reach</p>
          <h2 className="mt-2 text-2xl sm:text-3xl">Serving businesses from Konkan</h2>
          <p className="mt-3 max-w-xl text-husk-600">
            We accept orders and inquiries from customers across Maharashtra.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {business.servedRegions.map((r) => (
              <span
                key={r}
                className="rounded-full border border-husk-200 bg-white px-4 py-2 text-sm text-husk-700"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
