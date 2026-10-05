import Seo from '../components/Seo.jsx'
import Breadcrumb from '../components/Breadcrumb.jsx'
import GalleryGrid from '../components/GalleryGrid.jsx'
import CTASection from '../components/CTASection.jsx'

export default function Gallery() {
  return (
    <>
      <Seo
        title="Gallery | Konkan Cashew Co., Kankavli"
        description="Photos of our cashew products, processing, packaging and dispatch from our facility near Kankavli, Sindhudurg, Maharashtra."
      />
      <Breadcrumb items={[{ label: 'Gallery' }]} />

      <section className="section-pad pb-8">
        <div className="container-page max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-leaf-600">Gallery</p>
          <h1 className="mt-2 text-3xl sm:text-4xl">A look at our work</h1>
          <p className="mt-4 text-husk-600">
            Photos of our products, processing and packaging — real
            photography will replace the placeholders below as it's added.
          </p>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="container-page">
          <GalleryGrid />
        </div>
      </section>

      <CTASection />
    </>
  )
}
