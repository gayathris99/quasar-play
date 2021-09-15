<template>
    <q-layout class="q-pa-md q-mt-md" >
      <h4 class="text-h6 text-center q-mt-none q-mb-none text-weight-medium text-grey-14">Create Account</h4>
      <p class=" text-h6 text-center text-grey-6 q-pb-md">Sign Up to get Started!!</p>
      <q-form @submit="registerUser">
      <q-input type="text" class="q-pa-sm" outlined v-model="registerForm.firstName" label="First Name" />
      <q-input type="text" class="q-pa-sm" outlined v-model="registerForm.lastName" label="Last Name" />
      <q-input type="email" class="q-pa-sm" outlined v-model="registerForm.email" label="Email" />
      <q-input type="number" class="q-pa-sm" outlined v-model="registerForm.phone" label="Phone Number" />
      <q-input type="password" class="q-pa-sm" outlined v-model="registerForm.password" label="Password" />
      
        <div class=" q-pa-sm row justify-center items-center">
          <q-btn padding="5px 35px" color="white" glossy text-color="black"  label="SignUp" @click="registerUser"/>
        </div>
        </q-form>
      <span class="text-blue-4 text-weight-medium  row justify-center items-center q-mt-lg">Have an Account?
        <router-link to = "/" class="text-blue-4 text-weight-bold">Login</router-link>
      </span>
      
  </q-layout>
</template>


<script>
import {firebaseAuth,firebaseDb} from 'src/boot/firebase'
import {createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, setDoc, doc } from "firebase/firestore"; 

export default {
 data() {
   return {
     registerForm:{
      firstName: '',
     lastName: '',
     email : '',
     phone: '',
     password: '',
     }
   }
 },
 methods:{
    registerUser(){
     
     createUserWithEmailAndPassword(firebaseAuth,this.registerForm.email, this.registerForm.password)
     .then(response => {
       let userID = response.user.uid
       const docRef = setDoc(doc(firebaseDb, "users", userID), {
         firstName: this.registerForm.firstName,
         lastName: this.registerForm.lastName,
         email: this.registerForm.email,
         phone: this.registerForm.phone,
         
       });
      
       this.$router.push('/welcome')
      })
     .catch ( error => {
        this.error = true
     })
  }
 }
}
</script>