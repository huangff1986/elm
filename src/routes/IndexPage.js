import React,{Component} from 'react';
import { connect } from 'dva';
import { PullToRefresh } from 'antd-mobile';
import MainLayout from '../components/Layout/MainLayout';
import Header from '../components/Index/Header/Header.js';
import Search from '../components/Index/Search/Search.js';
import Hot    from '../components/Index/Hot/Hot.js';
import Banner from '../components/Index/Banner/Banner.js';
import Shop   from '../components/Index/ShopList/ShopList.js';
import styles from './IndexPage.css';

class IndexPage extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.dispatch({
      type: 'home/getHot'
    }),
    this.props.dispatch({
      type: 'home/getBanner'
    })
  }

  render(){

    const isNotLoadedBannerData = () => {
      return JSON.stringify(this.props.bannerData) == "{}"
    }

    return (
      <MainLayout history={this.props.history}>
        <div className={styles.IndexPage}>
            <Header/>
            <Search/>
            <Hot hotData= {this.props.hotData}/>
            { isNotLoadedBannerData() || <Banner data={this.props.bannerData}/> }
          <PullToRefresh
            ref={el => this.ptr = el}
            indicator={{deactivate:''}}
          >
            <Shop/>
          </PullToRefresh>
        </div>
      </MainLayout>
    );
  }
}

IndexPage.propTypes = {
};

function mapStateToProps(state) {
  return {
    hotData: state.home.hotData,
    bannerData: state.home.bannerData
  }
}

export default connect(mapStateToProps)(IndexPage);
