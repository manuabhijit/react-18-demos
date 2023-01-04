import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <img src="/logo.png" alt="Logo" style={styles.logo} />
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <a href="#" style={styles.navLink}>Home</a>
          </li>
          <li style={styles.navItem}>
            <a href="#" style={styles.navLink}>About</a>
          </li>
          <li style={styles.navItem}>
            <a href="#" style={styles.navLink}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
  },
  logo: {
    height: '40px',
  },
  nav: {
    display: 'flex',
  },
  navList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
  },
  navItem: {
    marginRight: '20px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
  },
};

export default Header;
