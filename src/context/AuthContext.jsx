import { useState } from "react"


const AuthContext=createContext()
const authProvider=({children})=>{
    const[isAuth,setIsauth]=useState()


return(
    <div>
<authProvider value={setIsauth}>
    {{children}}
    </authProvider>
        
    </div>
)
}
export  default AuthContext;