import React from 'react';
import styles from './Header.module.css';
import logo from '/lime-logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="lime logotype" width={30} height={30} />
      <h1 className={styles.title}>LimeFood</h1>
    </header>
  );
};

export default Header;
