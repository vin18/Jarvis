import { Outlet } from 'react-router-dom';
import {
  HomeIcon,
  CogIcon,
  UsersIcon,
  SunIcon,
  UserPlusIcon,
} from '@heroicons/react/24/outline';
import Sidebar from './ui/sidebar';

export default function AppLayout() {
  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
    { name: 'Leaves', href: '/leaves', icon: SunIcon },
    { name: 'Employees', href: '/employees', icon: UsersIcon },
  ];

  return (
    <div>
      <Sidebar navigation={navigation} />
      <main className="h-full w-full">
        <Outlet />
      </main>
    </div>
  );
}
