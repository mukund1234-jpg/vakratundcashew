import { Link } from 'react-router-dom'
import { Sprout, MapPinned, MessageCircle, PackageCheck } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import HeroSection from '../components/HeroSection.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import StatsSection from '../components/StatsSection.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import AboutSection from '../components/AboutSection.jsx'
import QualitySection from '../components/QualitySection.jsx'
import WholesaleSection from '../components/WholesaleSection.jsx'
import TestimonialSection from '../components/TestimonialSection.jsx'
import CTASection from '../components/CTASection.jsx'
import { products } from '../data/products.js'
import { business } from '../config/business.js'

const features = [
  { icon: Sprout, title: 'Processed With Care', description: 'Cashews are cleaned, graded and quality-checked before packing.' },
  { icon: PackageCheck, title: 'Retail & Wholesale', description: 'Small retail packs alongside bulk quantities for businesses.' },
  { icon: MapPinned, title: 'Based in Konkan', description: 'Sourced and processed close to Kankavli, Sindhudurg.' },
  { icon: MessageCircle, title: 'Direct WhatsApp Contact', description: 'Ask about price, availability and place your order directly.' },
]

export default function Home() {
  return (
    <>
      <Seo
        title="Konkan Cashew Co. | Cashew Manufacturer & Wholesale Supplier, Kankavli"
        description="Cashew manufacturer and wholesale supplier based in Kankavli, Sindhudurg, Maharashtra. Retail packs, bulk orders and wholesale supply — order directly on WhatsApp."
      />
      <HeroSection />

      <section className="section-pad pt-0 sm:pt-0">
        <div className="container-page grid grid-cols-2 gap-4 sm:grid-cols-4">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </section>

      <StatsSection />

      <section className="section-pad">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-lg">
              <p className="text-sm font-medium tracking-wide text-leaf-600">Our Range</p>
              <h2 className="mt-2 text-3xl sm:text-4xl">Our cashew products</h2>
              <p className="mt-3 text-husk-600">
                Choose from our range of carefully processed cashew products
                for retail, wholesale and bulk requirements.
              </p>
            </div>
            <Link
              to="/products"
              className="text-sm font-semibold text-husk-800 underline decoration-turmeric-400 decoration-2 underline-offset-4"
            >
              View all products
            </Link>
          </div>

          <div className="mt-10">
            <ProductGrid products={products.slice(0, 4)} />
          </div>
        </div>
      </section>

      <AboutSection />
      <QualitySection />

      <section className="section-pad">
        <div className="container-page">
          <div className="max-w-xl">
            <p className="text-sm font-medium tracking-wide text-leaf-600">Wholesale</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">Supplying businesses across Maharashtra</h2>
            <p className="mt-4 text-husk-600">
              We accept wholesale and bulk inquiries for shops, hotels, sweet
              shops, distributors, restaurants and other businesses.
            </p>
          </div>
          <div className="mt-10">
            <WholesaleSection />
          </div>
          <div className="mt-8">
            <Link
              to="/wholesale"
              className="inline-flex items-center rounded-full bg-husk-800 px-6 py-3 text-sm font-semibold text-cream hover:bg-husk-900"
            >
              Request Wholesale Price
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-husk-50">
        <div className="container-page">
          <p className="text-sm font-medium tracking-wide text-leaf-600">Local Reach</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">Serving customers from Konkan</h2>
          <p className="mt-4 max-w-xl text-husk-600">
            We accept orders and inquiries from customers across Maharashtra.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
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

      <TestimonialSection />

      <CTASection
        title="Looking for wholesale cashew supply?"
        subtitle="Message us your requirement and we'll get back with pricing and availability."
        whatsappMessage="Hello, I would like to enquire about wholesale cashew supply."
        buttonLabel="Enquire on WhatsApp"
      />
    </>
  )
}
