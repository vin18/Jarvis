import { useQuery } from '@tanstack/react-query';
import { getEmployee as getEmployeeApi } from '../../services/apiEmployees';

export function useEmployee(employeeId) {
  const { isLoading, data: employee } = useQuery({
    queryKey: ['employee', employeeId],
    queryFn: () => getEmployeeApi(employeeId),
  });

  return { isLoading, employee };
}
