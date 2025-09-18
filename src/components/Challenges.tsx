import React, { useState } from 'react';
import { 
  Trophy, 
  Users, 
  Target, 
  Clock, 
  Flame, 
  Award,
  Zap,
  Crown,
  Sword,
  Shield,
  Star,
  TrendingUp
} from 'lucide-react';

const Challenges: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'global' | 'friends' | 'personal'>('global');

  const globalChallenges = [
    {
      id: 1,
      name: 'Iron Throne Deadlift',
      description: 'Compete globally in the ultimate deadlift challenge',
      participants: 15847,
      timeLeft: '2 days 14h',
      reward: '5000 XP + Elite Badge',
      difficulty: 'Extreme',
      progress: 78,
      target: 10000,
      unit: 'lbs total',
      rank: 247,
      type: 'strength'
    },
    {
      id: 2,
      name: 'Cardio Crusher Marathon',
      description: '30-day cardiovascular endurance challenge',
      participants: 23156,
      timeLeft: '12 days 8h',
      reward: '3000 XP + Endurance Master',
      difficulty: 'High',
      progress: 45,
      target: 100,
      unit: 'miles',
      rank: 1834,
      type: 'cardio'
    },
    {
      id: 3,
      name: 'Beast Mode Bench',
      description: 'Push your bench press limits to the max',
      participants: 8934,
      timeLeft: '5 days 22h',
      reward: '2500 XP + Power Badge',
      difficulty: 'High',
      progress: 92,
      target: 5000,
      unit: 'lbs total',
      rank: 89,
      type: 'strength'
    }
  ];

  const friendsChallenges = [
    {
      id: 1,
      name: 'Squad Goals Squat',
      participants: ['Alex', 'Sarah', 'Mike', 'You'],
      leader: 'Alex',
      yourRank: 2,
      progress: 85,
      target: 1000,
      unit: 'squats',
      timeLeft: '3 days',
      reward: 'Bragging Rights + 1000 XP'
    },
    {
      id: 2,
      name: 'Gym Buddy Battle',
      participants: ['Sarah', 'You'],
      leader: 'You',
      yourRank: 1,
      progress: 67,
      target: 50,
      unit: 'workouts',
      timeLeft: '1 week',
      reward: 'Winner buys protein shakes'
    }
  ];

  const personalChallenges = [
    {
      id: 1,
      name: 'Personal Best Hunter',
      description: 'Break 5 personal records this month',
      progress: 3,
      target: 5,
      timeLeft: '18 days',
      reward: '2000 XP + PR Master Badge',
      difficulty: 'Medium'
    },
    {
      id: 2,
      name: 'Consistency King',
      description: 'Workout 25 days straight',
      progress: 18,
      target: 25,
      timeLeft: '7 days',
      reward: '3000 XP + Dedication Badge',
      difficulty: 'High'
    }
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center space-x-3">
            <Trophy className="h-8 w-8 text-yellow-500" />
            <span>Gym Wars & Challenges</span>
          </h1>
          <p className="text-gray-400 mt-1">Compete globally, challenge friends, and push your limits</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-lg">
            <div className="text-sm font-medium">Global Rank</div>
            <div className="text-lg font-bold">#247</div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg">
            <div className="text-sm font-medium">Battle Points</div>
            <div className="text-lg font-bold">47,892</div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-800 rounded-lg p-1">
        {[
          { id: 'global', label: 'Global Wars', icon: Crown },
          { id: 'friends', label: 'Friend Battles', icon: Users },
          { id: 'personal', label: 'Personal Goals', icon: Target }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-300 flex-1 justify-center ${
              activeTab === tab.id
                ? 'bg-orange-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            <tab.icon className="h-5 w-5" />
            <span className="font-medium">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Global Challenges */}
      {activeTab === 'global' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {globalChallenges.map((challenge) => (
              <div key={challenge.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    challenge.difficulty === 'Extreme' ? 'bg-red-900 text-red-300' :
                    challenge.difficulty === 'High' ? 'bg-orange-900 text-orange-300' :
                    'bg-blue-900 text-blue-300'
                  }`}>
                    {challenge.difficulty}
                  </div>
                  <div className="flex items-center space-x-1">
                    {challenge.type === 'strength' ? (
                      <Sword className="h-4 w-4 text-red-400" />
                    ) : (
                      <Zap className="h-4 w-4 text-blue-400" />
                    )}
                    <span className="text-gray-400 text-sm">{challenge.participants.toLocaleString()} warriors</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{challenge.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{challenge.description}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-white font-medium">
                      {challenge.progress.toLocaleString()} / {challenge.target.toLocaleString()} {challenge.unit}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(challenge.progress / challenge.target) * 100}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-1">
                      <Crown className="h-4 w-4 text-yellow-500" />
                      <span className="text-gray-400">Rank #{challenge.rank}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-blue-400" />
                      <span className="text-gray-400">{challenge.timeLeft}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-900 to-orange-900 rounded-lg p-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-yellow-400" />
                    <span className="text-yellow-300 text-sm font-medium">{challenge.reward}</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-medium">
                  Join Battle
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Friends Challenges */}
      {activeTab === 'friends' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-white">Active Friend Battles</h2>
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
              Challenge Friends
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {friendsChallenges.map((challenge) => (
              <div key={challenge.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{challenge.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Users className="h-5 w-5 text-blue-400" />
                    <span className="text-gray-400 text-sm">{challenge.participants.length} fighters</span>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Your Progress</span>
                    <span className="text-white font-medium">
                      {Math.floor((challenge.progress / 100) * challenge.target)} / {challenge.target} {challenge.unit}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${challenge.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <h4 className="text-white font-medium mb-2">Leaderboard</h4>
                  <div className="space-y-2">
                    {challenge.participants.map((participant, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className={`text-sm font-bold ${
                            index === 0 ? 'text-yellow-400' :
                            index === 1 ? 'text-gray-300' :
                            index === 2 ? 'text-orange-400' :
                            'text-gray-400'
                          }`}>
                            #{index + 1}
                          </span>
                          <span className={`text-sm ${participant === 'You' ? 'text-blue-400 font-medium' : 'text-gray-300'}`}>
                            {participant}
                          </span>
                        </div>
                        {index === 0 && <Crown className="h-4 w-4 text-yellow-400" />}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                  <span>Time left: {challenge.timeLeft}</span>
                  <span className="text-yellow-400 font-medium">{challenge.reward}</span>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-medium">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Personal Challenges */}
      {activeTab === 'personal' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-white">Personal Goals</h2>
            <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300">
              Create Goal
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {personalChallenges.map((challenge) => (
              <div key={challenge.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{challenge.name}</h3>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    challenge.difficulty === 'High' ? 'bg-orange-900 text-orange-300' :
                    challenge.difficulty === 'Medium' ? 'bg-blue-900 text-blue-300' :
                    'bg-green-900 text-green-300'
                  }`}>
                    {challenge.difficulty}
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4">{challenge.description}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-white font-medium">
                      {challenge.progress} / {challenge.target}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${(challenge.progress / challenge.target) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4 text-blue-400" />
                    <span className="text-gray-400">{challenge.timeLeft} remaining</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-yellow-400 font-medium">{challenge.reward}</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-3 rounded-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 font-medium">
                  Track Progress
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Challenges;