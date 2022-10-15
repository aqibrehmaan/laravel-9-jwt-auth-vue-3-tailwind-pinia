<template>
    <div class="container max-w-6xl mx-auto flex justify-between items-center">
        <h3>Jwt Auth Vue 3 & Laravel</h3>
        <div v-if="!auth.isLoggedIn">
            <router-link to="/login">Login</router-link>
            <router-link to="/register">Register</router-link>
        </div> 
        <div v-else>
            <router-link to="/logout">Logout</router-link>
        </div>
    </div>
</template>

<script setup>
    import { useAuthStore } from '../stores/auth';
    import useUser from '../composables/user';

    const { loggedIn } = useUser();
    const authStore = useAuthStore();

    if(loggedIn()) {
        authStore.setLoggedIn();    
    } else {
        authStore.removeLoggedIn();
    }

    const auth = useAuthStore();
    
</script>