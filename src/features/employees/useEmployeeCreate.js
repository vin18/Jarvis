import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'
import { createEditEmployee } from '../../services/apiEmployees'

export function useEmployeeCreate() {
  const queryClient = useQueryClient()

  const { mutate: createEmployee, isLoading: isCreating } = useMutation({
    mutationFn: createEditEmployee,
    onSuccess: () => {
      toast.success('New employee successfully created')
      queryClient.invalidateQueries({ queryKey: ['employees'] })
    },
    onError: (err) => toast.error(err.message),
  })

  return { isCreating, createEmployee }
}
