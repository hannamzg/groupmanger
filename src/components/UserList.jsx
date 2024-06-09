import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = ({ fetchUsers }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const response = await axios.get('http://localhost:1000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users', error);
      }
    };

    fetchUsersData();
  }, [fetchUsers]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:1000/api/users/${id}`);
      fetchUsers();
      alert('User deleted successfully');
    } catch (error) {
      console.error('Error deleting user', error);
      alert('Error deleting user');
    }
  };

  return (
    <div style={{padding:"10px"}}>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
