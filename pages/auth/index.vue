<template>

  <div class='auth'>

    <div class="auth_wrap">
      <UIM-Button
      class="google_button"
      :text="google_text" 
      @click="createUserGoogle" 
      />
    </div>

    <div class="t">987987</div>

    <div class="row">Email: {{ email }}</div>
    <div class="row"><button @click="setEmail">Set email</button></div>
    <div class="row"><button @click="createUser">createUser</button></div>
    <div class="row"><button @click="createUserGoogle">createUserGoogle</button></div>
    <div class="row"><input v-model="code" ></div>
    <div class="row"><button @click="confirmCode">confirmCode</button></div>


    <div class="" id="recaptcha-container"></div>

    <div class="row"><button id="sign-in-button" @click="createUserPhone">createUserPhone</button></div>
    <hr>
    <div class="row"><button @click="logout">logout</button></div>



  </div>

</template>


<script>
import { 
getAuth,
createUserWithEmailAndPassword, 
signInWithPopup, 
GoogleAuthProvider, 
RecaptchaVerifier, 
signInWithPhoneNumber,
signOut,
} from "firebase/auth";


export default {
  name: 'test',
  data: () => ({
    email: '',
    code: '',
    google_text: 'Google'
  }),



  methods: {

    async logout({commit}) {
        const auth = getAuth();
        await signOut(auth).then(() => {
          console.log( auth )
        }).catch((e) => {
          console.log( e )
        });
    },

    async setEmail() {
      this.$accessor.user.setEmail('test@email.com')
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
          console.log( auth.currentUser )
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
        });
    },


    async createUser() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, 'foo_5_@foo.foo', '123456aaaaaa')
        .then((userCredential) => {
          const user = userCredential.user;
          console.log( auth )
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    },

    async createUserPhone() {      
      const auth = getAuth();
      auth.languageCode = 'ru';
      window.recaptchaVerifier = await new RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': (response) => {
        }
      }, auth)
      await this.onSignInPhone()
    },

    async onSignInPhone() {
      console.log( ' onSignInPhone()' )
      // const phoneNumber = '';
      // const phoneNumber = '+380991516010';
      const phoneNumber = '+380991516010';
      const appVerifier = window.recaptchaVerifier;
      const auth = getAuth();
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          console.log( 'SMS sent.' )
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
        }).catch((e) => {
          console.log( e )
          window.recaptchaVerifier.render().then(function(widgetId) {
            grecaptcha.reset(widgetId);
          });
        });
    },

    async confirmCode() {      
      const code = this.code
      confirmationResult.confirm(code).then((result) => {
        const user = result.user;
        console.log( user )
      }).catch((e) => {
        console.log( e )
      });
    },




  },


  watch: {
  '$accessor.user.email': function() {
    this.email = this.$accessor.user.email
    }
  },

  layout: 'auth'



}

</script>


<style lang='scss' scoped>

.google_button {
  position: relative;
  padding: 2px 0;
}

.google_button::before {
  content: url("@/static/svg/google.svg");
  position: absolute;
  width: 25px;
  height: 25px;
  margin: 3px 3px;
  left: 5px;
  z-index: -1;
}
  
.auth_wrap {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
  
</style>