import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.copyright}>Copyright 2021</p>
      <div style={styles.socialMedia}>
        <a href="#" style={styles.socialMediaLink}>
          Twitter
        </a>
        <a href="#" style={styles.socialMediaLink}>
          Facebook
        </a>
        <a href="#" style={styles.socialMediaLink}>
          Instagram
        </a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
  },
  copyright: {
    margin: 0,
  },
  socialMedia: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  socialMediaLink: {
    color: '#fff',
    textDecoration: 'none',
  },
};

export default Footer;