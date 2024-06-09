import React, { useState } from 'react';
import axios from 'axios';

const AddExpense = ({ users, fetchBalances, fetchExpenses }) => {
  const [userId, setUserId] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [participants, setParticipants] = useState([]);

  const handleParticipantChange = (e) => {
    const { value, checked } = e.target;
    const userIdValue = parseInt(value, 10); // Ensure the value is an integer
    setParticipants(prev =>
      checked ? [...prev, userIdValue] : prev.filter(p => p !== userIdValue)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:1000/api/expenses', {
        paidBy: userId, // Assuming this is the correct field for the user who paid
        description,
        amount,
        participants
      });
      setUserId('');
      setDescription('');
      setAmount('');
      setParticipants([]);
      fetchBalances(); // Fetch updated balances
      fetchExpenses();
      alert('Expense added successfully');
    } catch (error) {
      console.error('Error adding expense', error);
      alert('Error adding expense');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Expense</h2>
      <select value={userId} onChange={(e) => setUserId(e.target.value)} style={{padding:"10px"}}>
        <option value="">Select User</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <div style={{padding:"10px"}}>
        <h3>Select Participants that should pay</h3>
        {users.map((user) => (
          <div key={user.id} style={{padding: "5px", marginRight:"10px",marginBottom:'10px'}}>
            <input
              type="checkbox"
              value={user.id}
              checked={participants.includes(user.id)}
              onChange={handleParticipantChange}
              style={{marginRight:"10px"}}
            />
            {user.name}
          </div>
        ))}
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default AddExpense;
