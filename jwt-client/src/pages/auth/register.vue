<template>
      <div class="mt-10 sm:mt-0 container max-w-2xl mx-auto">
      <div class="mt-5">
        <h3>Register</h3>
        <form @submit.prevent="register">
          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="bg-white px-4 py-5 sm:p-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" name="name" id="name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                  py-2 border-2
                  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" v-model="form.name" />
                </div>
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
                <div>
                  <label for="confirm_password" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                  <input type="password" name="confirm_password" id="confirm_password" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm 
                  py-2 border-2
                  focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" v-model="form.password_confirmation" />
                </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Register</button>
            </div>
          </div>
        </form>
      </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import useUser from '../../composables/user';
import { useRouter } from 'vue-router';
import { reactive } from 'vue';

const { loggedIn, responseAfterLogin } = useUser();
const router = useRouter();

const form = reactive({ 
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
});

const errors = reactive({});

if (loggedIn()) {
   router.push({ name: 'dashboard' })
}

function register() {
    axios.post('/api/auth/register',form)
      .then(res => {
        responseAfterLogin(res);
         router.push({ name: 'dashboard'})
      })

       .catch((error) => {
        console.log(error);
       });
}


</script>