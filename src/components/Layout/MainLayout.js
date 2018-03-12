import React from 'react';
import styles from './MainLayout.css';
import Footer from './Footer/Footer';

function MainLayout({ children }) {
  return (
    <div className={styles.MainLayout}>
      <div className={styles.content}>
        {children}
      </div>
      <Footer/>
    </div>
  );
}

export default MainLayout;