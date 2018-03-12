import React from 'react';
import { connect } from 'dva';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Address from '../../Address/Address.js';
import styles from './Header.css';

function Header({isAddressOpen, address, temperature, description, dispatch}) {

  const toggleAddressOpen = () => {
    dispatch({type: 'home/toggleAddressOpen'})
  }
  return (
    <ReactCSSTransitionGroup 
    transitionName='animation'
    transitionEnterTimeout={500}
    transitionLeaveTimeout={500}>
      <div className={styles.Header}>
        <div className={styles.address}>
          <span className={styles.address__icon}></span>
          <span className={styles.address__text} onClick={toggleAddressOpen}>{address}</span>
          <i className={styles.sj}></i>
        </div>
        <aside className={styles.weather}>
          <div>
            <h2 className={styles.weather__temperature}>{temperature}</h2>
            <p className={styles.weather__today}>{description}</p>
          </div>
          <img alt="天气图标" className={styles.weather__icon} src="//fuss10.elemecdn.com/9/b9/c8e482821be2080edcffbb3a8d376png.png?imageMogr/format/webp/thumbnail/!69x69r/gravity/Center/crop/69x69/"/>
        </aside>
      </div>
      {isAddressOpen && <Address/> }
    </ReactCSSTransitionGroup>
  )
}

function mapStateToProps(state) {
  return {
    isAddressOpen : state.home.header.isAddressOpen,
    address       : state.home.header.address,
    temperature   : state.home.header.temperature,
    description   : state.home.header.description
  }
}

export default connect(mapStateToProps)(Header);