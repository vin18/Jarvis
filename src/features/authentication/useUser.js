import { useQuery } from '@tanstack/react-query';
import { getCurrentLoggedInUser } from '../../services/apiAuth';

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentLoggedInUser,
  });

  return { isLoading, user, isAuthenticated: user?.role === 'authenticated' };
}
