/*
 * Header有两个功能，根据closeOrBack来决定
 */
import React, {Component} from 'react';
import { withRouter } from "dva/router";
import styles from './Header.css';


function Header({title, handleClose, closeType, history}) {
  function handleCloseOrBack() {
    if(closeType) {
      handleClose();
    }else{
      history.back()
    }
  }

  return (
    <div className={styles.Header}>
      <div className={styles.Header__back} onClick={handleCloseOrBack}>
        <svg className={styles.Header__icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 32" version="1.1"><path fill="#fff" d="M16.552 5.633L14.508 3.59 2.243 15.853 14.508 28.41l2.044-2.043-10.22-10.513z"/></svg>
      </div>
      <h1 className={styles.Header__title}>{title || ''}</h1>
    </div>
  )
}

export default Header;