import randomIntFromInterval from '../utils/createRandomNumber'
import supabase, { supabaseUrl } from './supabase'

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
  const profilePicID = randomIntFromInterval(1, 1000)
  const hasImagePath = employee.profilePic?.startsWith?.(supabaseUrl)
  const imageName = `${profilePicID}-${employee.profilePic.name}`
  const imagePath = hasImagePath
    ? employee.profilePic
    : `${supabaseUrl}/storage/v1/object/public/employee-images/${imageName}`

  let query = supabase.from('employees')

  // Create
  if (!employeeId)
    query = query.insert([{ ...employee, profilePic: imagePath }])

  // Edit
  // TODO: Delete previous image from supabase bucket and keep newly added image during edit session
  if (employeeId) {
    query = query
      .update({ ...employee, profilePic: imagePath })
      .eq('id', employeeId)
  }

  const { data, error } = await query.select().single()

  if (error) throw new Error(error.message)

  // Upload image
  const { error: storageError } = await supabase.storage
    .from('employee-images')
    .upload(imageName, employee.profilePic)

  if (storageError) {
    await supabase.from('employees').delete().eq('id', data.id)
    console.error(storageError)
    throw new Error(
      'Employee image could not be uploaded and the employee was not created'
    )
  }

  return data
}
