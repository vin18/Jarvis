import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://jptpzskiwiejclysjouu.supabase.co';
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwdHB6c2tpd2llamNseXNqb3V1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkwMDE0MzMsImV4cCI6MjAwNDU3NzQzM30.m2c23_vd5KBXDxGFSTcaMQUbU-Spn__mZg2a21noVk8`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
