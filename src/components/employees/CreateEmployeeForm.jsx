import { zodResolver } from '@hookform/resolvers/zod'
import classNames from 'classnames'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../ui/button'
import { useEmployee } from '../../features/employees/useEmployee'
import { useEmployeeCreate } from '../../features/employees/useEmployeeCreate'
import { useEmployeeEdit } from '../../features/employees/useEmployeeEdit'

const employeeSchema = z.object({
  name: z.string().nonempty('Name is required'),
  email: z.string().nonempty('Email is required').email('Invalid email'),
  phone: z.string().nonempty('Phone is required'),
  experience: z.string().nonempty('Experience is required'),
  designation: z.string().nonempty('Designation is required'),
  address1: z.string().nonempty('Address is required'),
  city: z.string().nonempty('City is required'),
  country: z.string().nonempty('Country is required'),
})

function CreateEmployeeForm({ onClose, employeeId }) {
  const { isCreating, createEmployee } = useEmployeeCreate()
  const { editEmployee } = useEmployeeEdit()

  const { employee } = useEmployee(employeeId)
  const isEditing = Boolean(employeeId)
  console.log(employee)

  const { register, handleSubmit, reset, formState } = useForm({
    resolver: zodResolver(employeeSchema),
    defaultValues: isEditing ? employee : {},
  })
  const { errors } = formState

  function onSubmit(data) {
    console.log(data)

    if (isEditing) {
      editEmployee(
        { employee: data, employeeId },
        {
          onSuccess: () => {
            reset()
            onClose()
          },
        }
      )
    } else {
      createEmployee(data, {
        onSuccess: () => {
          reset()
          onClose()
        },
      })
    }
  }

  function Input({
    label,
    id,
    type,
    error,
    required,
    placeholder,
    inputClassName,
    disabled,
  }) {
    return (
      <div className="mb-3">
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label} {required && <span className="text-top text-red-500">*</span>}
        </label>
        <input
          type={type}
          id={id}
          {...register(id)}
          className={classNames(
            'block w-full rounded-md border-2 border-gray-200 text-gray-600 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
            {
              'mt-1': label,
              'border-red-500': error,
            },
            inputClassName
          )}
          placeholder={placeholder}
          disabled={disabled}
        />
        {error && <p className="text-red-500 text-sm">{error?.message}</p>}
      </div>
    )
  }

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Employee Name"
          id="name"
          type="text"
          error={errors?.name}
          placeholder="Sherlock Holmes"
          disabled={isCreating}
          required
        />

        <div className="flex justify-between space-x-4">
          <Input
            label="Employee Email"
            id="email"
            type="email"
            error={errors?.email}
            placeholder="sherlock@holmes.com"
            disabled={isCreating}
            required
          />

          <Input
            label="Employee Phone"
            id="phone"
            type="tel"
            error={errors?.phone}
            placeholder="9868482423"
            disabled={isCreating}
            required
          />
        </div>

        <div className="flex justify-between space-x-4">
          <Input
            label="Experience"
            id="experience"
            type="text"
            error={errors?.experience}
            placeholder="5 years"
            disabled={isCreating}
            required
          />

          <Input
            label="Designation"
            id="designation"
            type="text"
            error={errors?.designation}
            placeholder="Detective"
            disabled={isCreating}
            required
          />
        </div>

        <Input
          label="Address"
          id="address1"
          type="text"
          error={errors?.address1}
          placeholder="221B Baker Street"
          disabled={isCreating}
          required
        />

        <div className="flex justify-between space-x-4">
          <Input
            label="City"
            id="city"
            type="text"
            error={errors?.city}
            placeholder="London"
            disabled={isCreating}
            required
          />

          <Input
            label="Country"
            id="country"
            type="text"
            error={errors?.country}
            placeholder="United Kingdom"
            disabled={isCreating}
            required
          />
        </div>

        <div className="flex justify-end mt-2 space-x-3">
          <Button disabled={isCreating}>Save</Button>
          <Button type="reset" onClick={onClose} variant="secondary">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  )
}

export default CreateEmployeeForm
