import React from 'react';
import { 
  TrendingUp, 
  Flame, 
  Target, 
  Clock, 
  Dumbbell, 
  Trophy,
  Zap,
  Heart,
  Activity,
  Calendar,
  Users,
  Award
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Current Streak', value: '89', unit: 'days', icon: Flame, color: 'from-orange-500 to-red-500', trend: '+12%' },
    { label: 'Weekly Volume', value: '47.2', unit: 'tons', icon: Dumbbell, color: 'from-blue-500 to-purple-500', trend: '+8%' },
    { label: 'PR This Month', value: '23', unit: 'records', icon: Trophy, color: 'from-yellow-500 to-orange-500', trend: '+15%' },
    { label: 'Recovery Score', value: '94', unit: '%', icon: Heart, color: 'from-green-500 to-blue-500', trend: '+3%' }
  ];

  const recentWorkouts = [
    { name: 'Beast Mode Push', duration: '1h 23m', calories: 847, intensity: 'Extreme', completed: '2 hours ago' },
    { name: 'Deadlift Domination', duration: '1h 45m', calories: 923, intensity: 'High', completed: 'Yesterday' },
    { name: 'Cardio Crusher', duration: '45m', calories: 612, intensity: 'Moderate', completed: '2 days ago' }
  ];

  const challenges = [
    { name: 'Global Squat Challenge', progress: 78, total: 10000, reward: '500 XP', timeLeft: '3 days' },
    { name: 'Iron Will Deadlift', progress: 92, total: 5000, reward: 'Elite Badge', timeLeft: '1 day' },
    { name: 'Cardio Warrior', progress: 45, total: 50, reward: '1000 XP', timeLeft: '5 days' }
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Welcome back, Beast! 💪</h1>
          <p className="text-gray-400 mt-1">Ready to crush today's limits?</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="text-2xl font-bold text-orange-500">Level 47</div>
            <div className="text-sm text-gray-400">Elite Athlete</div>
          </div>
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
            <Zap className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-green-400 text-sm font-medium">{stat.trend}</div>
            </div>
            <div className="space-y-1">
              <p className="text-gray-400 text-sm">{stat.label}</p>
              <div className="flex items-baseline space-x-1">
                <span className="text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-gray-500 text-sm">{stat.unit}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Performance Chart */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Performance Trends</h3>
            <TrendingUp className="h-6 w-6 text-green-500" />
          </div>
          <div className="h-64 bg-gray-900 rounded-lg flex items-center justify-center border border-gray-700">
            <div className="text-center">
              <Activity className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <p className="text-gray-400 mb-2">AI Performance Analytics</p>
              <div className="flex items-center justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">Strength</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">Endurance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300">Recovery</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Workouts */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-6">Recent Workouts</h3>
          <div className="space-y-4">
            {recentWorkouts.map((workout, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white">{workout.name}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    workout.intensity === 'Extreme' ? 'bg-red-900 text-red-300' :
                    workout.intensity === 'High' ? 'bg-orange-900 text-orange-300' :
                    'bg-blue-900 text-blue-300'
                  }`}>
                    {workout.intensity}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{workout.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Flame className="h-4 w-4" />
                      <span>{workout.calories} cal</span>
                    </div>
                  </div>
                  <span>{workout.completed}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Active Challenges */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">Active Challenges</h3>
          <Trophy className="h-6 w-6 text-yellow-500" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-4 border border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-white text-sm">{challenge.name}</h4>
                <Award className="h-5 w-5 text-yellow-500" />
              </div>
              <div className="mb-3">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>{challenge.progress.toLocaleString()}</span>
                  <span>{challenge.total.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-yellow-400 font-medium">{challenge.reward}</span>
                <span className="text-gray-400">{challenge.timeLeft} left</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
          <Dumbbell className="h-6 w-6 mx-auto mb-2" />
          <span className="text-sm font-medium">Start Workout</span>
        </button>
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
          <Target className="h-6 w-6 mx-auto mb-2" />
          <span className="text-sm font-medium">Form Check</span>
        </button>
        <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-4 rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
          <Users className="h-6 w-6 mx-auto mb-2" />
          <span className="text-sm font-medium">Join Battle</span>
        </button>
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
          <Calendar className="h-6 w-6 mx-auto mb-2" />
          <span className="text-sm font-medium">Recovery</span>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;