import React from 'react';
import './App.css';
import AccountSummary from './Components/AccountSummary';
import AddTransaction from './Components/AddTransaction';
import Balance from './Components/Balance';
import Form from './Components/Form';
import Header from './Components/Header';
import TransactionHistory from './Components/TransactionHistory';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <br />
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
      <div>
        <Form></Form>
      </div>
    </div>
  );
}

export default App;
