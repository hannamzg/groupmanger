import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar" style={styles.navbar}>
      <ul className="navbar-nav" style={styles.navbarNav}>
        <li className="nav-item" style={styles.navItem}>
          <a href="#" className="nav-link" style={styles.navLink}>Home</a>
        </li>
        <li className="nav-item" style={styles.navItem}>
          <a href="#" className="nav-link" style={styles.navLink}>About</a>
        </li>
        <li className="nav-item" style={styles.navItem}>
          <a href="#" className="nav-link" style={styles.navLink}>Services</a>
        </li>
        <li className="nav-item" style={styles.navItem}>
          <a href="#" className="nav-link" style={styles.navLink}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px',
  },
  navbarNav: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'center',
    margin: '0',
    padding: '0',
  },
  navItem: {
    marginRight: '10px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    padding: '5px 10px',
  },
};

export default Navbar;
