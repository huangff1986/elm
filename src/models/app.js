
export default {

  namespace: 'app',

  state: {
    selectedTab: 'waimai'
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname, query }) => {
        if (pathname === '/') {

        }
      })
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
    },
  },

  reducers: {
    changeTab(state, {payload:  key }) {
      return { ...state, selectedTab : key };
    },
  },

};
