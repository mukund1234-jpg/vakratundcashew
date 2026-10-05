// Replace `image` paths with real product photography when available.
// Placeholder gradients are used in ProductCard when no image is present.

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'whole', label: 'Whole Cashew' },
  { id: 'broken', label: 'Broken Cashew' },
  { id: 'flavoured', label: 'Flavoured' },
  { id: 'gift', label: 'Gift Packs' },
  { id: 'wholesale', label: 'Wholesale' },
];

export const products = [
  {
    id: 'w180',
    grade: 'W180',
    name: 'W180 Cashew',
    category: 'whole',
    tags: ['wholesale'],
    shortDescription:
      'Large, whole cashew kernels — our biggest grade, suited for premium retail and gifting.',
    description:
      'W180 refers to cashew kernels of the largest size grade, counted at roughly 180 kernels per pound. These whole kernels are hand-sorted and suited to customers who want a premium, large-kernel cashew for retail packs, gifting or premium hotel use.',
    weights: ['250g', '500g', '1kg', 'Bulk'],
    suitableFor: ['Retail', 'Gift Buyers', 'Hotels', 'Wholesale Buyers'],
  },
  {
    id: 'w210',
    grade: 'W210',
    name: 'W210 Cashew',
    category: 'whole',
    tags: ['wholesale'],
    shortDescription:
      'Whole kernels, slightly smaller than W180 — a popular everyday premium grade.',
    description:
      'W210 whole cashew kernels are a popular size for everyday retail packs and sweet-shop use, offering the same whole-kernel quality as our larger grades at a more accessible price point.',
    weights: ['250g', '500g', '1kg', 'Bulk'],
    suitableFor: ['Retail', 'Sweet Shops', 'Dry Fruit Stores', 'Wholesale Buyers'],
  },
  {
    id: 'w240',
    grade: 'W240',
    name: 'W240 Cashew',
    category: 'whole',
    tags: ['wholesale'],
    shortDescription:
      'A widely used medium whole-kernel grade for retail and wholesale supply.',
    description:
      'W240 is one of the most commonly stocked whole cashew grades, balancing kernel size and value. It works well for retail counters, dry fruit shops and general wholesale supply.',
    weights: ['250g', '500g', '1kg', 'Bulk'],
    suitableFor: ['Retail', 'Dry Fruit Stores', 'Supermarkets', 'Wholesale Buyers'],
  },
  {
    id: 'w320',
    grade: 'W320',
    name: 'W320 Cashew',
    category: 'whole',
    tags: ['wholesale'],
    shortDescription:
      'Premium whole cashew kernels suitable for retail and wholesale requirements.',
    description:
      'W320 is our most popular whole-kernel grade — a reliable, everyday cashew suited to home use, sweet shops, hotels and dry fruit stores alike. Processed and graded carefully to keep kernels whole and clean.',
    weights: ['250g', '500g', '1kg', 'Bulk'],
    suitableFor: ['Retail', 'Hotels', 'Sweet Shops', 'Dry Fruit Stores', 'Wholesale Buyers'],
  },
  {
    id: 'broken',
    grade: 'Broken',
    name: 'Broken Cashew',
    category: 'broken',
    tags: ['wholesale'],
    shortDescription:
      'Broken cashew kernels — an economical choice for cooking, sweets and bulk use.',
    description:
      'Broken cashew kernels are a cost-effective option for kitchens, sweet-making and bulk institutional use, where whole-kernel appearance matters less than taste and quality.',
    weights: ['500g', '1kg', 'Bulk'],
    suitableFor: ['Sweet Shops', 'Hotels', 'Restaurants', 'Bulk Buyers'],
  },
  {
    id: 'pieces',
    grade: 'Small Pieces',
    name: 'Small Pieces',
    category: 'broken',
    tags: ['wholesale'],
    shortDescription:
      'Smaller cashew pieces, ideal for garnishing, baking and confectionery.',
    description:
      'Small cashew pieces are commonly used for garnishing sweets and desserts, baking and confectionery work, offered at accessible bulk pricing.',
    weights: ['500g', '1kg', 'Bulk'],
    suitableFor: ['Sweet Shops', 'Bakeries', 'Restaurants', 'Bulk Buyers'],
  },
  {
    id: 'masala',
    grade: 'Flavoured',
    name: 'Masala Cashew',
    category: 'flavoured',
    tags: [],
    shortDescription:
      'Roasted cashews tossed in a light spice blend — a popular snacking option.',
    description:
      'Our masala cashew is roasted and tossed in a light spice blend, made for snacking. A popular festive and everyday retail item.',
    weights: ['250g', '500g'],
    suitableFor: ['Retail', 'Gift Buyers'],
  },
  {
    id: 'gift',
    grade: 'Gift Pack',
    name: 'Cashew Gift Pack',
    category: 'gift',
    tags: [],
    shortDescription:
      'Whole cashew kernels in festive packaging — ready for gifting.',
    description:
      'A festive gift pack of premium whole cashew kernels, put together for gifting during festivals and celebrations. Packaging options can be discussed for bulk gifting orders.',
    weights: ['250g', '500g', '1kg'],
    suitableFor: ['Gift Buyers', 'Festival Customers', 'Corporate Gifting'],
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === id);
}
