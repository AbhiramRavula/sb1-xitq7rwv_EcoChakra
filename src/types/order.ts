export interface Order {
  id: string;
  user_id: string;
  status: 'pending' | 'processing' | 'delivered' | 'cancelled';
  total_amount: number;
  delivery_address: {
    full_name: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  created_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  unit_price: number;
  created_at: string;
}