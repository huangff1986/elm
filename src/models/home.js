import {getHot, getBannerData} from '../services/index.js'

export default {
  namespace: 'home',

  state:{
    header: {
      temperature:'28',
      description:'晴天',
      image_hash:'',
      address:'湖北襄阳',
      isAddressOpen:false //Address是否打开
    },
    hotData:[],
    bannerData: {}
  },

  reducers: {
    toggleAddressOpen(state) {
      const header = { ...state.header, isAddressOpen: !state.header.isAddressOpen }
      return {
        ...state,
        header
      }
    },
    updataHot(state, action) {
      return {
        ...state,
        hotData: action.payload
      }
    },
    updataBanner(state, action) {
      return {
        ...state,
        bannerData: action.payload
      }
    }
  },

  effects: {
    *getHot(action, { call, put }) {  // eslint-disable-line
      const request = yield getHot();
      yield put({
        type: 'updataHot', 
        payload: request.data
      });
    },
    *getBanner(action, { call, put }) {
      const request = yield getBannerData();
      yield put({
        type: 'updataBanner',
        payload: request.data
      })
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname, query }) => {
        if (pathname === '/') {

        }
      })
    },
  }
}