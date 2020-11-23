import React from 'react';
import './App.css';
import ExpenseTrackerApp from './Components/ExpenseTrackerApp';
import { GlobalProvider } from './Context/GlobalContext';

function App() {
  return (
    <div className="App" >
      <GlobalProvider>
        <ExpenseTrackerApp></ExpenseTrackerApp>
      </GlobalProvider>
    </div>
  );
}

export default App;
