'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import {
  LayoutDashboardIcon,
  UsersIcon,
  CalendarIcon,
  CreditCardIcon,
  SettingsIcon,
  HelpCircleIcon,
  MenuIcon,
  XIcon,
  SearchIcon,
  LogOutIcon,
} from 'lucide-react';
import { ThemeSwitch } from '@/components/shared/ThemeSwitch';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/login');
  };

  return (
    <div className="w-full min-h-screen text-gray-900 transition-colors bg-gray-50 dark:bg-gray-950 dark:text-gray-50">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`
            fixed lg:relative inset-y-0 left-0 z-50 w-64 lg:w-64
            bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800
            transform transition-all duration-300 lg:transform-none
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            flex flex-col
          `}
        >
          <div className="p-6">
            {/* Mobile close button */}
            <button
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
              className="absolute p-2 transition-colors rounded-lg lg:hidden top-4 right-4 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <XIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>

            {/* Logo */}
            <div className="flex items-center gap-2 mb-8">
              <div className="flex items-center justify-center w-8 h-8 font-bold text-white rounded-lg bg-primary-600">
                T
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-gray-50">
                TutorMate
              </span>
            </div>

            {/* Search */}
            <div className="relative mb-6">
              <SearchIcon className="absolute w-4 h-4 text-gray-400 -translate-y-1/2 left-3 top-1/2 dark:text-gray-400" />
              <input
                type="text"
                placeholder="Search students..."
                className="w-full pr-3 text-sm text-gray-900 transition-colors border border-gray-200 rounded-lg h-9 pl-9 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/30"
              />
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
              <NavItem
                href="/dashboard"
                icon={LayoutDashboardIcon}
                label="Overview"
                active={pathname === '/dashboard'}
              />
              <NavItem
                href="/dashboard/students"
                icon={UsersIcon}
                label="Students"
                active={pathname.startsWith('/dashboard/students')}
              />
              <NavItem
                href="/dashboard/schedule"
                icon={CalendarIcon}
                label="Schedule"
                active={pathname.startsWith('/dashboard/schedule')}
              />
              <NavItem
                href="/dashboard/finance"
                icon={CreditCardIcon}
                label="Finance"
                active={pathname.startsWith('/dashboard/finance')}
              />
            </nav>

            <div className="mt-8">
              <div className="px-2 mb-2 text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-500">
                Settings
              </div>
              <nav className="space-y-1">
                <NavItem
                  href="/dashboard/settings"
                  icon={SettingsIcon}
                  label="Settings"
                  active={pathname === '/dashboard/settings'}
                />
              </nav>
            </div>
          </div>

          {/* User Profile (Bottom) */}
          <div className="p-4 mt-auto border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-8 h-8 text-sm font-medium rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300">
                ME
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  My Account
                </p>
                <p className="text-xs text-gray-500 truncate dark:text-gray-400">
                  Teacher
                </p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center justify-center w-full gap-2 px-3 py-2 text-sm font-medium text-red-600 transition-colors rounded-lg bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30"
            >
              <LogOutIcon className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
          {/* Top Header */}
          <header className="flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800 lg:px-8">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(true)}
                aria-label="Open sidebar"
                className="p-2 transition-colors rounded-lg lg:hidden hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <MenuIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>
              <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-50">
                {pathname === '/dashboard' ? 'Dashboard' : 
                 pathname.includes('students') ? 'Students' :
                 pathname.includes('schedule') ? 'Schedule' :
                 pathname.includes('finance') ? 'Finance' : 'Dashboard'}
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <ThemeSwitch />
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 p-4 overflow-y-auto lg:p-8">
            <div className="mx-auto max-w-7xl">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function NavItem({
  href,
  icon: Icon,
  label,
  active,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`
        flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors
        ${
          active
            ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
        }
      `}
    >
      <Icon className={`w-5 h-5 ${active ? 'text-primary-600 dark:text-primary-400' : 'text-gray-400 dark:text-gray-500'}`} />
      {label}
    </Link>
  );
}
