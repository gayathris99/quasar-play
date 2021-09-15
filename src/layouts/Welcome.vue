<template>
    <q-layout class="q-pa-md q-mt-md" >
        <h2 v-if="user" class="text-h6 text-center q-mb-none text-weight-medium text-grey-14">Welcome {{user.firstName}} {{user.lastName}}</h2>
        <p class="text-h6 text-center q-mb-none text-weight-medium text-grey-14">Your phone number is {{user.phone}} and email is {{user.email}}</p>
    </q-layout>
</template>

<script>
import {firebaseAuth, firebaseDb} from 'src/boot/firebase';
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
export default {
    data() {
        return{
            user: {}
        }
    },

    created() {
       onAuthStateChanged(firebaseAuth, (user) => {
           if (user) {
               console.log("user",user.uid)
            //    this.user = user
               const docRef = doc(firebaseDb, "users", user.uid);
               console.log("docref", docRef)
                  getDoc(docRef).then(doc => {
                      console.log("doc", doc.data())
                      this.user = doc.data()
                  })
           }
           else {
               console.log("Nope")
           }
       }) 
    }
    
}
</script>
