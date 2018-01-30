@connect(state => ({
  userStorage: state.userStorage,
}))


componentDidMount() {
    this.handleSearch();
}

handleSearch = (params = { pageSize: 15 }) => {
    const { dispatch, form } = this.props;

    form.validateFields((err, fieldsValue) => {
      if (err) return;

      const values = {
        ...params,
        ...fieldsValue,
      };

      if (fieldsValue.createTime && fieldsValue.createTime.length > 1) {
        values.startTime = fieldsValue.createTime[0].format('YYYY-MM-DD');
        values.endTime = fieldsValue.createTime[1].format('YYYY-MM-DD');
        delete values.createTime;
      }

      dispatch({
        type: 'userStorageRecord/search',
        payload: values,
      });
    });
};


// model
import { findAll, findDetailList } from '../services/userStorage';

export default {
  namespace: 'userStorage',

  state: {
    data: {
      list: [],
      total: 0,
    },
    findLoading: false,
  },

  effects: {
    *findAll({ payload }, { put }) {
      const params = {
        ...payload,
      };
      yield put({
        type: 'global/fetch',
        payload: {
          action: 'userStorage/FIND_ALL',
          method: findAll,
          params,
        },
      });
    },
  },

  reducers: {
    FIND_ALL(state) {
      return {
        ...state,
        findLoading: true,
      };
    },
  }
}

