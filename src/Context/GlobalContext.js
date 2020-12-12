import React, { createContext, useReducer } from "react";
import TransactionReducer from "../Reducer/AppReducer";

// Creating Initial State.

const initialTransactions = [];

// Creating Global Context.

export const GlobalContext = createContext(initialTransactions);

// Creating GlobalProvider.

export const GlobalProvider = ({ children }) => {
  let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);
  function addTransactions(transObj) {
    dispatch({
      type: "AddTransactions",
      payload: {
        text: transObj.text,
        amount: transObj.amount,
        id: transObj.id,
      },
    });
  }
  function deleteTransactions(id) {
    dispatch({
      type: "DeleteTransactions",
      payload: id,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state,
        addTransactions,
        deleteTransactions,
      }}
    >
      {" "}
      {children}
    </GlobalContext.Provider>
  );
};
