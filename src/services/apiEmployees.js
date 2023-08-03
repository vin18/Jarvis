import supabase from './supabase';

export async function getEmployees() {
  const { data: employees, error } = await supabase
    .from('employees')
    .select('*');

  if (error) throw new Error(error.message);

  return employees;
}
