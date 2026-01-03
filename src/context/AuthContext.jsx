import { useState } from "react"


const AuthContext=createContext()
const authProvider=({children})=>{
const[email,setEmail]=useState()
const[password,setPassword]=useState()

return(
    <div>
        
        
    </div>
)
}
export  default AuthContext;