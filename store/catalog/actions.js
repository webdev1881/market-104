import axios from '@nuxtjs/axios'

export default {

  // async getUserId() {
  //   const auth = getAuth();
  //   let id = null
  //   await onAuthStateChanged(auth, (user) => {
  //     user ? id = user.uid : console.log( 'ERROR ID_USER' )
  //   });
  //   return id
  // },

  async GET_PRODUCTS( { commit } ) {

    const products = await this.$axios.$get( 'https://jsonplaceholder.typicode.com/posts')
    .catch( (err) => console.log( err )  )
    commit( 'SET_PRODUCTS', products )

  }



};