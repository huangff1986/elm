import React,{Component} from 'react';
import {connect} from 'dva';
import Header from '../Header/Header.js';
import styles from './Address.css';
import spng from './search_address.png';


class Address extends Component{
  constructor(props){
    super(props)
    this.state={
      rotate:false
    }
  }
  handleClick(){
    if(this.handleClick.timer){clearTimeout(this.handleClick.timer)}
    this.setState({rotate:true})
    this.handleClick.timer=setTimeout(()=>{
      this.setState({
        rotate:false
      })
    },1000)
  }

  handleClose() {
    this.props.dispatch({type: 'home/toggleAddressOpen'})
  }

  render(){
    return(
      <div className={styles.Address}>
        <Header closeType handleClose={this.handleClose.bind(this)} title={'选择收货地址'}/>
        <form className={styles.Address__searchbar}>
          <img src={spng} alt='搜索'/> 
          <input type="search" placeholder="请输入地址" autoFocus="autofocus" className={styles.searchbar__input}/>
        </form>
        <section className={styles.Address__bd}>
          <h4 className={styles.Address__title}>当前地址</h4>
          <div className={styles.Address__content}>
            <span className={styles.address__current}>地球</span>
            <span className={styles.address__content} onClick={this.handleClick.bind(this)}>
              <svg className={`${styles.icon} ${this.state.rotate?'rotate':'cc'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" version="1.1"><g fillRule="evenodd" fill="none"><circle cx="7.5" cy="7.5" r="7" stroke="#2395FF"/><path fill="#2395FF" d="M7 0h1v5H7zM7 10h1v5H7zM10 7h5v1h-5zM0 7h5v1H0z"/></g></svg>
                            <span>重新定位</span>`
            </span>
          </div>
        </section>
      </div>
    )
  }
}

export default connect()(Address);