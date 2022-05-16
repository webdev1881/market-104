import actions from './auth/actions';
import getters from './auth/getters';
import mutations from './auth/mutations';

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