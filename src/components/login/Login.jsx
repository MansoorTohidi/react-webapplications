// import { NavLink } from "react-router-dom"
import "./Login.css"
import { useEffect, useState } from "react"
import Navbar from "../navbar/navbar"

const Login=()=>{
    const[loginValue,setLoginValue]=useState()
    const[register,setRegister]=useState()

    useEffect(()=>{

        if(!!JSON.parse(localStorage.getItem("register"))){
 setRegister(JSON.parse(localStorage.getItem("register")))
 setLoginValue((localStorage.getItem("loginValue")))
        }
        
        else{
            setRegister(false)
        }
        
        
    },[])
    useEffect(()=>{
       localStorage.setItem("register",JSON.stringify(register))
    },[register])

    useEffect(()=>{
        localStorage.setItem("loginValue",loginValue)
     },[loginValue])
    const handleRegister=(e)=>{
        e.preventDefault()
        loginValue&&setRegister(true)

        
    }
    const classCustom="forHome"
    const classCustom1="home"
return(
    <>
    {register ? 
    <>
    <div className="title">
    <h2 className="hello"> Hello </h2>
    <h1 className="loginValue"> {loginValue}</h1>       
     </div>       
    <Navbar classCustom={classCustom}  classCustom1={classCustom1}   />
     
    </>
    
    :  
    <form className="formCtn" onSubmit={handleRegister}>
    <input placeholder="type here..."   className="inputValue" value={loginValue} onChange={(e)=>{setLoginValue(e.target.value)}} type="text" />
    <button className="btnRg">
       Register 
    </button>

    </form>   
    }
    </>
)
}
export default Login