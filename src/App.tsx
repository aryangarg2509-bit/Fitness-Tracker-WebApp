import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import AIWorkouts from './components/AIWorkouts';
import FormTracker from './components/FormTracker';
import Challenges from './components/Challenges';
import Community from './components/Community';
import RecoveryHub from './components/RecoveryHub';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderContent = () => {
    switch (currentPage) {
      case 'workouts':
        return <AIWorkouts />;
      case 'form-tracker':
        return <FormTracker />;
      case 'challenges':
        return <Challenges />;
      case 'community':
        return <Community />;
      case 'recovery':
        return <RecoveryHub />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderContent()}
    </Layout>
  );
}

export default App;