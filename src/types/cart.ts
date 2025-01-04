export interface CartItem {
  productId: string;
  quantity: number;
  price: number;
  name: string;
  unit: string;
}

export interface DeliveryDetails {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}