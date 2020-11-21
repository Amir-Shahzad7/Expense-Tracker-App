import React, { createContext, useReducer } from 'react';
import AppReducer from '../Reducer/AppReducer';

// Creating Initial State.

const initialState = {
    transactions: [
        { id: 1, text: "Car", amount: 10000 },
        { id: 2, text: "Shoe Box", amount: 100 },
        { id: 3, text: "Laptop", amount: 1500 },
    ]
}

// Creating Global Context. 


export const GlobalContext = createContext(initialState);


// Creating GlobalProvider. 

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions
            }
        }> {children}
        </GlobalContext.Provider>
    )
}


