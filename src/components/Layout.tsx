import React, { useState } from 'react';
import { 
  User, 
  Bell, 
  Menu, 
  X, 
  Shield, 
  Users, 
  FlaskConical, 
  BarChart3,
  Package,
  FileText,
  Settings,
  LogOut
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  userRole: string;
  onRoleChange: (role: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, userRole, onRoleChange }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const roleMenuItems = {
    admin: [
      { icon: BarChart3, label: 'Dashboard', id: 'dashboard' },
      { icon: Users, label: 'User Management', id: 'users' },
      { icon: Package, label: 'Suppliers', id: 'suppliers' },
      { icon: FileText, label: 'Reports', id: 'reports' },
      { icon: Settings, label: 'Settings', id: 'settings' }
    ],
    quality_officer: [
      { icon: BarChart3, label: 'Dashboard', id: 'dashboard' },
      { icon: FlaskConical, label: 'Quality Tests', id: 'tests' },
      { icon: Package, label: 'Batch Management', id: 'batches' },
      { icon: FileText, label: 'Reports', id: 'reports' }
    ],
    supplier: [
      { icon: BarChart3, label: 'Dashboard', id: 'dashboard' },
      { icon: Package, label: 'My Batches', id: 'batches' },
      { icon: FileText, label: 'Certificates', id: 'certificates' }
    ],
    public: [
      { icon: Shield, label: 'Verify Medicine', id: 'verify' },
      { icon: FileText, label: 'Reports', id: 'reports' }
    ]
  };

  const currentMenuItems = roleMenuItems[userRole as keyof typeof roleMenuItems] || [];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <FlaskConical className="h-8 w-8 text-blue-600" />
            <span className="text-lg font-semibold text-gray-900">MedQuality</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <nav className="mt-5 px-2">
          <div className="space-y-1">
            {currentMenuItems.map((item) => (
              <a
                key={item.id}
                href="#"
                className="group flex items-center px-2 py-2 text-base font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                <item.icon className="mr-4 h-5 w-5" />
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3 mb-3">
            <div className="flex-shrink-0">
              <User className="h-8 w-8 text-gray-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 capitalize">{userRole.replace('_', ' ')}</p>
              <p className="text-xs text-gray-500">Active Session</p>
            </div>
          </div>
          
          <select
            value={userRole}
            onChange={(e) => onRoleChange(e.target.value)}
            className="w-full mb-2 px-3 py-1 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="admin">Admin</option>
            <option value="quality_officer">Quality Officer</option>
            <option value="supplier">Supplier</option>
            <option value="public">Public Portal</option>
          </select>
          
          <button className="flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-700 w-full">
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top header */}
        <header className="flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500"
          >
            <Menu className="h-5 w-5" />
          </button>
          
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-400 hover:text-gray-500">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 transform translate-x-1 -translate-y-1"></span>
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
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