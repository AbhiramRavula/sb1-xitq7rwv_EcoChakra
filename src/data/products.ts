import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 'organic-manure',
    name: 'Organic Manure',
    description: 'High-quality organic manure made from processed agricultural waste. Rich in nutrients and perfect for all types of crops.',
    price: 12.99,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1589928030367-5e0d5280a0e9?auto=format&fit=crop&q=80',
    benefits: [
      'Improves soil structure',
      'Enhances water retention',
      'Promotes beneficial microorganisms',
      'Sustainable source of nutrients'
    ],
    composition: [
      'Nitrogen: 1.5-2%',
      'Phosphorus: 0.9-1.2%',
      'Potassium: 1.2-1.5%',
      'Organic Matter: 65-70%'
    ]
  },
  {
    id: 'peat-moss',
    name: 'Premium Peat Moss',
    description: 'High-quality peat moss perfect for improving soil structure and water retention. Ideal for gardening and agriculture.',
    price: 15.99,
    unit: 'kg',
    image: 'https://images.unsplash.com/photo-1624923686627-514dd5e57bae?auto=format&fit=crop&q=80',
    benefits: [
      'Excellent water retention',
      'Improves soil aeration',
      'pH balanced',
      'Perfect for seedlings'
    ]
  }
];