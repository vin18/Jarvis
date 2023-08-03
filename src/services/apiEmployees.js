import supabase from './supabase';

export async function getEmployees() {
  const { data: employees, error } = await supabase
    .from('employees')
    .select('*');

  if (error) throw new Error(error.message);

  return employees;
}

export async function deleteEmployee(employeeId) {
  const { error } = await supabase
    .from('employees')
    .delete()
    .eq('id', employeeId);

  if (error) throw new Error(error.message);
}
