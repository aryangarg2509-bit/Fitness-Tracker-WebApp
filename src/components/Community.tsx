import React, { useState } from 'react';
import { 
  Users, 
  MessageCircle, 
  Heart, 
  Share2, 
  Trophy, 
  Flame,
  Camera,
  Plus,
  TrendingUp,
  Award,
  Target,
  Clock
} from 'lucide-react';

const Community: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'feed' | 'leaderboard' | 'groups'>('feed');

  const feedPosts = [
    {
      id: 1,
      user: 'BeastMode_Alex',
      avatar: '💪',
      time: '2h ago',
      content: 'Just crushed a new deadlift PR! 495lbs x 3 reps 🔥 The grind never stops!',
      image: null,
      likes: 47,
      comments: 12,
      shares: 5,
      achievement: 'New PR Badge',
      workout: 'Deadlift Domination'
    },
    {
      id: 2,
      user: 'IronQueen_Sarah',
      avatar: '👑',
      time: '4h ago',
      content: 'Week 8 of my transformation journey. The consistency is paying off! 💯',
      image: '🏋️‍♀️',
      likes: 89,
      comments: 23,
      shares: 15,
      achievement: null,
      workout: 'Full Body Blast'
    },
    {
      id: 3,
      user: 'CardioKing_Mike',
      avatar: '⚡',
      time: '6h ago',
      content: 'Completed the Global Cardio Challenge! 100 miles in 30 days ✅',
      image: null,
      likes: 156,
      comments: 34,
      shares: 28,
      achievement: 'Endurance Master',
      workout: 'Cardio Crusher'
    }
  ];

  const leaderboard = [
    { rank: 1, user: 'BeastMode_Alex', points: 89547, streak: 127, badge: '👑' },
    { rank: 2, user: 'IronQueen_Sarah', points: 87234, streak: 98, badge: '🥈' },
    { rank: 3, user: 'CardioKing_Mike', points: 84567, streak: 156, badge: '🥉' },
    { rank: 4, user: 'PowerLifter_Pro', points: 82134, streak: 89, badge: '💪' },
    { rank: 5, user: 'You', points: 47892, streak: 89, badge: '🔥' },
    { rank: 6, user: 'GymWarrior_99', points: 45678, streak: 67, badge: '⚡' }
  ];

  const groups = [
    {
      id: 1,
      name: 'Powerlifting Elite',
      members: 2847,
      description: 'For serious powerlifters pushing maximum weight',
      activity: 'Very Active',
      joined: true
    },
    {
      id: 2,
      name: 'Transformation Squad',
      members: 5632,
      description: 'Support group for body transformation journeys',
      activity: 'Active',
      joined: true
    },
    {
      id: 3,
      name: 'Cardio Warriors',
      members: 3421,
      description: 'Endurance athletes and cardio enthusiasts',
      activity: 'Active',
      joined: false
    },
    {
      id: 4,
      name: 'Form Check Masters',
      members: 1876,
      description: 'Get your form analyzed by experienced lifters',
      activity: 'Moderate',
      joined: false
    }
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center space-x-3">
            <Users className="h-8 w-8 text-blue-500" />
            <span>Fitness Community</span>
          </h1>
          <p className="text-gray-400 mt-1">Connect, compete, and motivate each other</p>
        </div>
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2">
          <Plus className="h-5 w-5" />
          <span>Share Workout</span>
        </button>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-800 rounded-lg p-1">
        {[
          { id: 'feed', label: 'Community Feed', icon: MessageCircle },
          { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
          { id: 'groups', label: 'Groups', icon: Users }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-300 flex-1 justify-center ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            <tab.icon className="h-5 w-5" />
            <span className="font-medium">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Community Feed */}
      {activeTab === 'feed' && (
        <div className="space-y-6">
          {/* Create Post */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🔥</span>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Share your workout victory..."
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center space-x-2">
                <Camera className="h-5 w-5" />
                <span>Post</span>
              </button>
            </div>
          </div>

          {/* Feed Posts */}
          <div className="space-y-6">
            {feedPosts.map((post) => (
              <div key={post.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white">{post.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-white">{post.user}</h4>
                      {post.achievement && (
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          {post.achievement}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <span>{post.time}</span>
                      {post.workout && (
                        <>
                          <span>•</span>
                          <span className="text-blue-400">{post.workout}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{post.content}</p>

                {post.image && (
                  <div className="bg-gray-900 rounded-lg p-8 mb-4 text-center">
                    <span className="text-6xl">{post.image}</span>
                    <p className="text-gray-400 text-sm mt-2">Workout Photo</p>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition-colors">
                      <Heart className="h-5 w-5" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors">
                      <MessageCircle className="h-5 w-5" />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors">
                      <Share2 className="h-5 w-5" />
                      <span>{post.shares}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Leaderboard */}
      {activeTab === 'leaderboard' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-6 text-center">
              <Trophy className="h-8 w-8 text-white mx-auto mb-2" />
              <div className="text-white text-2xl font-bold">47,892</div>
              <div className="text-yellow-100 text-sm">Your Points</div>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-center">
              <Flame className="h-8 w-8 text-white mx-auto mb-2" />
              <div className="text-white text-2xl font-bold">89</div>
              <div className="text-orange-100 text-sm">Day Streak</div>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-6 text-center">
              <TrendingUp className="h-8 w-8 text-white mx-auto mb-2" />
              <div className="text-white text-2xl font-bold">#5</div>
              <div className="text-blue-100 text-sm">Global Rank</div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl border border-gray-700">
            <div className="p-6 border-b border-gray-700">
              <h3 className="text-xl font-bold text-white">Global Leaderboard</h3>
              <p className="text-gray-400 text-sm">Top performers this month</p>
            </div>
            <div className="divide-y divide-gray-700">
              {leaderboard.map((user) => (
                <div key={user.rank} className={`p-6 flex items-center justify-between ${
                  user.user === 'You' ? 'bg-blue-900 bg-opacity-30' : ''
                }`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      user.rank === 1 ? 'bg-yellow-500 text-white' :
                      user.rank === 2 ? 'bg-gray-400 text-white' :
                      user.rank === 3 ? 'bg-orange-500 text-white' :
                      'bg-gray-700 text-gray-300'
                    }`}>
                      {user.rank}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{user.badge}</span>
                      <div>
                        <h4 className={`font-semibold ${user.user === 'You' ? 'text-blue-400' : 'text-white'}`}>
                          {user.user}
                        </h4>
                        <div className="flex items-center space-x-3 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Flame className="h-4 w-4" />
                            <span>{user.streak} days</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-white">{user.points.toLocaleString()}</div>
                    <div className="text-sm text-gray-400">points</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Groups */}
      {activeTab === 'groups' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {groups.map((group) => (
              <div key={group.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{group.name}</h3>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    group.activity === 'Very Active' ? 'bg-green-900 text-green-300' :
                    group.activity === 'Active' ? 'bg-blue-900 text-blue-300' :
                    'bg-yellow-900 text-yellow-300'
                  }`}>
                    {group.activity}
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4">{group.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{group.members.toLocaleString()} members</span>
                    </div>
                  </div>
                </div>

                <button className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                  group.joined
                    ? 'bg-gray-700 text-white hover:bg-gray-600'
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                }`}>
                  {group.joined ? 'View Group' : 'Join Group'}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;