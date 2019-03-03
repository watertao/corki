import router from 'umi/router';
import { queryCurrent, login, logout } from '@/services/user';

export default {

  namespace: 'global',

  state: {
    isInitialized: false,

    /**
     * {
     *  token: '1234567890abcdef',
     *  name: '吴涛',
     *  role: 'ROLE_PARENT',   // ROLE_TEACHER
     * }
     */
    currentUser: null,
  },

  effects: {

    *initApp(_, { call, put }) {
      // TODO : fetch initialize data from server

      yield put({ type: 'initializeFinished' });
    },

    /**
     * 同步会话，获取当前登录用户的会话信息，保存到 currentUser
     */
      *fetchCurrent(_, { call, put }) {
      try {
        const { data } = yield call(queryCurrent);
        yield put({
          type: 'saveCurrentUser',
          payload: data
        });
      } catch (ex) {
        console.error(ex);
      }
    },

    *fetchResourceMetadata(_, { call, put }) {
      try {
        const { data } = yield call(fetchFullResourceMetadata);
        yield put({
          type: 'saveResourceMetadata',
          payload: data
        });
      } catch (ex) {
        console.log(ex);
      }
    },

    *login(action, { call, put, select }){
      try {
        const { data } = yield call(login, action.payload);
        yield put({
          type: 'saveCurrentUser',
          payload: data
        });
        // store token to localstorage
        sessionStorage.setItem("auth_token", data.token);
        router.push("/");
      } catch (ex) {
        console.error(ex);
      }
    },

    /**
     * 登出，销毁服务端会话，并刷新当前页，由于当前页无法再同步到已经销毁的会话，便会转向到 /login
     */
      *logout(_, { call, put}) {
      try {
        yield call(logout);
        yield put({
          type: 'user/saveCurrentUser',
          payload: {}
        });
        sessionStorage.setItem("auth_token", null);
        window.location.reload(true);
      } catch (ex) {
        console.error(ex);
      }

    },

  },

  reducers: {
    initializeFinished(state) {
      return {
        ...state,
        isInitialized: true,
      };
    },

    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload || {},
      };
    },
    saveResourceMetadata(state, action) {
      return {
        ...state,
        resourceMetadata: action.payload || [],
      };
    },
    // todo
  },

};
