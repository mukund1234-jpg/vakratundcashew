import { useState } from 'react'
import { Send } from 'lucide-react'
import { buildWhatsAppLink, wholesaleInquiryMessage } from '../config/business.js'
import { products } from '../data/products.js'

const initialState = {
  name: '',
  businessName: '',
  phone: '',
  city: '',
  product: '',
  quantity: '',
  message: '',
}

export default function WholesaleInquiryForm() {
  const [form, setForm] = useState(initialState)

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = wholesaleInquiryMessage(form)
    const contactLine = form.phone ? `\nContact: ${form.phone}` : ''
    window.open(buildWhatsAppLink(text + contactLine), '_blank', 'noopener,noreferrer')
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl border border-husk-100 bg-white p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" required value={form.name} onChange={update('name')} />
        <Field label="Business Name" value={form.businessName} onChange={update('businessName')} />
        <Field label="Phone Number" type="tel" required value={form.phone} onChange={update('phone')} />
        <Field label="City" required value={form.city} onChange={update('city')} />
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-husk-700">Product Interested In</span>
        <select
          value={form.product}
          onChange={update('product')}
          className="w-full rounded-lg border border-husk-200 bg-white px-3.5 py-2.5 text-sm text-husk-800"
        >
          <option value="">Select a product</option>
          {products.map((p) => (
            <option key={p.id} value={p.name}>{p.name}</option>
          ))}
          <option value="Other / Not sure">Other / Not sure</option>
        </select>
      </label>

      <Field
        label="Approximate Quantity"
        placeholder="e.g. 25 kg / month"
        value={form.quantity}
        onChange={update('quantity')}
      />

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-husk-700">Message</span>
        <textarea
          rows={4}
          value={form.message}
          onChange={update('message')}
          className="w-full rounded-lg border border-husk-200 bg-white px-3.5 py-2.5 text-sm text-husk-800"
          placeholder="Tell us a bit about your requirement"
        />
      </label>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-leaf-500 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-leaf-600"
      >
        <Send className="h-4 w-4" />
        Send Wholesale Inquiry
      </button>
      <p className="text-xs text-husk-400">
        This opens WhatsApp with your details filled in, ready to send.
      </p>
    </form>
  )
}

function Field({ label, required, ...props }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-husk-700">
        {label} {required && <span className="text-turmeric-600">*</span>}
      </span>
      <input
        required={required}
        {...props}
        className="w-full rounded-lg border border-husk-200 bg-white px-3.5 py-2.5 text-sm text-husk-800"
      />
    </label>
  )
}
