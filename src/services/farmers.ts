import { supabase } from '../lib/supabase';
import type { Farmer } from '../types/farmer';

export async function registerFarmer(farmerData: Omit<Farmer, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('farmers')
    .insert([farmerData])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getFarmerProfile(id: string) {
  const { data, error } = await supabase
    .from('farmers')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
}