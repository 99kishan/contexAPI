import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalContext';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((num, item) => (num += item), 0).toFixed(2);

    return (
        <div>
            <h4>Current Balance</h4>
            <h1 >₹{total}</h1>
        </div>
    )
}
