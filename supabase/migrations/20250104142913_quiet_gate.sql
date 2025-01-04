/*
  # Create farmers and orders tables

  1. New Tables
    - `farmers`
      - `id` (uuid, primary key)
      - `full_name` (text)
      - `email` (text, unique)
      - `phone` (text)
      - `village` (text)
      - `district` (text)
      - `state` (text)
      - `farm_size` (numeric)
      - `primary_crop` (text)
      - `created_at` (timestamptz)

    - `orders`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references farmers)
      - `status` (enum)
      - `total_amount` (numeric)
      - `delivery_address` (jsonb)
      - `created_at` (timestamptz)

    - `order_items`
      - `id` (uuid, primary key)
      - `order_id` (uuid, references orders)
      - `product_id` (text)
      - `quantity` (numeric)
      - `unit_price` (numeric)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create farmers table
CREATE TABLE farmers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text NOT NULL,
  village text NOT NULL,
  district text NOT NULL,
  state text NOT NULL,
  farm_size numeric NOT NULL,
  primary_crop text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create order status enum
CREATE TYPE order_status AS ENUM ('pending', 'processing', 'delivered', 'cancelled');

-- Create orders table
CREATE TABLE orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES farmers(id) NOT NULL,
  status order_status DEFAULT 'pending',
  total_amount numeric NOT NULL,
  delivery_address jsonb NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create order items table
CREATE TABLE order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id) NOT NULL,
  product_id text NOT NULL,
  quantity numeric NOT NULL,
  unit_price numeric NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE farmers ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Policies for farmers table
CREATE POLICY "Farmers can read own data"
  ON farmers
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Farmers can insert own data"
  ON farmers
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Policies for orders table
CREATE POLICY "Users can read own orders"
  ON orders
  FOR SELECT
  TO authenticated
  USING (user_id IN (
    SELECT id FROM farmers WHERE id = auth.uid()
  ));

CREATE POLICY "Users can insert own orders"
  ON orders
  FOR INSERT
  TO authenticated
  WITH CHECK (user_id IN (
    SELECT id FROM farmers WHERE id = auth.uid()
  ));

-- Policies for order items
CREATE POLICY "Users can read own order items"
  ON order_items
  FOR SELECT
  TO authenticated
  USING (order_id IN (
    SELECT id FROM orders WHERE user_id IN (
      SELECT id FROM farmers WHERE id = auth.uid()
    )
  ));

CREATE POLICY "Users can insert own order items"
  ON order_items
  FOR INSERT
  TO authenticated
  WITH CHECK (order_id IN (
    SELECT id FROM orders WHERE user_id IN (
      SELECT id FROM farmers WHERE id = auth.uid()
    )
  ));