import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

export default function Sidebar({ navigation }) {
  const { pathname } = useLocation();

  return (
    <div className="h-screen w-screen bg-white dark:bg-slate-900">
      <aside
        id="sidebar"
        className="fixed left-0 top-0 z-40 h-screen w-64 transition-transform"
        aria-label="Sidebar"
      >
        <div className="flex h-full flex-col overflow-y-auto border-r border-slate-200 bg-white px-3 py-4 dark:border-slate-700 dark:bg-slate-900">
          <div
            href="#"
            className="mb-10 flex items-center rounded-lg px-3 py-2 text-slate-900 dark:text-white"
          >
            {/*
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-command"
              >
                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
              </svg>
            */}
            <span className="ml-3 text-base font-semibold">JARVIS</span>
          </div>
          <ul className="space-y-2 text-sm font-medium">
            {navigation.map((el) => {
              const isActive = el.group
                ? pathname.startsWith(el.group)
                : el.href === pathname;

              return (
                <li key={el.name}>
                  <Link
                    to={el.href}
                    className="flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700"
                  >
                    <el.icon
                      className={classNames(
                        isActive
                          ? 'text-indigo-500'
                          : 'text-gray-700 group-hover:text-gray-500',
                        'h-6 w-6 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                    <span
                      className={classNames(
                        isActive
                          ? 'text-indigo-500'
                          : 'text-gray-700 group-hover:text-gray-500',
                        'ml-2 flex-shrink-0'
                      )}
                    >
                      {el.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </div>
  );
}
