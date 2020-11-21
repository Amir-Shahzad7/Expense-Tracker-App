import React from 'react';

const Transaction = ({ transactions }) => {
    return (
        <div>
            <li className="List">
                {transactions.text}
                <span>{transactions.amount}</span>
            </li>
        </div>
    )
}

export default Transaction;
