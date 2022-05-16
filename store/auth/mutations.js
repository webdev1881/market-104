export default {
  setUser( state, user ) {
    console.log( 'setuser' )
    state.user = user
  },
  clearUser(state) {
      state.user = {}
  }
}