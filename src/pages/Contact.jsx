import Seo from '../components/Seo.jsx'
import Breadcrumb from '../components/Breadcrumb.jsx'
import ContactSection from '../components/ContactSection.jsx'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us | Konkan Cashew Co., Kankavli, Sindhudurg"
        description="Contact Konkan Cashew Co. in Kankavli, Sindhudurg, Maharashtra for retail, wholesale and bulk cashew inquiries — WhatsApp, phone or visit us."
      />
      <Breadcrumb items={[{ label: 'Contact' }]} />
      <ContactSection />
    </>
  )
}
