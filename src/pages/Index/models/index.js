import { queryUsers } from '@/services/api';

export default {
  namespace: 'index',

  state: {
    response:{}
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryUsers, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        response: action.payload,
      };
    },
  },
};
