import React, { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const ExpenseTrackerApp = () => {
  let { transactions, addTransactions, deleteTransactions } = useContext(
    GlobalContext
  );
  let [newText, setText] = useState("");
  let [newAmount, setAmount] = useState("");

  let handleAddition = (event) => {
    event.preventDefault();
    if (Number(newAmount) === 0) {
      alert("Please enter a Valid amount.");
      return false;
    }
    addTransactions({
      id: Math.floor(Math.random() * 100000000),
      text: newText,
      amount: Number(newAmount),
    });

    setText("");
    setAmount("");
  };

  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0) {
        income = income + transactions[i].amount;
      }
    }
    return income;
  };

  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0) {
        expense = expense + transactions[i].amount;
      }
    }
    return expense;
  };

  const balance = () => {
    return getIncome() + getExpense();
  };

  const sign = balance() < 0 ? "-" : "";

  return (
    <div>
      <div className="ExpenseTrackerApp">
        <h2>Expense Tracker</h2>
      </div>
      <div className="Balance">
        <h4>YOUR BALANCE</h4>
        <h1>
          {sign}${Math.abs(balance()).toFixed(2)}
        </h1>
      </div>
      <div>
        <div className="IncomeExpenseContainer">
          <div>
            <h4>
              <b>INCOME</b>
            </h4>
            <p style={{ fontSize: "20px", color: "#2ECC71" }}>
              ${getIncome().toFixed(2)}
            </p>
          </div>
          <p style={{ borderRight: "1px solid #dedede" }}></p>
          <div>
            <h4>
              <b>EXPENSES</b>
            </h4>
            <p style={{ fontSize: "20px", color: "#C8392B" }}>
              ${Math.abs(getExpense()).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      <div className="TransactionHistory">
        <h3>History</h3>
        <hr className="HorizontalLine"></hr>
        <ul className="List">
          {transactions.map((transObj, ind) => {
            const sign = transObj.amount > 0 ? "+" : "-";
            return (
              <li key={ind} className={transObj.amount < 0 ? "minus" : "plus"}>
                {transObj.text}
                <span>
                  {sign}${Math.abs(transObj.amount).toFixed(2)}
                </span>
                <button
                  className="DeleteButton"
                  onClick={() => {
                    deleteTransactions(transObj.id);
                  }}
                >
                  x
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <div className="AddTransaction">
          <h3>Add new transaction</h3>
          <hr className="HorizontalLine"></hr>
        </div>
        <div className="Form">
          <form onSubmit={handleAddition}>
            <label>Text</label>
            <br />
            <input
              type="text"
              value={newText}
              required
              onChange={(ev) => setText(ev.target.value)}
              className="InputBoxes"
              placeholder="Enter text..."
            ></input>
            <br />
            <br />
            <label>
              Amount
              <br />
              (negative - expense, positive - income)
            </label>
            <br />
            <input
              type="number"
              value={newAmount}
              required
              onChange={(ev) => setAmount(ev.target.value)}
              className="InputBoxes"
              placeholder="Enter amount..."
            ></input>
            <br />
            <input
              type="submit"
              value="Add transaction"
              className="AddButton"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTrackerApp;