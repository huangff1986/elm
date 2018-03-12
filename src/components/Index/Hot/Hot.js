import React from 'react';
import {connect} from 'dva';
import styles from './Hot.css';

function Hot({hotData}) {
  const listData = hotData.map((value, index) => {
    return <a href="/" className={styles.list__Item} key={index}>{value.word}</a>
  })
  return (
    <div className={styles.Hot}>
      <div className={styles.Hot__list}>
        {listData}
      </div>
    </div>
  )
}


export default Hot;