import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import Transaction from './Transaction.js'

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    //console.log(context);

    return (
        <>
        <h3>History</h3>
            <ul id="list" className="list">
            {transactions.map(transaction =>(<Transaction key={transaction.id} transaction={transaction} />))}
            </ul>
        </>
    )
}
