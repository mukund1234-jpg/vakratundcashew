import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react'
import { business } from '../config/business.js'
import WhatsAppButton from './WhatsAppButton.jsx'

export default function ContactSection() {
  return (
    <section className="section-pad">
      <div className="container-page grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium tracking-wide text-leaf-600">Contact</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">Get in touch</h2>
          <p className="mt-4 leading-relaxed text-husk-600">
            For product enquiries, wholesale pricing or bulk orders, reach us
            directly on WhatsApp or through the details below.
          </p>

          <ul className="mt-8 space-y-5">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-turmeric-500" />
              <div>
                <p className="font-semibold text-husk-900">{business.name}</p>
                <p className="text-sm text-husk-600">
                  {business.address.line1}
                  <br />
                  {business.address.village}, {business.address.district}, {business.address.state}
                  {business.address.pincode ? `, ${business.address.pincode}` : ''}
                </p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-turmeric-500" />
              <span className="text-husk-700">{business.phone}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-turmeric-500" />
              <span className="text-husk-700">{business.email}</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-turmeric-500" />
              <div className="text-sm text-husk-700">
                {business.hours.map((h) => (
                  <p key={h.day}>
                    {h.day}: {h.time}
                  </p>
                ))}
              </div>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton />
            <a
              href={business.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-husk-200 px-6 py-3 text-sm font-semibold text-husk-800 hover:bg-husk-50"
            >
              <Navigation className="h-4 w-4" />
              Get Directions
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-organic border border-husk-100 shadow-soft">
          <iframe
            title="Business location on Google Maps"
            src={business.mapsEmbedUrl}
            className="h-full min-h-[320px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
