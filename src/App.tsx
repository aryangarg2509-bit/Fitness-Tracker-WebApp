import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import QualityTesting from './components/QualityTesting';
import PublicVerification from './components/PublicVerification';

function App() {
  const [userRole, setUserRole] = useState('admin');
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderContent = () => {
    switch (currentPage) {
      case 'tests':
        return <QualityTesting />;
      case 'verify':
        return <PublicVerification />;
      default:
        return <Dashboard userRole={userRole} />;
    }
  };

  return (
    <Layout userRole={userRole} onRoleChange={setUserRole}>
      {renderContent()}
    </Layout>
  );
}

export default App;