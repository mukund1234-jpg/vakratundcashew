// ------------------------------------------------------------------
// Central business configuration.
// Update the placeholder values below with the real business details.
// Nothing else in the codebase needs to change — every component reads
// from this file.
// ------------------------------------------------------------------

export const business = {
  name: 'Vakratund Cashew',
  tagline: 'Premium Cashews',
  legalNote: '[Add registered business name here, if different]',

  // WhatsApp number in international format, digits only, no + or spaces.
  // Example: 91XXXXXXXXXX
  whatsappNumber: '918421132638',

  phone: '+91 8421132638',
  email: 'info@konkancashewco.example',

  address: {
    line1: '[Add shop / warehouse address]',
    village: 'Kankavli',
    district: 'Sindhudurg',
    state: 'Maharashtra',
    pincode: '[PIN code]',
    country: 'India',
  },

  hours: [
    { day: 'Monday – Saturday', time: '[Add opening hours]' },
    { day: 'Sunday', time: '[Add opening hours]' },
  ],

  mapsEmbedUrl:
    'https://www.google.com/maps?q=Kankavli,+Sindhudurg,+Maharashtra&output=embed',
  mapsDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Kankavli,+Sindhudurg,+Maharashtra',

  // Fill these in once available — do not display placeholder/fake numbers.
  stats: [
    { value: '', label: 'Products' },
    { value: '', label: 'Wholesale Customers' },
    { value: '', label: 'Cities Served' },
    { value: '', label: 'Years of Experience' },
  ],

  servedRegions: [
    'Kankavli',
    'Sindhudurg',
    'Ratnagiri',
    'Goa',
    'Kolhapur',
    'Pune',
    'Mumbai',
    'Maharashtra',
  ],

  socials: {
    instagram: '',
    facebook: '',
  },
};

/**
 * Builds a wa.me link with a pre-filled message.
 * @param {string} message
 */
export function buildWhatsAppLink(message) {
  const base = `https://wa.me/${business.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function productInquiryMessage(productName) {
  return `Hello, I am interested in ${productName}. Please share the current price and availability.`;
}

export function wholesaleInquiryMessage({
  name,
  businessName,
  city,
  product,
  quantity,
  message,
}) {
  const lines = [
    'Wholesale Inquiry',
    '',
    `Name: ${name || '-'}`,
    `Business: ${businessName || '-'}`,
    `City: ${city || '-'}`,
    `Product: ${product || '-'}`,
    `Quantity: ${quantity || '-'}`,
    `Message: ${message || '-'}`,
  ];
  return lines.join('\n');
}
