<template>
    <q-layout class="q-pa-md q-mt-md " >
        <q-btn round color="primary" icon="settings">
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section @click="editProfile">Edit Profile</q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="logout">
              <q-item-section>Logout</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
        <h2 class="text-h6 text-center q-mb-none text-weight-medium text-grey-14">Welcome {{user.firstName}} {{user.lastName}} </h2>
        <p class="text-h6 text-center q-mb-none text-weight-medium text-grey-14">Your phone number is {{user.phone}} and email is {{user.email}}</p>
        <img class= "absolute-center " v-if="url" :src="url" alt="" max-width="100px" max-height="100px">
    </q-layout>
</template>

<script>
import {mapActions,useStore} from 'vuex'
import { computed } from 'vue'
export default {

    setup() {
        const $store = useStore()

        const user = computed({
            get:() => $store.state.user.user
        })

        const url = computed({
            get:() =>  $store.state.user.url
        })

        return {
           user,url
        }
    },
    mounted() {
        this.welcomePage()
    },

    unmounted() {
        this.removeUrl()
    },

    methods: {
        ...mapActions('user', ['logoutUser','welcomePage','removeUrl']),
        logout() {
           this.logoutUser()
    },

        editProfile() {
            this.$router.push('/editprofile')
        },

    }
    
}
</script>
