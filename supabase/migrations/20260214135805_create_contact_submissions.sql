/*
  # Create contact_submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, not null) - sender's name
      - `email` (text, not null) - sender's email
      - `phone` (text, not null) - sender's phone number
      - `address` (text, not null) - sender's address
      - `message` (text, default '') - optional message
      - `referral` (text, default '') - how they found the business
      - `created_at` (timestamptz) - submission timestamp

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add INSERT policy for anonymous users (public form)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  address text NOT NULL,
  message text DEFAULT '',
  referral text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    name IS NOT NULL AND
    email IS NOT NULL AND
    phone IS NOT NULL AND
    address IS NOT NULL
  );
