import React from 'react';
import './App.css';
import AccountSummary from './Components/AccountSummary';
import AddTransaction from './Components/AddTransaction';
import Balance from './Components/Balance';
import Header from './Components/Header';
import TransactionHistory from './Components/TransactionHistory';

function App() {
  return (
  <div className="App">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <Header></Header>
    <div>
      <Balance></Balance>
      <br />
    </div>
    <div>
      <AccountSummary></AccountSummary>
      <br />
    </div>
    <div>
      <TransactionHistory></TransactionHistory>
    </div>
    <div>
      <AddTransaction></AddTransaction>
    </div>
  </div>
  );
}

export default App;
