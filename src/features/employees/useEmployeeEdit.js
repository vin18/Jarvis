import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { editEmployee as editEmployeeApi } from '../../services/apiEmployees';

export function useEmployeeEdit() {
  const queryClient = useQueryClient();

  const { mutate: editEmployee, isLoading: isEditing } = useMutation({
    mutationFn: ({ employee, employeeId }) =>
      editEmployeeApi(employee, employeeId),
    onSuccess: () => {
      toast.success(`Employee successfully edited`);
      queryClient.invalidateQueries({ queryKey: ['employees'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editEmployee };
}
