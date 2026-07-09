import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import ReferralPayouts from './pages/ReferralPayouts';
import PaymentHistory from './pages/PaymentHistory';
import Reports from './pages/Reports';

function App() {
  const [currentPage, setCurrentPage] = useState('referral-payouts');
  const [selectedUniversity, setSelectedUniversity] = useState('Jama Hamdard');

  const universities = ['Jama Hamdard', 'IIT Bhilai', 'IIT Mandi'];

  const renderPage = () => {
    switch (currentPage) {
      case 'referral-payouts':
        return <ReferralPayouts university={selectedUniversity} />;
      case 'payment-history':
        return <PaymentHistory university={selectedUniversity} />;
      case 'reports':
        return <Reports university={selectedUniversity} />;
      default:
        return <ReferralPayouts university={selectedUniversity} />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        universities={universities}
        selectedUniversity={selectedUniversity}
        setSelectedUniversity={setSelectedUniversity}
      />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
