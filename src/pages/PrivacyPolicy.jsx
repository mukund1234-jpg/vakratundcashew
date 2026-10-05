import Seo from '../components/Seo.jsx'
import Breadcrumb from '../components/Breadcrumb.jsx'
import { business } from '../config/business.js'

export default function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy | Konkan Cashew Co."
        description="Privacy policy for Konkan Cashew Co. — how we handle information submitted through our website's forms and WhatsApp inquiries."
      />
      <Breadcrumb items={[{ label: 'Privacy Policy' }]} />

      <section className="section-pad">
        <div className="container-page max-w-2xl">
          <h1 className="text-3xl sm:text-4xl">Privacy Policy</h1>
          <p className="mt-3 text-sm text-husk-500">
            [Add last-updated date once finalised]
          </p>

          <div className="mt-8 space-y-8 text-husk-600">
            <div>
              <h2 className="text-xl text-husk-900">Information we collect</h2>
              <p className="mt-2">
                When you use our wholesale inquiry form or contact us on
                WhatsApp, we receive the information you choose to share —
                such as your name, business name, phone number, city and
                order requirements. We do not collect this information
                through any other automated means on this site.
              </p>
            </div>
            <div>
              <h2 className="text-xl text-husk-900">How we use it</h2>
              <p className="mt-2">
                We use the information you provide only to respond to your
                inquiry, share pricing and availability, and process orders.
                We do not sell or share your information with third parties.
              </p>
            </div>
            <div>
              <h2 className="text-xl text-husk-900">WhatsApp</h2>
              <p className="mt-2">
                Messages sent through our WhatsApp links are handled within
                WhatsApp, subject to WhatsApp's own privacy policy. We use
                these messages only to communicate with you about your
                inquiry or order.
              </p>
            </div>
            <div>
              <h2 className="text-xl text-husk-900">Contact</h2>
              <p className="mt-2">
                If you have questions about this policy, contact us at{' '}
                {business.email} or via WhatsApp.
              </p>
            </div>
            <p className="rounded-xl border border-dashed border-husk-200 bg-husk-50 p-4 text-sm text-husk-500">
              [This is placeholder policy text. Review with a qualified
              professional before publishing, and update it to reflect your
              actual data practices, especially if you later add analytics,
              cookies or a backend.]
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
