import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import ReactSwipe from 'react-swipe';
import styles from './Banner.css'

/*
 * 将一个数组分成几个同等长度的数组
 * array[分割的原数组]
 * size[每个子数组的长度]
 */
function sliceArray(array, size) {
    var result = [];
    for (var x = 0; x < Math.ceil(array.length / size); x++) {
        var start = x * size;
        var end = start + size;
        result.push(array.slice(start, end));
    }
    return result;
}

class Banner extends Component {
  constructor(props) {
    super(props)
/*    this.state={
      actualSum:0,
      sum:0,
      currentPage:0
    }*/
  }
  componentWillMount() {
    this.listData = sliceArray(this.props.data.entries,8);
    this.sum=this.listData.length;
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className={styles.Banner}>
        <ReactSwipe 
          className={styles.swipe}
          swipeOptions={{continuous: false}}
        >
          {this.listData.map((itemData, index)=> {
            return SwipeList({itemData, index}) 
          })} 
        </ReactSwipe>
      </div>
    )
  }
}


// 这里必须使用函数来返回jsx元素，而不是使用函数来定义组件。这里不是组件而是函数
// 否则会出现塌陷问题
function SwipeList(props) {
  return (
    <div className={styles.SwipeList} key={props.index}>
      {props.itemData.map((value, index) => {
        return (
          <SwipeItem className={styles.SwipeList} itemValue={value} key={index}/>
        )
      })}
    </div>
  )
}

function SwipeItem(props) {
  let imgValue=props.itemValue.image_hash.split('');
  imgValue.splice(3,0,'/');
  imgValue.splice(1,0,'/');
  imgValue=imgValue.join('');

  return (
    <div className={styles.SwipeItem}>
      <a href="/">
        <div className={styles.SwipeItem__container}><img alt={props.itemValue.description} src={`//fuss10.elemecdn.com/${imgValue}.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/`}/></div>
        <span className={styles.SwipeItem__title}>{props.itemValue.name}</span>
      </a>
    </div>
  )
}

export default Banner;