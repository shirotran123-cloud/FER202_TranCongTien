export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description: "High-quality noise-canceling wireless headphones with 30-hour battery life.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Mechanical Keyboard",
    description: "RGB mechanical keyboard with tactile switches for typing and gaming.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Smart Watch Series 8",
    description: "Advanced health tracking, fitness features, and always-on display.",
    price: 399.00,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Ergonomic Office Chair",
    description: "Fully adjustable ergonomic chair with lumbar support.",
    price: 249.50,
    image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "5",
    name: "4K Monitor 27-inch",
    description: "Ultra HD IPS monitor with HDR support and slim bezels.",
    price: 450.00,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "6",
    name: "Bluetooth Speaker",
    description: "Portable waterproof speaker with 360-degree sound.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=600&auto=format&fit=crop",
  },
];
