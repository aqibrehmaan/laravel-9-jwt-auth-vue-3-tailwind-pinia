import { useAuthStore } from "../stores/auth";

export default function useAppStorage() {

function storeToken(token){
    localStorage.setItem('token',token);
}

function storeUser(user){
    localStorage.setItem('user',user);
}

function store(token,user){
   storeToken(token);
   storeUser(user);

   const authStore = useAuthStore();
   authStore.setLoggedIn();
 }

 function clear(){
     localStorage.removeItem('token')
     localStorage.removeItem('user')
 }

 function getToken(){
     return localStorage.getItem('token');
 }

 function getUser(){
     return localStorage.getItem('user');
 }

 return {
    store,
    storeToken,
    storeUser,
    clear,
    getToken,
    getUser
 }
}