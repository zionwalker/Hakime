import React, { useState } from 'react';

const Balance = () => {
    const [balance, setBalance] = useState(1700); 
    const [transactions, setTransactions] = useState([
        { id: 1, description: 'amedu paid for consultation', amount: 400, date: '2024-05-20' },
        { id: 2, description: 'amedu paid for consultation', amount: 1000, date: '2024-05-18' },
        { id: 3, description: 'amedu paid for consultation ', amount: 300, date: '2024-05-15' },
    ]);

    return (
        <div className="p-6 bg-gray-100  min-h-screen text-gray-900 dark:text-gray-100">
            <div className="max-w-lg mx-auto bg-white dark:bg-gray-700 p-6 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Wallet Balance</h2>
                <div className="text-center mb-6">
                    <div className="text-4xl font-semibold">{balance.toFixed(2)}</div>
                    <div className="text-gray-600 dark:text-gray-400">Available Balance</div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2">Transactions</h3>
                    <ul className="divide-y divide-gray-200 dark:divide-gray-600">
                        {transactions.map((transaction) => (
                            <li key={transaction.id} className="py-4 flex justify-between">
                                <div>
                                    <p className="text-lg">{transaction.description}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{transaction.date}</p>
                                </div>
                                <div className={`text-lg ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
                                    {transaction.amount < 0 ? '-' : '+'}{Math.abs(transaction.amount).toFixed(2)}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Balance;
