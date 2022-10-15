export default function useToken() 
{

    function decode(payload){
        return JSON.parse(atob(payload))
    }

    function payload(token){
        const payload = token.split('.')[1]
        return decode(payload)
    }
    
    function isValid(token){
        const pl = payload(token);
        if (pl) {
          return pl.iss = "http://127.0.0.1:8000/api/auth/login" || "http://127.0.0.1:8000/api/auth/register" ? true : false;
        }
        return false;
    }

    return {
        isValid,
        payload,
        decode
    }
}