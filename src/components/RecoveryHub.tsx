import React, { useState } from 'react';
import { 
  Heart, 
  Moon, 
  Droplets, 
  Thermometer, 
  Brain,
  Activity,
  Clock,
  TrendingUp,
  Zap,
  Shield,
  Target,
  Award
} from 'lucide-react';

const RecoveryHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'sleep' | 'nutrition' | 'supplements'>('overview');

  const recoveryMetrics = {
    overall: 94,
    sleep: 89,
    hrv: 92,
    hydration: 87,
    stress: 78,
    readiness: 96
  };

  const sleepData = {
    lastNight: {
      duration: '8h 23m',
      quality: 89,
      deepSleep: '2h 15m',
      remSleep: '1h 47m',
      restingHR: 52,
      hrv: 45
    },
    weeklyAverage: {
      duration: '7h 54m',
      quality: 85,
      bedtime: '10:47 PM',
      wakeTime: '6:41 AM'
    }
  };

  const nutritionPlan = {
    calories: { current: 2847, target: 3200, remaining: 353 },
    protein: { current: 187, target: 200, remaining: 13 },
    carbs: { current: 298, target: 350, remaining: 52 },
    fats: { current: 89, target: 100, remaining: 11 },
    water: { current: 2.8, target: 4.0, remaining: 1.2 }
  };

  const supplements = [
    { name: 'Whey Protein', timing: 'Post-workout', taken: true, nextDose: '2h' },
    { name: 'Creatine', timing: 'Daily', taken: true, nextDose: 'Tomorrow' },
    { name: 'Magnesium', timing: 'Before bed', taken: false, nextDose: '6h' },
    { name: 'Vitamin D3', timing: 'Morning', taken: true, nextDose: 'Tomorrow' },
    { name: 'Omega-3', timing: 'With meals', taken: false, nextDose: '1h' }
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center space-x-3">
            <Heart className="h-8 w-8 text-green-500" />
            <span>Recovery Hub</span>
          </h1>
          <p className="text-gray-400 mt-1">Optimize your recovery for maximum performance</p>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg">
          <div className="text-sm font-medium">Recovery Score</div>
          <div className="text-2xl font-bold">{recoveryMetrics.overall}%</div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-800 rounded-lg p-1">
        {[
          { id: 'overview', label: 'Overview', icon: Activity },
          { id: 'sleep', label: 'Sleep', icon: Moon },
          { id: 'nutrition', label: 'Nutrition', icon: Target },
          { id: 'supplements', label: 'Supplements', icon: Zap }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-300 flex-1 justify-center ${
              activeTab === tab.id
                ? 'bg-green-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            <tab.icon className="h-5 w-5" />
            <span className="font-medium">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Recovery Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: 'Sleep Quality', value: recoveryMetrics.sleep, icon: Moon, color: 'from-purple-500 to-blue-500' },
              { label: 'HRV Score', value: recoveryMetrics.hrv, icon: Heart, color: 'from-red-500 to-pink-500' },
              { label: 'Hydration', value: recoveryMetrics.hydration, icon: Droplets, color: 'from-blue-500 to-cyan-500' },
              { label: 'Stress Level', value: recoveryMetrics.stress, icon: Brain, color: 'from-yellow-500 to-orange-500' },
              { label: 'Training Readiness', value: recoveryMetrics.readiness, icon: Shield, color: 'from-green-500 to-emerald-500' },
              { label: 'Overall Recovery', value: recoveryMetrics.overall, icon: TrendingUp, color: 'from-indigo-500 to-purple-500' }
            ].map((metric, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${metric.color}`}>
                    <metric.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className={`text-2xl font-bold ${
                    metric.value >= 90 ? 'text-green-400' :
                    metric.value >= 80 ? 'text-blue-400' :
                    metric.value >= 70 ? 'text-yellow-400' :
                    'text-red-400'
                  }`}>
                    {metric.value}%
                  </div>
                </div>
                <h3 className="text-white font-semibold">{metric.label}</h3>
                <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`bg-gradient-to-r ${metric.color} h-2 rounded-full transition-all duration-300`}
                    style={{ width: `${metric.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* AI Recommendations */}
          <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-xl p-6 border border-purple-500">
            <div className="flex items-center space-x-3 mb-4">
              <Brain className="h-6 w-6 text-purple-400" />
              <h3 className="text-xl font-bold text-white">AI Recovery Recommendations</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black bg-opacity-30 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Moon className="h-5 w-5 text-blue-400" />
                  <span className="text-white font-medium">Sleep Optimization</span>
                </div>
                <p className="text-gray-300 text-sm">Your sleep quality is excellent. Maintain current bedtime routine.</p>
              </div>
              <div className="bg-black bg-opacity-30 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Droplets className="h-5 w-5 text-cyan-400" />
                  <span className="text-white font-medium">Hydration Alert</span>
                </div>
                <p className="text-gray-300 text-sm">Increase water intake by 300ml to optimize recovery.</p>
              </div>
              <div className="bg-black bg-opacity-30 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Heart className="h-5 w-5 text-red-400" />
                  <span className="text-white font-medium">Active Recovery</span>
                </div>
                <p className="text-gray-300 text-sm">Consider light yoga or walking today for optimal recovery.</p>
              </div>
              <div className="bg-black bg-opacity-30 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Thermometer className="h-5 w-5 text-orange-400" />
                  <span className="text-white font-medium">Temperature Therapy</span>
                </div>
                <p className="text-gray-300 text-sm">Cold shower or ice bath recommended within 2 hours.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sleep Tab */}
      {activeTab === 'sleep' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Last Night's Sleep */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                <Moon className="h-6 w-6 text-purple-400" />
                <span>Last Night's Sleep</span>
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Duration</span>
                  <span className="text-white font-semibold text-lg">{sleepData.lastNight.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Quality Score</span>
                  <span className="text-green-400 font-semibold text-lg">{sleepData.lastNight.quality}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Deep Sleep</span>
                  <span className="text-blue-400 font-semibold">{sleepData.lastNight.deepSleep}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">REM Sleep</span>
                  <span className="text-purple-400 font-semibold">{sleepData.lastNight.remSleep}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Resting HR</span>
                  <span className="text-red-400 font-semibold">{sleepData.lastNight.restingHR} bpm</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">HRV</span>
                  <span className="text-green-400 font-semibold">{sleepData.lastNight.hrv} ms</span>
                </div>
              </div>
            </div>

            {/* Weekly Average */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                <TrendingUp className="h-6 w-6 text-blue-400" />
                <span>Weekly Average</span>
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Avg Duration</span>
                  <span className="text-white font-semibold text-lg">{sleepData.weeklyAverage.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Avg Quality</span>
                  <span className="text-green-400 font-semibold text-lg">{sleepData.weeklyAverage.quality}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Bedtime</span>
                  <span className="text-purple-400 font-semibold">{sleepData.weeklyAverage.bedtime}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Wake Time</span>
                  <span className="text-yellow-400 font-semibold">{sleepData.weeklyAverage.wakeTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sleep Chart Placeholder */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">Sleep Trends (7 Days)</h3>
            <div className="h-64 bg-gray-900 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Activity className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <p className="text-gray-400">Sleep pattern visualization</p>
                <p className="text-sm text-gray-500 mt-2">Integration with sleep tracking devices</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Nutrition Tab */}
      {activeTab === 'nutrition' && (
        <div className="space-y-8">
          {/* Macro Tracking */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(nutritionPlan).map(([key, macro]: [string, any]) => (
              <div key={key} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold capitalize">{key === 'water' ? 'Water (L)' : key}</h3>
                  <span className={`text-sm font-medium ${
                    macro.remaining <= 0 ? 'text-green-400' : 'text-yellow-400'
                  }`}>
                    {macro.remaining > 0 ? `${macro.remaining} left` : 'Target reached!'}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Current</span>
                    <span className="text-white font-medium">{macro.current}{key === 'water' ? 'L' : key === 'calories' ? '' : 'g'}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all duration-300 ${
                        key === 'calories' ? 'bg-gradient-to-r from-orange-500 to-red-500' :
                        key === 'protein' ? 'bg-gradient-to-r from-blue-500 to-purple-500' :
                        key === 'carbs' ? 'bg-gradient-to-r from-green-500 to-blue-500' :
                        key === 'fats' ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                        'bg-gradient-to-r from-cyan-500 to-blue-500'
                      }`}
                      style={{ width: `${Math.min((macro.current / macro.target) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>0</span>
                    <span>{macro.target}{key === 'water' ? 'L' : key === 'calories' ? '' : 'g'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Meal Planning */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-6">AI Meal Recommendations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { meal: 'Pre-Workout', food: 'Banana + Oats', calories: 320, timing: '1h before' },
                { meal: 'Post-Workout', food: 'Protein Shake + Berries', calories: 280, timing: '30min after' },
                { meal: 'Dinner', food: 'Salmon + Sweet Potato', calories: 650, timing: '6:00 PM' }
              ].map((meal, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-white">{meal.meal}</h4>
                    <span className="text-orange-400 text-sm font-medium">{meal.calories} cal</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">{meal.food}</p>
                  <p className="text-gray-400 text-xs">{meal.timing}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Supplements Tab */}
      {activeTab === 'supplements' && (
        <div className="space-y-8">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-6">Daily Supplement Schedule</h3>
            <div className="space-y-4">
              {supplements.map((supplement, index) => (
                <div key={index} className={`p-4 rounded-lg border transition-all duration-300 ${
                  supplement.taken 
                    ? 'border-green-500 bg-green-900 bg-opacity-20' 
                    : 'border-gray-600 bg-gray-900'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${
                        supplement.taken ? 'bg-green-500' : 'bg-gray-600'
                      }`}></div>
                      <div>
                        <h4 className="font-semibold text-white">{supplement.name}</h4>
                        <p className="text-gray-400 text-sm">{supplement.timing}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-medium ${
                        supplement.taken ? 'text-green-400' : 'text-yellow-400'
                      }`}>
                        {supplement.taken ? 'Taken' : 'Pending'}
                      </div>
                      <div className="text-gray-400 text-xs">Next: {supplement.nextDose}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Supplement Recommendations */}
          <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-xl p-6 border border-purple-500">
            <div className="flex items-center space-x-3 mb-4">
              <Zap className="h-6 w-6 text-purple-400" />
              <h3 className="text-xl font-bold text-white">AI Supplement Recommendations</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-black bg-opacity-30 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Recovery Enhancement</h4>
                <p className="text-gray-300 text-sm">Consider adding ZMA for better sleep quality and recovery.</p>
              </div>
              <div className="bg-black bg-opacity-30 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Performance Boost</h4>
                <p className="text-gray-300 text-sm">Beta-alanine could improve your high-intensity performance.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecoveryHub;