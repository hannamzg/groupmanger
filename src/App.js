import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddUser from './components/AddUser';
import AddExpense from './components/AddExpense';
import ViewBalances from './components/ViewBalances';
import UserList from './components/UserList';
import ExpenseList from './components/ExpenseList';
import Navbar from './components/Navbar';
import Loader from './components/Loader';

const App = () => {
  const [users, setUsers] = useState([]);
  const [balances, setBalances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expenses, setExpenses] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:1000/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users', error);
    }
  };

  const fetchBalances = async () => {
    try {
      const response = await axios.get('http://localhost:1000/api/expenses/balances');
      setBalances(response.data);
    } catch (error) {
      console.error('Error fetching balances', error);
    }
  };
  
  const fetchExpenses = async () => {
    const response = await axios.get('http://localhost:1000/api/expenses');
    setExpenses(response.data);
  };

  const addExpense = async (newExpense) => {
    try {
      await axios.post('http://localhost:1000/api/expenses', newExpense);
      fetchExpenses(); // Update expenses after adding a new one
    } catch (error) {
      console.error('Error adding expense', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchUsers();
        await fetchBalances();
        await fetchExpenses();
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar  />
      <h1>Expense Tracker</h1>
      <div style={{ width: "80%", margin: "0 auto", padding: "10px" }}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <AddUser fetchUsers={fetchUsers} />
            <br />
            <AddExpense users={users} fetchBalances={fetchBalances} fetchExpenses={fetchExpenses} addExpense={addExpense} />
            {/* Pass addExpense function to AddExpense component */}
            <br />
            <UserList fetchUsers={fetchUsers} />
            <br />
            <ExpenseList fetchBalances={fetchBalances} expenses={expenses}/>
            {/* Pass expenses to ExpenseList component */}
            <br />
            <ViewBalances balances={balances} />
          </>
        )}
      </div>
    </>
  );
};

export default App;
