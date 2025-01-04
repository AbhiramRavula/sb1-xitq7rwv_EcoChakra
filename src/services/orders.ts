import { supabase } from '../lib/supabase';
import type { Order, OrderItem } from '../types/order';

export async function createOrder(
  orderData: Omit<Order, 'id' | 'created_at'>,
  orderItems: Omit<OrderItem, 'id' | 'created_at' | 'order_id'>[]
) {
  const { data: order, error: orderError } = await supabase
    .from('orders')
    .insert([orderData])
    .select()
    .single();

  if (orderError) throw orderError;

  const itemsWithOrderId = orderItems.map(item => ({
    ...item,
    order_id: order.id
  }));

  const { data: items, error: itemsError } = await supabase
    .from('order_items')
    .insert(itemsWithOrderId)
    .select();

  if (itemsError) throw itemsError;

  return { order, items };
}

export async function getOrders(userId: string) {
  const { data, error } = await supabase
    .from('orders')
    .select(`
      *,
      order_items (*)
    `)
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}