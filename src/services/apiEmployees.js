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

export async function editEmployee(employee, employeeId) {
  const { data, error } = await supabase
    .from('employees')
    .update({ ...employee })
    .eq('id', employeeId)
    .select()
    .single();

  console.log(data);

  if (error) throw new Error(error.message);

  return data;
}
