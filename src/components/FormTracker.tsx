import React, { useState } from 'react';
import { 
  Camera, 
  Target, 
  CheckCircle, 
  AlertTriangle, 
  XCircle,
  Eye,
  Brain,
  Activity,
  TrendingUp,
  Award,
  Zap
} from 'lucide-react';

const FormTracker: React.FC = () => {
  const [isTracking, setIsTracking] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState('squat');
  const [formAnalysis, setFormAnalysis] = useState<any>(null);

  const exercises = [
    { id: 'squat', name: 'Back Squat', icon: '🏋️‍♂️' },
    { id: 'deadlift', name: 'Deadlift', icon: '💪' },
    { id: 'bench', name: 'Bench Press', icon: '🔥' },
    { id: 'overhead', name: 'Overhead Press', icon: '⚡' }
  ];

  const mockAnalysis = {
    squat: {
      overallScore: 87,
      reps: 8,
      issues: [
        { type: 'warning', message: 'Knee valgus detected on rep 3 and 6', severity: 'medium' },
        { type: 'success', message: 'Excellent depth consistency', severity: 'good' },
        { type: 'info', message: 'Consider wider stance for better stability', severity: 'low' }
      ],
      metrics: {
        depth: { score: 95, status: 'excellent' },
        kneeTracking: { score: 78, status: 'needs-work' },
        barPath: { score: 92, status: 'good' },
        tempo: { score: 85, status: 'good' }
      },
      recommendations: [
        'Focus on pushing knees out during ascent',
        'Maintain consistent bar speed throughout range of motion',
        'Consider mobility work for hip flexors'
      ]
    }
  };

  const startTracking = () => {
    setIsTracking(true);
    // Simulate analysis after 3 seconds
    setTimeout(() => {
      setFormAnalysis(mockAnalysis[selectedExercise as keyof typeof mockAnalysis]);
      setIsTracking(false);
    }, 3000);
  };

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center space-x-3">
            <Target className="h-8 w-8 text-blue-500" />
            <span>AI Form Tracker</span>
          </h1>
          <p className="text-gray-400 mt-1">Real-time movement analysis and form correction</p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg">
          <div className="text-sm font-medium">Computer Vision</div>
          <div className="text-xs opacity-90">99.2% Accuracy</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Exercise Selection */}
        <div className="lg:col-span-1">
          <h3 className="text-xl font-bold text-white mb-4">Select Exercise</h3>
          <div className="space-y-3">
            {exercises.map((exercise) => (
              <button
                key={exercise.id}
                onClick={() => setSelectedExercise(exercise.id)}
                className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-300 ${
                  selectedExercise === exercise.id
                    ? 'border-blue-500 bg-blue-900 bg-opacity-30'
                    : 'border-gray-700 bg-gray-800 hover:border-gray-600'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{exercise.icon}</span>
                  <div>
                    <h4 className="font-medium text-white">{exercise.name}</h4>
                    <p className="text-sm text-gray-400">AI-powered analysis</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="mt-6 bg-gray-800 rounded-lg p-4 border border-gray-700">
            <h4 className="font-semibold text-white mb-3">Session Stats</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Sessions Today</span>
                <span className="text-white font-medium">3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Average Score</span>
                <span className="text-green-400 font-medium">89%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Improvement</span>
                <span className="text-blue-400 font-medium">+12%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Camera Feed & Analysis */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            {!isTracking && !formAnalysis ? (
              /* Camera Setup */
              <div className="text-center">
                <div className="bg-gray-900 rounded-lg p-12 mb-6 border-2 border-dashed border-gray-600">
                  <Camera className="h-16 w-16 text-gray-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Position Camera</h3>
                  <p className="text-gray-400 mb-6">
                    Set up your camera to capture your full body during the exercise
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm">
                    <div className="bg-gray-800 rounded-lg p-3">
                      <Eye className="h-5 w-5 text-blue-400 mx-auto mb-2" />
                      <div className="text-white font-medium">Side View</div>
                      <div className="text-gray-400">Best for depth analysis</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3">
                      <Target className="h-5 w-5 text-green-400 mx-auto mb-2" />
                      <div className="text-white font-medium">Full Body</div>
                      <div className="text-gray-400">Capture complete movement</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3">
                      <Zap className="h-5 w-5 text-yellow-400 mx-auto mb-2" />
                      <div className="text-white font-medium">Good Lighting</div>
                      <div className="text-gray-400">Clear visibility required</div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={startTracking}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-medium"
                >
                  Start Form Analysis
                </button>
              </div>
            ) : isTracking ? (
              /* Active Tracking */
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-12 mb-6">
                  <div className="relative">
                    <Brain className="h-16 w-16 text-blue-400 mx-auto mb-4 animate-pulse" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Analyzing Movement...</h3>
                  <p className="text-blue-300 mb-4">AI is tracking your form in real-time</p>
                  <div className="flex items-center justify-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-400">Pose Detection</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-blue-400">Movement Analysis</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                      <span className="text-purple-400">Form Scoring</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Analysis Results */
              <div className="space-y-6">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <Award className="h-8 w-8 text-yellow-500" />
                    <h3 className="text-2xl font-bold text-white">Form Analysis Complete</h3>
                  </div>
                  <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text mb-2">
                    {formAnalysis?.overallScore}%
                  </div>
                  <p className="text-gray-400">Overall Form Score • {formAnalysis?.reps} reps analyzed</p>
                </div>

                {/* Detailed Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(formAnalysis?.metrics || {}).map(([key, metric]: [string, any]) => (
                    <div key={key} className="bg-gray-900 rounded-lg p-4 text-center">
                      <div className={`text-2xl font-bold mb-1 ${
                        metric.status === 'excellent' ? 'text-green-400' :
                        metric.status === 'good' ? 'text-blue-400' :
                        metric.status === 'needs-work' ? 'text-yellow-400' :
                        'text-red-400'
                      }`}>
                        {metric.score}%
                      </div>
                      <div className="text-gray-400 text-sm capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Issues & Feedback */}
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-white">Form Feedback</h4>
                  {formAnalysis?.issues.map((issue: any, index: number) => (
                    <div key={index} className={`p-4 rounded-lg border-l-4 ${
                      issue.type === 'success' ? 'bg-green-900 bg-opacity-30 border-green-500' :
                      issue.type === 'warning' ? 'bg-yellow-900 bg-opacity-30 border-yellow-500' :
                      issue.type === 'error' ? 'bg-red-900 bg-opacity-30 border-red-500' :
                      'bg-blue-900 bg-opacity-30 border-blue-500'
                    }`}>
                      <div className="flex items-center space-x-2">
                        {issue.type === 'success' && <CheckCircle className="h-5 w-5 text-green-400" />}
                        {issue.type === 'warning' && <AlertTriangle className="h-5 w-5 text-yellow-400" />}
                        {issue.type === 'error' && <XCircle className="h-5 w-5 text-red-400" />}
                        {issue.type === 'info' && <Activity className="h-5 w-5 text-blue-400" />}
                        <span className="text-white font-medium">{issue.message}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recommendations */}
                <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg p-4">
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center space-x-2">
                    <Brain className="h-5 w-5 text-purple-400" />
                    <span>AI Recommendations</span>
                  </h4>
                  <ul className="space-y-2">
                    {formAnalysis?.recommendations.map((rec: string, index: number) => (
                      <li key={index} className="text-gray-300 text-sm flex items-start space-x-2">
                        <TrendingUp className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => setFormAnalysis(null)}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-medium"
                  >
                    Analyze Another Set
                  </button>
                  <button className="flex-1 bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-600 transition-all duration-300 font-medium">
                    Save Analysis
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormTracker;