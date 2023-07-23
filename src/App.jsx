import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import AppLayout from './components/AppLayout';
import { Button } from './components/ui/button';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Leaves from './pages/Leaves';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leaves" element={<Leaves />} />
          <Route path="/employees" element={<Employees />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
