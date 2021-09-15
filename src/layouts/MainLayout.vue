<template>
  <q-layout class="q-pa-md q-mt-xl" >
      <h4 class="text-h6 text-center q-mb-none text-weight-medium text-grey-14">Welcome,</h4>
      <p class="text-h6 text-center text-grey-6 q-pb-md">Login to continue!!</p>
      <q-form>
      <q-input type="email" class="q-pa-sm" outlined v-model="loginForm.email" label="Email" />
      <q-input type="password" class="q-pa-sm" outlined v-model="loginForm.password" label="Password" />
      <p class="q-pl-sm text-grey-7">Forgot Password?</p>
      <p v-if ="error">Wrong Credentials</p>
        <div class=" q-pa-sm row justify-center items-center">
          <q-btn padding="5px 35px" color="white" glossy text-color="black"  label="LOGIN" @click="loginUserPage"/>
        </div>
      </q-form>
      <span class="text-blue-4 text-weight-medium q-pa-xl row justify-center items-center q-mt-xl">Dont have an Account?
        <router-link to = "/signup" class="text-blue-4 text-weight-bold">Signup</router-link>
      </span>
      
  </q-layout>
</template>

<script>
import {firebaseAuth} from 'src/boot/firebase'
import {signInWithEmailAndPassword } from "firebase/auth";
export default {



 data() {
   return {
     loginForm: {
       email : '',
      password: '',
     },
     error: false
     
   }
 },
 methods:{
   loginUserPage(){
    
     signInWithEmailAndPassword(firebaseAuth,this.loginForm.email, this.loginForm.password)
     .then(response => {
       this.$router.push('/welcome')


      })
     .catch ( error => {
       this.error = true
     })
   }
 }
}
</script>

