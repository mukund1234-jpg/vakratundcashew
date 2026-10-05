import Seo from '../components/Seo.jsx'
import Breadcrumb from '../components/Breadcrumb.jsx'
import FAQAccordion from '../components/FAQAccordion.jsx'
import CTASection from '../components/CTASection.jsx'

const faqs = [
  {
    question: 'Do you sell wholesale cashews?',
    answer:
      'Yes, wholesale and bulk inquiries can be submitted through WhatsApp or the wholesale inquiry form on our Wholesale page.',
  },
  {
    question: 'Do you provide different cashew grades?',
    answer:
      'Yes — we supply W180, W210, W240, W320, broken cashew, small pieces, masala (flavoured) cashew and gift packs. See our Products page for the full range.',
  },
  {
    question: 'Can I order from outside Kankavli?',
    answer:
      'Yes, we accept orders and inquiries from customers across Maharashtra and beyond. Message us on WhatsApp with your location to check shipping.',
  },
  {
    question: "How can I get today's price?",
    answer:
      "Cashew prices change with the market, so we don't list fixed prices on the site. Contact us through WhatsApp for the latest price and availability.",
  },
  {
    question: 'Do you accept bulk orders?',
    answer:
      'Yes, subject to product availability and our current business terms. Share your quantity and product requirement with us on WhatsApp or via the wholesale form.',
  },
  {
    question: 'How do I place a retail order?',
    answer:
      'Browse our Products page, pick the grade and size you want, and tap "Order on WhatsApp" — this opens a pre-filled message so you can confirm details with us directly.',
  },
]

export default function FAQ() {
  return (
    <>
      <Seo
        title="Frequently Asked Questions | Konkan Cashew Co., Kankavli"
        description="Answers to common questions about ordering, wholesale supply, cashew grades, pricing and delivery from Konkan Cashew Co., Kankavli."
      />
      <Breadcrumb items={[{ label: 'FAQ' }]} />

      <section className="section-pad pb-8">
        <div className="container-page max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-leaf-600">FAQ</p>
          <h1 className="mt-2 text-3xl sm:text-4xl">Frequently asked questions</h1>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="container-page max-w-2xl">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection
        title="Still have a question?"
        subtitle="Message us directly on WhatsApp — we're happy to help."
      />
    </>
  )
}
