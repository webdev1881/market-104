import Vuex from 'vuex';
import authModule from './auth/index';

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      auth: authModule
    }
  });
};

export default createStore