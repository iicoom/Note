import { queryTipsList } from 'service/entry';

export default {
    namespace: 'entry',
    state: {
        tips: { count: 0, rows: [] },
        article: { count: 0, rows: [] },
    },

    effects: {
        *fetchTipsList({ payload }, { call, put }) {
            const response = yield call(queryTipsList, payload);
      
            const {
              data: { data },
            } = response;
      
            yield put({
              type: 'saveTipsList',
              payload: data,
            });
      
            if (payload && payload.resolve) {
              payload.resolve(data);
            }
        },
    },

    reducers: {
        saveTipsList(state, { payload }) {
            return { ...state, tips: payload };
        },
    }
}