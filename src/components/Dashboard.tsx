import React from 'react';
import { 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Package, 
  Users,
  FlaskConical,
  Shield
} from 'lucide-react';

interface DashboardProps {
  userRole: string;
}

const Dashboard: React.FC<DashboardProps> = ({ userRole }) => {
  const getStatsForRole = (role: string) => {
    switch (role) {
      case 'admin':
        return [
          { label: 'Total Suppliers', value: '142', icon: Users, color: 'bg-blue-500' },
          { label: 'Active Tests', value: '89', icon: FlaskConical, color: 'bg-green-500' },
          { label: 'Pending Approvals', value: '23', icon: Clock, color: 'bg-yellow-500' },
          { label: 'Critical Alerts', value: '7', icon: AlertTriangle, color: 'bg-red-500' }
        ];
      case 'quality_officer':
        return [
          { label: 'Tests Today', value: '34', icon: FlaskConical, color: 'bg-blue-500' },
          { label: 'Passed Batches', value: '28', icon: CheckCircle, color: 'bg-green-500' },
          { label: 'Failed Batches', value: '3', icon: AlertTriangle, color: 'bg-red-500' },
          { label: 'Pending Review', value: '12', icon: Clock, color: 'bg-yellow-500' }
        ];
      case 'supplier':
        return [
          { label: 'My Batches', value: '56', icon: Package, color: 'bg-blue-500' },
          { label: 'Approved', value: '51', icon: CheckCircle, color: 'bg-green-500' },
          { label: 'Under Review', value: '4', icon: Clock, color: 'bg-yellow-500' },
          { label: 'Rejected', value: '1', icon: AlertTriangle, color: 'bg-red-500' }
        ];
      case 'public':
        return [
          { label: 'Verifications Today', value: '1,234', icon: Shield, color: 'bg-blue-500' },
          { label: 'Authentic Medicines', value: '1,198', icon: CheckCircle, color: 'bg-green-500' },
          { label: 'Suspicious Items', value: '36', icon: AlertTriangle, color: 'bg-red-500' },
          { label: 'Total Database', value: '45,678', icon: Package, color: 'bg-gray-500' }
        ];
      default:
        return [];
    }
  };

  const stats = getStatsForRole(userRole);

  const recentActivity = {
    admin: [
      { action: 'New supplier "PharmaCorp" registered', time: '2 hours ago', type: 'info' },
      { action: 'Quality alert: Batch #B2024-0156 failed inspection', time: '4 hours ago', type: 'error' },
      { action: 'Monthly compliance report generated', time: '6 hours ago', type: 'success' }
    ],
    quality_officer: [
      { action: 'Batch #B2024-0178 passed all quality tests', time: '1 hour ago', type: 'success' },
      { action: 'Chemical analysis completed for Batch #B2024-0179', time: '3 hours ago', type: 'info' },
      { action: 'Visual inspection flagged defects in Batch #B2024-0180', time: '5 hours ago', type: 'warning' }
    ],
    supplier: [
      { action: 'Batch #B2024-0181 approved by quality team', time: '30 mins ago', type: 'success' },
      { action: 'Certificate uploaded for Batch #B2024-0182', time: '2 hours ago', type: 'info' },
      { action: 'Batch #B2024-0183 submitted for review', time: '4 hours ago', type: 'info' }
    ],
    public: [
      { action: 'Medicine verified: Authentic Aspirin batch', time: '5 mins ago', type: 'success' },
      { action: 'Counterfeit alert: Suspicious antibiotics reported', time: '1 hour ago', type: 'error' },
      { action: 'QR code verification successful', time: '2 hours ago', type: 'success' }
    ]
  };

  const currentActivity = recentActivity[userRole as keyof typeof recentActivity] || [];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 capitalize">
          {userRole.replace('_', ' ')} Dashboard
        </h1>
        <p className="text-gray-600 mt-1">
          Monitor and manage medicine quality testing and compliance
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quality Trends Chart */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Quality Trends</h3>
            <TrendingUp className="h-5 w-5 text-green-500" />
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="inline-flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Passed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Failed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Pending</span>
                </div>
              </div>
              <p className="text-gray-500">Chart visualization would be implemented here</p>
              <p className="text-sm text-gray-400 mt-2">Integration with Chart.js or similar library</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {currentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className={`mt-1 w-2 h-2 rounded-full ${
                  activity.type === 'success' ? 'bg-green-500' :
                  activity.type === 'error' ? 'bg-red-500' :
                  activity.type === 'warning' ? 'bg-yellow-500' :
                  'bg-blue-500'
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {userRole === 'quality_officer' && (
            <>
              <button className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <FlaskConical className="h-6 w-6 mx-auto mb-2" />
                <span className="text-sm font-medium">Start New Test</span>
              </button>
              <button className="p-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <CheckCircle className="h-6 w-6 mx-auto mb-2" />
                <span className="text-sm font-medium">Approve Batch</span>
              </button>
            </>
          )}
          {userRole === 'supplier' && (
            <>
              <button className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Package className="h-6 w-6 mx-auto mb-2" />
                <span className="text-sm font-medium">Submit New Batch</span>
              </button>
            </>
          )}
          {userRole === 'public' && (
            <>
              <button className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Shield className="h-6 w-6 mx-auto mb-2" />
                <span className="text-sm font-medium">Verify Medicine</span>
              </button>
            </>
          )}
          {userRole === 'admin' && (
            <>
              <button className="p-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                <Users className="h-6 w-6 mx-auto mb-2" />
                <span className="text-sm font-medium">Manage Users</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;