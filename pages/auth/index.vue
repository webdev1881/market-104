<template>

  <div class='auth'>

    <h3> Hello, {{ name.name || "Гість" }} </h3>
    <div>
      <nuxt-link to="/" >HOME</nuxt-link>
    </div>

    

    <div class="auth_wrap">
      <UIM-Button
      class="google_button"
      :text="google_text" 
      @click="createUserGoogle" 
      />
    </div>

    <div class="t">987987</div>

    <div class="row">Email: {{ email }}</div>
    <div class="row"><button @click="login">Login</button></div>
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
  name: 'auth',
  data: () => ({

    user: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    email: '',
    code: '',
    google_text: 'Google'
  }),

  async mounted() {

  },



  methods: {

    async logout({commit}) {
        const auth = getAuth();
        await signOut(auth).then(() => {
          // console.log( auth )
        }).catch((e) => {
          // console.log( e )
        });
    },

    async setEmail() {
      // console.log( this.$accessor )
      // this.$accessor.user.setEmail('test@email.com')
    },


    async createUserGoogle() {
      await this.$store.dispatch( 'createUserGoogle');
    },


    async createUser() {
      const formData = {
        // email: this.user.email,
        // password: this.user.password,
        // name: this.user.name,
        email: 'foo_5556667899_@foo.foo',
        password: '123456aaaaaa',
        name: 'Vladim',   
      }
      await this.$store.dispatch( 'createUser', formData );
    },


    async login() {
      const formData = {
        // email: this.user.email,
        // password: this.user.password,
        // name: this.user.name,
        email: 'foo_555_@foo.foo',
        password: '123456aaaaaa',
        name: 'Vladim',
      }
      await this.$store.dispatch("login", formData);
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
      // console.log( ' onSignInPhone()' )
      // const phoneNumber = '';
      // const phoneNumber = '+380991516010';
      const phoneNumber = '+380991516010';
      const appVerifier = window.recaptchaVerifier;
      const auth = getAuth();
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // console.log( 'SMS sent.' )
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
        }).catch((e) => {
          // console.log( e )
          window.recaptchaVerifier.render().then(function(widgetId) {
            grecaptcha.reset(widgetId);
          });
        });
    },

    async confirmCode() {      
      const code = this.code
      confirmationResult.confirm(code).then((result) => {
        const user = result.user;
        // console.log( user )
      }).catch((e) => {
        // console.log( e )
      });
    },




  },

  computed: {
    name() {
      return this.$store.getters.getUser || "Гість"
    }
  },


  watch: {
  '$accessor.user.email': function() {
    // this.email = this.$accessor.user.email
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
  content: url("@/static/svg/go.svg");
  position: absolute;
  width: 25px;
  height: 25px;
  margin: 3px 3px;
  left: 5px;
  z-index: -1;
}
  
.auth_wrap {
  // height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
  
</style>