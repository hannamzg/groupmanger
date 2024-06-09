import React, { useState } from 'react';
import axios from 'axios';

const AddUser = ({ fetchUsers }) => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:1000/api/users', { name });
      setName('');
      fetchUsers(); // Fetch updated users
      alert('User added successfully');
    } catch (error) {
      console.error('Error adding user', error);
      alert('Error adding user');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{padding:"10px"}}>
      <h2>Add User</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
