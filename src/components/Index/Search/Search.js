import React, { Component } from 'react';
import styles from './Search.css';
import icon from './search.png'

class Search extends Component{
  constructor(props) {
    super(props);
  }
  render (){
    return (
      <div className={styles.Search}>
        <div className={styles.Search__content}>
          <input className={styles.Search__input}  placeholder='搜索商家'>
          </input>
          <img className={styles.Search__icon} src={icon}></img>
        </div>
      </div>
    )
  }
}

export default Search;