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
    { name: 'Users', href: '/users', icon: UserPlusIcon },
  ];

  return (
    <div className="flex">
      <Sidebar navigation={navigation} />
      <main className="bg-gray-50 h-full w-full">
        <Outlet />
      </main>
    </div>
  );
}
