import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import AppLayout from './components/AppLayout';
import { Button } from './components/ui/button';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Leaves from './pages/Leaves';
import Login from './pages/Login';
import ProtectedPage from './pages/ProtectedPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedPage>
                <AppLayout />
              </ProtectedPage>
            }
          >
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/leaves" element={<Leaves />} />
            <Route path="/employees" element={<Employees />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster position="top-right" gutter={12} />
    </QueryClientProvider>
  );
}

export default App;
