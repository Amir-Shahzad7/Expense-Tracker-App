import React from 'react';
import './App.css';
import AccountSummary from './Components/AccountSummary';
import AddTransaction from './Components/AddTransaction';
import Balance from './Components/Balance';
import Header from './Components/Header';
import TransactionHistory from './Components/TransactionHistory';
import { GlobalProvider } from './Context/GlobalContext';

function App() {
  return (
    <div className="App" >
      <GlobalProvider>
        <Header></Header>
        <div>
          <Balance></Balance>
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
      </GlobalProvider>
    </div>
  );
}

export default App;
