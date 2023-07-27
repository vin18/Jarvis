import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../features/authentication/useUser';

export default function ProtectedPage({ children }) {
  // TODO: Remove
  return children;

  const navigate = useNavigate();
  const { isLoading, user, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate(`/login`);
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) return <p>Loading..</p>;

  if (isAuthenticated) return children;
}
