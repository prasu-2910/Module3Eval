 import { useState } from "react";
import AuthContext from "./context/AuthContext"
import { useNavigate } from "react-router-dom";

  function Login(){
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const setIsauth=useContext(AuthContext)
    const Navigate=useNavigate()
const handleLogin=()=>{
        if(email===admin@gmail.com && password=== admin1234){
            alert("admin login successfull")
     return Navigate("/admin/dashboard")
        }
        if(email===customer@gmail.com && password=== customer1234){
            alert("admin login successfull")
            return Navigate("/customers/dashboard")
        
      

        }
        

    
    
}

    return(
<>
<div><form>
    <h2>LOGIN</h2><input type="text" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

<input type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
<button onClick={handleLogin}>Login</button></form>
</div>
</>
    )

}
export default Login;