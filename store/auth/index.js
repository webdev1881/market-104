import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  user: {
    name: null,
    email: null
  }
}

const inBrowser = typeof window !== 'undefined';

// const state = defaultState;

export default {
  state,
  actions,
  mutations,
  getters
}