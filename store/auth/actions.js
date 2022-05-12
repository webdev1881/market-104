import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup, 
  GoogleAuthProvider, 
  RecaptchaVerifier, 
  signInWithPhoneNumber,
  signOut,
  } from "firebase/auth";
  import { getDatabase, ref, set, onValue } from "firebase/database";

export default {

  async getUserId() {
    const auth = getAuth();
    let id = null
    await onAuthStateChanged(auth, (user) => {
      user ? id = user.uid : console.log( 'ERROR ID_USER' )
    });
    return id
  },


  async fetchUser( {dispatch, commit} ){
    const id = await dispatch('getUserId')      
    console.log( id )
    const db = getDatabase()
    const starCountRef = ref(db, 'users/' + id)
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val()
      console.log( data )
    });
  },






  async createUser({ dispatch, commit }, { email, password, name }) {
    console.log( 'createUser' )
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then( async (userCredential) => {
        const user = userCredential.user;
        const id = await dispatch('getUserId')
        console.log( id )
        const db = getDatabase();
        try {
          set(ref(db, 'users/' + id), {
            username: name,
            email: email,
          });
          commit('setUser', { 'id': id, 'name': name, 'email': email})
        } catch (e) {console.log( e )}
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  },



  async createUserGoogle() {
    console.log( 'createUserGoogle' )
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log( user.displayName )
        commit('setUser', { 'id': user.id, 'name': user.displayName, 'email': user.email})
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  },






  async login({ dispatch, commit }, { email, password }) {
    console.log( 'login' )
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log( user )
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log( errorMessage )
    });
  },




};