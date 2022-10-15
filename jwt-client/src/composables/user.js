
import useAppStorage from './app-storage.js'
import useToken from './token.js';

export default function useUser() {

    const { isValid, payload } = useToken();
    const { store } = useAppStorage();

    function responseAfterLogin(res){
        const access_token = res.data.access_token
        const username = res.data.name
        if (isValid(access_token)) {
           store(access_token,username)
        }
    }
    
    function hasToken(){
         const storeToken = localStorage.getItem('token');
         if (storeToken) {
             return isValid(storeToken)? true : false
         }
         return false;
    }
   
    function loggedIn(){
         return hasToken();
    }
   
    function name(){
         if (loggedIn()) {
             return localStorage.getItem('user');
         }
     }
   
   
    function id(){
             if (loggedIn()) {
                 const pl = payload(localStorage.getItem('token'));
                 return pl.sub
             }
             return false
    }
   
    return {
        responseAfterLogin,
        hasToken,
        loggedIn,
        name,
        id
    }
    
}