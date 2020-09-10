import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader'
import AppContent from './components/AppContent';
import AppFooter from './components/AppFooter';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppContent />
      <AppFooter />
    </div>
  );
}

export default App;
