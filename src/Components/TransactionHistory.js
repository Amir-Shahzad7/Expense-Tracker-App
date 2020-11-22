import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalContext';
import Transaction from './Transaction';

const TransactionHistory = () => {

    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <div className="TransactionHistory">
                <h3>History</h3>
                <hr className="HorizontalLine"></hr>
            </div>
            {transactions.map(transactions => (
                <Transaction key={transactions.id} transactions={transactions}></Transaction>
            )
            )}

        </div>
    )
}

export default TransactionHistory;
