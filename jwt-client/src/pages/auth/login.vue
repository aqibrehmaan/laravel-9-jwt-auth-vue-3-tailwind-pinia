<template>
      <div class="mt-10 sm:mt-0 container max-w-2xl mx-auto">
      <div class="mt-5">
        <h3>Login</h3>
        <form @submit.prevent="login">
          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="bg-white px-4 py-5 sm:p-6">
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" name="email" id="email" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                  py-2 border-2
                  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" v-model="form.email" />
                </div>
                <div>
                  <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                  <input type="password" name="password" id="password" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                  py-2 border-2
                  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" v-model="form.password" />
                </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Login</button>
            </div>
          </div>
        </form>
      </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import useUser from '../../composables/user';
import { useRouter } from 'vue-router';

const { loggedIn, responseAfterLogin } = useUser();
const router = useRouter();

if (loggedIn()) {
   router.push({ name: 'dashboard' })
}

const form = reactive({ 
    email: "",
    password: ""
});

const errors = reactive({});

function login(){
      axios.post('/api/auth/login', form)
      .then(res => {
        responseAfterLogin(res)
        router.push({ name: 'dashboard'});
      })

       .catch(error => errors = error.response.data.errors);
    }

</script>