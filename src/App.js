import React from 'react';
import './App.css';
import AccountSummary from './Components/AccountSummary';
import Balance from './Components/Balance';
import Header from './Components/Header';

function App() {
  return (
  <div className="App">
    <Header></Header>
    <div>
      <Balance></Balance>
      <br />
    </div>
    <div>
      <AccountSummary></AccountSummary>
    </div>
  </div>
  );
}

export default App;
