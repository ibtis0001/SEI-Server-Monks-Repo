import axios  from "axios"
// Build connection function between frontend and backend
// Register

export const register = (newuser)=>{
    return axios.post('/users/register' ,newuser )
    .then(res => console.log("registerd ! "))
    .catch(err => console.log(err))
}
// login 
export const login = (user)=>{
    return axios.post('/users/login' , user)
    .then(token =>{
            console.log(token)
            if(token.data.token){
                localStorage.setItem('usertoken' , token.data.token) // localStorage in the browser
                return true
            }else if(token.data.error){
                return false
            }
       
        
    })
    .catch(err=>{
        console.log(err)
        return err
    }
        )
}
export const logout = (user)=>{
    return axios.post('/users/logout' , user)
    .then(token =>{
            console.log(token)
        localStorage.removeItem('usertoken') // localStorage in the browser
        
        
    })
    .catch(err=>console.log(err))
}