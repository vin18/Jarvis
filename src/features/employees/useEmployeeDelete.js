import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteEmployee as deleteEmployeeApi } from '../../services/apiEmployees';

export function useDeleteEmployee() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteEmployee } = useMutation({
    mutationFn: deleteEmployeeApi,
    onSuccess: () => {
      toast.success(`Employee successfully deleted`);
      queryClient.invalidateQueries({ queryKey: ['employees'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteEmployee };
}
