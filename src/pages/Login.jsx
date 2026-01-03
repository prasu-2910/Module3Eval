 import AuthContext from "./context/AuthContext"
  function Login(){

    return(
<>
<div><input type="text" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

<input type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
</div>
</>
    )

}
export default Login;