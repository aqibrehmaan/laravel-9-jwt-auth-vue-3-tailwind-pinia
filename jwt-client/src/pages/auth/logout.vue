
<template>

</template>

<script setup>
    import { useRouter } from 'vue-router';
    import { useAuthStore } from '../../stores/auth';

    const router = useRouter();
    const auth = useAuthStore();

    localStorage.removeItem('token');
    localStorage.removeItem('user');
    auth.removeLoggedIn();
    router.push({ name: 'welcome'});

</script>
