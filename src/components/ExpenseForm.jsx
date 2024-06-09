import React, { useState } from 'react';
import axios from 'axios';

const ExpenseForm = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [paidBy, setPaidBy] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:1000/api/expenses', {
      description,
      amount,
      paid_by: paidBy
    });
    setDescription('');
    setAmount('');
    setPaidBy('');
  };

  return (
    <form onSubmit={handleSubmit} style={{padding:"10px"}}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Paid by"
        value={paidBy}
        onChange={(e) => setPaidBy(e.target.value)}
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
