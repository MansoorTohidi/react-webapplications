import { useState } from "react"
import "./calculator.css"
import Navbar from "../navbar/navbar"
const Calculator = () => {
    const buttons=["7","8","9","/","4","5","6","*","1","2",
    "3","-","0",".","=","+","AC","C"]
    const [display,setDisplay]=useState([0])
    const [equal,setEqual]=useState(false)
  
    
    function handleDisplay(i){
      if((i==="/" || i==="*") && display.length==1 && display[0]===0){
        setDisplay([0])
      } 

    
      else if(i!=="=" && i!=="C" && i!=="AC"){
        if(display[0]===0){
        const copyDisplay=[...display]
        copyDisplay.shift()
        console.log(copyDisplay)
        setDisplay(copyDisplay)
        setDisplay([i])
        
      } 
        else{
        setDisplay([[...display],i])
        setEqual(false)} 
    }
      
      else if(i==="AC"){
      setDisplay([0])
      }
      
      else if(i==="C"&&display.length>1){

        setEqual(false)
        const copyDisplay=[...display]
        const copyDisplay1=copyDisplay.toString()
        const copyDisplay2=copyDisplay1.split(',')
        copyDisplay2.pop()
        setDisplay(copyDisplay2)
        }
      else if(i==="C"&&display.length==1){

          setEqual(false)
          setDisplay([0])
          }  
     
      else{ 
        const copyDisplay=[...display]
        const withoutcomma=copyDisplay.toString().replace(/,/g, '')
        const equal=((eval(withoutcomma)).toString()).split('')
        if(equal==0){
          setDisplay([0])
           setEqual(true)
           setTimeout(()=>{setEqual(false)},400)
        }
        else{
          setDisplay(equal)
          setEqual(true)
          setTimeout(()=>{setEqual(false)},400)
        }
    
    }
    }
    function handleClassNameForBtn(i){
      if (i==="C"){
        return("C")
      }
      else if(i==="AC"){
        return("AC")
      }
      else{
        return("btn")
      }
    }

    const classCustom="forOthers"
    return(
      <>
      <Navbar classCustom={classCustom}/>
        <div className="calculator">

          <div className={equal ? "displayAfterEqual": "display" }>
            {display}
          </div>

          <div className="btns">
            {buttons.map((i)=>{
                return(
                <div key={i+1} onClick={()=>{handleDisplay(i)}} className={handleClassNameForBtn(i)}>{i}</div>)
                })}
          </div>
          
       
        </div>
        </>
    )
}
     

export default Calculator;
