import {firebaseStorage, firebaseAuth, firebaseDb} from 'src/boot/firebase.js'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { onAuthStateChanged,signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut  } from "firebase/auth";
import { collection, addDoc, setDoc, doc,getDoc } from "firebase/firestore"; 

export function userAuthChanged () {
    onAuthStateChanged(firebaseAuth, (user)=> {
            if (user) {
                this.userId = user.uid
            }
        })
}
export function loginUser({}, loginForm) {
    signInWithEmailAndPassword(firebaseAuth,loginForm.email, loginForm.password)
    .then(response => {
      this.$router.push('/welcome')
    })
    .catch ( error => {
      this.error = true
    })
}

export function signupUser({}, registerForm) {
    createUserWithEmailAndPassword(firebaseAuth,registerForm.email, registerForm.password)
     .then(response => {
       let userID = response.user.uid
       setDoc(doc(firebaseDb, "users", userID), {
         firstName: registerForm.firstName,
         lastName: registerForm.lastName,
         email: registerForm.email,
         phone: registerForm.phone,
         
       });
      
       this.$router.push('/welcome')
      })
     .catch ( error => {
     })
  }

export function logoutUser() {
    signOut(firebaseAuth).then(() => {
        this.$router.push('/')
    }).catch((error) => {

    });
    return "logout"
}
 

export function profileEdit({},payload) {
            let userId = firebaseAuth.currentUser.uid
            const photoRef = ref(firebaseStorage, `profilephoto/${this.userId}`);
            if (payload) {
                uploadBytes(photoRef, payload).then((snapshot) => {
                });
                getDownloadURL(ref(firebaseStorage, `profilephoto/${this.userId}`))
             .then(url => {
                 commit('updateImgUrl',url)
             }).catch(error => {
                 commit('deleteImgUrl', "")
             })
                this.$router.push('/welcome')
            }
            
}

export function welcomePage({commit}) {
    onAuthStateChanged(firebaseAuth, (user) => {
        if (user) {
            getDownloadURL(ref(firebaseStorage, `profilephoto/${user.uid}`))
             .then(url => {
                 commit('updateImgUrl',url)
             }).catch(error => {
                 commit('deleteImgUrl', "")
             })
            const docRef = doc(firebaseDb, "users", user.uid);
            getDoc(docRef).then(doc => {
                   commit('addUserDetails',doc.data())
               })
        }
        else {
        }
    }) 

}

export function removeUrl({commit}) {
    commit('deleteImgUrl',"")
}
