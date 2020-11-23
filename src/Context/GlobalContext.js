import React, { createContext, useReducer } from 'react';
import TransactionReducer from '../Reducer/AppReducer';

// Creating Initial State.

const initialTransactions = [
]

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
            }
        });
    }
    return (
        <GlobalContext.Provider value={
            {
                transactions: state,
                addTransactions,
            }
        }> {children}
        </GlobalContext.Provider>
    )
}


