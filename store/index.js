import Vuex from 'vuex';
import authModule from './auth/index';
import catalogModule from './catalog';

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      auth: authModule,
      catalog: catalogModule,
    }
  });
};

export default createStore