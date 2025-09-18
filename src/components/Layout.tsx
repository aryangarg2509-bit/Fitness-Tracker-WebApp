import React, { useState } from 'react';
import { 
  User, 
  Bell, 
  Menu, 
  X, 
  Dumbbell, 
  Trophy, 
  Target, 
  BarChart3,
  Users,
  Calendar,
  Settings,
  LogOut,
  Zap
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onPageChange }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { icon: BarChart3, label: 'Dashboard', id: 'dashboard' },
    { icon: Dumbbell, label: 'AI Workouts', id: 'workouts' },
    { icon: Target, label: 'Form Tracker', id: 'form-tracker' },
    { icon: Trophy, label: 'Challenges', id: 'challenges' },
    { icon: Users, label: 'Community', id: 'community' },
    { icon: Calendar, label: 'Recovery Hub', id: 'recovery' },
    { icon: Settings, label: 'Settings', id: 'settings' }
  ];

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Dumbbell className="h-8 w-8 text-orange-500" />
              <Zap className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              ProFit Elite
            </span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-300"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <nav className="mt-5 px-2">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`group flex items-center w-full px-2 py-2 text-base font-medium rounded-md transition-colors ${
                  currentPage === item.id
                    ? 'bg-orange-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <item.icon className="mr-4 h-5 w-5" />
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-gray-700">
          <div className="flex items-center space-x-3 mb-3">
            <div className="flex-shrink-0">
              <div className="h-8 w-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white">Elite Athlete</p>
              <p className="text-xs text-gray-400">Level 47 • 🔥 89 day streak</p>
            </div>
          </div>
          
          <button className="flex items-center space-x-2 text-sm text-gray-400 hover:text-gray-300 w-full">
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top header */}
        <header className="flex items-center justify-between h-16 px-4 bg-gray-800 border-b border-gray-700">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-300"
          >
            <Menu className="h-5 w-5" />
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4 text-sm text-gray-300">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>AI Coach Active</span>
              </div>
              <div className="flex items-center space-x-1">
                <Trophy className="h-4 w-4 text-yellow-500" />
                <span>Rank #247 Global</span>
              </div>
            </div>
            <button className="relative p-2 text-gray-400 hover:text-gray-300">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-orange-500 transform translate-x-1 -translate-y-1"></span>
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900">
          {children}
        </main>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden" onClick={() => setSidebarOpen(false)}></div>
      )}
    </div>
  );
};

export default Layout;