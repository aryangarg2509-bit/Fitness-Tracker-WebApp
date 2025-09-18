import React, { useState } from 'react';
import { 
  Brain, 
  Dumbbell, 
  Target, 
  Clock, 
  Flame, 
  TrendingUp,
  Play,
  Pause,
  RotateCcw,
  Zap,
  Award,
  Activity
} from 'lucide-react';

const AIWorkouts: React.FC = () => {
  const [selectedWorkout, setSelectedWorkout] = useState<string | null>(null);
  const [isWorkoutActive, setIsWorkoutActive] = useState(false);
  const [currentExercise, setCurrentExercise] = useState(0);

  const workoutPlans = [
    {
      id: 'beast-push',
      name: 'Beast Mode Push',
      difficulty: 'Extreme',
      duration: '75-90 min',
      calories: '800-950',
      focus: 'Chest, Shoulders, Triceps',
      aiScore: 98,
      description: 'AI-optimized push workout designed to break your previous limits',
      exercises: [
        { name: 'Barbell Bench Press', sets: 5, reps: '3-5', weight: 'Heavy', rest: '3-4 min' },
        { name: 'Incline Dumbbell Press', sets: 4, reps: '6-8', weight: 'Heavy', rest: '2-3 min' },
        { name: 'Weighted Dips', sets: 4, reps: '8-12', weight: 'Moderate', rest: '2 min' },
        { name: 'Overhead Press', sets: 4, reps: '5-7', weight: 'Heavy', rest: '3 min' },
        { name: 'Close-Grip Bench', sets: 3, reps: '8-10', weight: 'Moderate', rest: '2 min' }
      ]
    },
    {
      id: 'deadlift-domination',
      name: 'Deadlift Domination',
      difficulty: 'Extreme',
      duration: '90-105 min',
      calories: '900-1100',
      focus: 'Back, Glutes, Hamstrings',
      aiScore: 96,
      description: 'Maximum strength protocol for deadlift mastery',
      exercises: [
        { name: 'Conventional Deadlift', sets: 6, reps: '1-3', weight: 'Max', rest: '4-5 min' },
        { name: 'Romanian Deadlift', sets: 4, reps: '6-8', weight: 'Heavy', rest: '3 min' },
        { name: 'Bent-Over Rows', sets: 4, reps: '5-7', weight: 'Heavy', rest: '2-3 min' },
        { name: 'Hip Thrusts', sets: 4, reps: '8-12', weight: 'Heavy', rest: '2 min' },
        { name: 'Good Mornings', sets: 3, reps: '10-12', weight: 'Light', rest: '90 sec' }
      ]
    },
    {
      id: 'leg-annihilation',
      name: 'Leg Annihilation',
      difficulty: 'High',
      duration: '80-95 min',
      calories: '850-1000',
      focus: 'Quads, Glutes, Calves',
      aiScore: 94,
      description: 'Brutal leg session that will test your mental fortitude',
      exercises: [
        { name: 'Back Squats', sets: 5, reps: '3-5', weight: 'Heavy', rest: '3-4 min' },
        { name: 'Bulgarian Split Squats', sets: 4, reps: '8-12', weight: 'Moderate', rest: '2 min' },
        { name: 'Walking Lunges', sets: 3, reps: '20 steps', weight: 'Light', rest: '90 sec' },
        { name: 'Leg Press', sets: 4, reps: '12-15', weight: 'Heavy', rest: '2 min' },
        { name: 'Calf Raises', sets: 5, reps: '15-20', weight: 'Heavy', rest: '60 sec' }
      ]
    }
  ];

  const currentWorkout = workoutPlans.find(w => w.id === selectedWorkout);

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center space-x-3">
            <Brain className="h-8 w-8 text-purple-500" />
            <span>AI-Powered Workouts</span>
          </h1>
          <p className="text-gray-400 mt-1">Adaptive training programs that evolve with your performance</p>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg">
          <div className="text-sm font-medium">AI Optimization</div>
          <div className="text-xs opacity-90">Based on 847 sessions</div>
        </div>
      </div>

      {!selectedWorkout ? (
        <>
          {/* AI Recommendations */}
          <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-xl p-6 border border-purple-500">
            <div className="flex items-center space-x-3 mb-4">
              <Brain className="h-6 w-6 text-purple-400" />
              <h3 className="text-xl font-bold text-white">AI Recommendations</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-black bg-opacity-30 rounded-lg p-4">
                <div className="text-purple-400 text-sm font-medium mb-1">Recovery Status</div>
                <div className="text-white text-lg font-bold">94% Ready</div>
                <div className="text-gray-300 text-xs">Perfect for high intensity</div>
              </div>
              <div className="bg-black bg-opacity-30 rounded-lg p-4">
                <div className="text-blue-400 text-sm font-medium mb-1">Optimal Focus</div>
                <div className="text-white text-lg font-bold">Push Day</div>
                <div className="text-gray-300 text-xs">Based on training cycle</div>
              </div>
              <div className="bg-black bg-opacity-30 rounded-lg p-4">
                <div className="text-green-400 text-sm font-medium mb-1">Predicted Gains</div>
                <div className="text-white text-lg font-bold">+2.3% Strength</div>
                <div className="text-gray-300 text-xs">This session potential</div>
              </div>
            </div>
          </div>

          {/* Workout Plans */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {workoutPlans.map((workout) => (
              <div key={workout.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-all duration-300 cursor-pointer transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    workout.difficulty === 'Extreme' ? 'bg-red-900 text-red-300' :
                    workout.difficulty === 'High' ? 'bg-orange-900 text-orange-300' :
                    'bg-blue-900 text-blue-300'
                  }`}>
                    {workout.difficulty}
                  </div>
                  <div className="flex items-center space-x-1">
                    <Brain className="h-4 w-4 text-purple-400" />
                    <span className="text-purple-400 text-sm font-medium">{workout.aiScore}%</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{workout.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{workout.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Clock className="h-4 w-4" />
                      <span>{workout.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Flame className="h-4 w-4" />
                      <span>{workout.calories} cal</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">
                    <span className="font-medium">Focus:</span> {workout.focus}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedWorkout(workout.id)}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 font-medium"
                >
                  Start Workout
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* Active Workout Interface */
        <div className="space-y-6">
          {/* Workout Header */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-white">{currentWorkout?.name}</h2>
                <p className="text-gray-400">{currentWorkout?.description}</p>
              </div>
              <button
                onClick={() => setSelectedWorkout(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <RotateCcw className="h-6 w-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-gray-900 rounded-lg p-3 text-center">
                <div className="text-orange-500 text-lg font-bold">
                  {currentExercise + 1}/{currentWorkout?.exercises.length}
                </div>
                <div className="text-gray-400 text-xs">Exercise</div>
              </div>
              <div className="bg-gray-900 rounded-lg p-3 text-center">
                <div className="text-blue-500 text-lg font-bold">00:00</div>
                <div className="text-gray-400 text-xs">Timer</div>
              </div>
              <div className="bg-gray-900 rounded-lg p-3 text-center">
                <div className="text-green-500 text-lg font-bold">0</div>
                <div className="text-gray-400 text-xs">Calories</div>
              </div>
              <div className="bg-gray-900 rounded-lg p-3 text-center">
                <div className="text-purple-500 text-lg font-bold">98%</div>
                <div className="text-gray-400 text-xs">AI Score</div>
              </div>
            </div>
          </div>

          {/* Current Exercise */}
          {currentWorkout && (
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {currentWorkout.exercises[currentExercise].name}
                </h3>
                <div className="flex items-center justify-center space-x-6 text-lg">
                  <div className="text-orange-500">
                    <span className="font-bold">{currentWorkout.exercises[currentExercise].sets}</span>
                    <span className="text-gray-400 ml-1">sets</span>
                  </div>
                  <div className="text-blue-500">
                    <span className="font-bold">{currentWorkout.exercises[currentExercise].reps}</span>
                    <span className="text-gray-400 ml-1">reps</span>
                  </div>
                  <div className="text-green-500">
                    <span className="font-bold">{currentWorkout.exercises[currentExercise].rest}</span>
                    <span className="text-gray-400 ml-1">rest</span>
                  </div>
                </div>
              </div>

              {/* AI Form Feedback */}
              <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Brain className="h-5 w-5 text-purple-400" />
                  <span className="text-white font-medium">AI Form Analysis</span>
                </div>
                <div className="text-green-400 text-sm">
                  ✓ Perfect bar path detected • ✓ Optimal depth achieved • ✓ Core engagement good
                </div>
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={() => setIsWorkoutActive(!isWorkoutActive)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isWorkoutActive 
                      ? 'bg-red-600 hover:bg-red-700 text-white' 
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  {isWorkoutActive ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  <span>{isWorkoutActive ? 'Pause' : 'Start Set'}</span>
                </button>
                
                <button
                  onClick={() => setCurrentExercise(Math.min(currentExercise + 1, currentWorkout.exercises.length - 1))}
                  className="flex items-center space-x-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-all duration-300"
                >
                  <Target className="h-5 w-5" />
                  <span>Next Exercise</span>
                </button>
              </div>
            </div>
          )}

          {/* Exercise List */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">Workout Plan</h3>
            <div className="space-y-3">
              {currentWorkout?.exercises.map((exercise, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border transition-all duration-300 ${
                    index === currentExercise
                      ? 'border-orange-500 bg-orange-900 bg-opacity-20'
                      : index < currentExercise
                      ? 'border-green-500 bg-green-900 bg-opacity-20'
                      : 'border-gray-700 bg-gray-900'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-white">{exercise.name}</h4>
                      <div className="text-sm text-gray-400">
                        {exercise.sets} sets × {exercise.reps} reps • {exercise.rest} rest
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {index < currentExercise && <Award className="h-5 w-5 text-green-500" />}
                      {index === currentExercise && <Activity className="h-5 w-5 text-orange-500 animate-pulse" />}
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        exercise.weight === 'Max' ? 'bg-red-900 text-red-300' :
                        exercise.weight === 'Heavy' ? 'bg-orange-900 text-orange-300' :
                        exercise.weight === 'Moderate' ? 'bg-blue-900 text-blue-300' :
                        'bg-green-900 text-green-300'
                      }`}>
                        {exercise.weight}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIWorkouts;