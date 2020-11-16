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
    <div className="App" >
      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"></meta>
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
      <meta name="HandheldFriendly" content="true"></meta>
          <Header></Header>
          <br />
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
          <div>
            <Form></Form>
          </div>
    </div>
  );
}

export default App;
