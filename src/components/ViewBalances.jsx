import React from 'react';

const ViewBalances = ({ balances }) => {
  return (
    <div style={{padding:"10px"}}>
      <h2>Balances</h2>
      <ul>
        {balances.map((balance, index) => (
          <li key={index}>
            {balance.payer} owes {balance.payee} ${balance.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewBalances;
