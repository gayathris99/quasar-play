<template>
    <h2  class="text-h3 text-center q-mb-lg text-weight-medium text-blue-4">Edit Profile</h2>
     <q-form>
      <p class="text-h6 text-center q-mb-none text-weight-medium text-grey-14">Hi {{user.firstName}} {{user.lastName}}</p>
      <q-file color="teal" class="q-pa-sm" filled v-model="photo" label="Add Profile Picture">
        <template v-slot:prepend>
          <q-icon name="photo" />
        </template>
      </q-file>
      
      
        <div class=" q-pa-sm row justify-center items-center">
          <q-btn padding="5px 35px" color="white" glossy text-color="black"  label="Edit" @click="editProfile" />
        </div>
        </q-form>
</template>

<script>
import { ref } from 'vue'
import {mapActions,useStore} from 'vuex';
import { computed } from 'vue'

export default {
    setup () {
      const $store = useStore()

        const user = computed({
            get:() => $store.state.user.user
        })
      return {
      photo: ref(null),
      user
    }
  },
   data() {
       return {
           userId: ''
       }
   },
    created() {
        this.userAuthChanged();
    },

    methods: {
        ...mapActions('user',['userAuthChanged','profileEdit']),
        editProfile() {
            this.profileEdit(this.photo)
        }
    },

    
}
</script>
