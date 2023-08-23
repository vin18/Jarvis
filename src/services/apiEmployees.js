import supabase from './supabase'

export async function getEmployees() {
  const { data: employees, error } = await supabase
    .from('employees')
    .select('*')

  if (error) throw new Error(error.message)

  return employees
}

export async function getEmployee(employeeId) {
  if (!employeeId) return

  const { data: employee, error } = await supabase
    .from('employees')
    .select('*')
    .eq('id', employeeId)
    .single()

  if (error) throw new Error(error.message)

  return employee
}

export async function deleteEmployee(employeeId) {
  const { error } = await supabase
    .from('employees')
    .delete()
    .eq('id', employeeId)

  if (error) throw new Error(error.message)
}

export async function createEditEmployee(employee, employeeId) {
  let query = supabase.from('employees')

  // Create
  if (!employeeId) query = query.insert([{ ...employee }])

  // Edit
  if (employeeId) query = query.update({ ...employee }).eq('id', employeeId)

  const { data, error } = await query.select().single()

  if (error) throw new Error(error.message)

  return data
}
