import { useQuery } from '@tanstack/react-query';
import { getEmployees } from '../../services/apiEmployees';

export function useEmployees() {
  const { isLoading, data: employees } = useQuery({
    queryKey: ['employees'],
    queryFn: getEmployees,
  });

  return { isLoading, employees };
}
