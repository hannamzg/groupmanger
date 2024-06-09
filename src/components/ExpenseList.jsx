
const ExpenseList = ({ expenses }) => {
  return (
    <table style={styles.table}>
      <thead>
        <tr style={styles.tableHeader}>
          <th style={styles.headerCell}>Description</th>
          <th style={styles.headerCell}>Amount</th>
          <th style={styles.headerCell}>Payer</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id} style={styles.tableRow}>
            <td style={styles.tableCell}>{expense.description}</td>
            <td style={styles.tableCell}>${expense.amount}</td>
            <td style={styles.tableCell}>{expense.payer}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  },
  tableHeader: {
    backgroundColor: '#f0f0f0',
  },
  headerCell: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
  },
  tableRow: {
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
  },
  tableCell: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
  },
};

export default ExpenseList;
