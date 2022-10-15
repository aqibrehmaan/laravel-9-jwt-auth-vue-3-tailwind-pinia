<template>
    <div>
        Dashboard
    </div>
</template>

<script setup>

    import useUser from '../composables/user';
    import { useRouter } from 'vue-router';

    const { loggedIn } = useUser();
    const router = useRouter();

    if(!loggedIn()) {
        router.push({ name: 'login' });    
    }

</script>