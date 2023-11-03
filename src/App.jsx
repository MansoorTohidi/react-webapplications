
import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom"
// import Navbar from "./components/navbar/navbar"
import Calculator from "./components/calculator/calculator"
import Shopping from "./components/shopping/shopping"
import Myitem from "./components/myitem/myitem"
import { createContext, useEffect, useState } from "react"
import Weather from "./components/weather/Weather"
import Login from "./components/login/Login"

export const shopContext=createContext()


const App=()=>{
    const [item,setItem]=useState([])
    const [allCounts,setAllCounts]=useState(0)
    const [allPrices,setAllPrices]=useState(0)
useEffect(()=>{
    setAllCounts(item.reduce((a,b)=>a + b.count,0))
    setAllPrices(item.reduce((a,b)=>a + (b.price*b.count),0))
},[item])



    const addItem=(iditem,priceitem)=>{
 
    if(!item?.find((i)=>i.id===iditem)){
    setItem([...item,{id:iditem,price:priceitem,count:1}])
    }
 
    else{   
    setItem(
        item.map((i)=>{
         if(i.id===iditem){
            return {...i,count : i.count+1}
         }
         else return i
        })
    )
}

}
const deleteItem=(iditem)=>{

const index=item.findIndex((i)=>{return i.id===iditem})  
console.log(index) 
const copyItem=[...item]
if(copyItem[index].count>0){
copyItem[index].count=copyItem[index].count-1
setItem(copyItem)
}
if(copyItem[index].count===0){
    const filtered=copyItem.filter((i)=>{
        return(
            i.id!==iditem
        )
    })
    setItem(filtered)

    }




}
    return(
       
        <shopContext.Provider value={{item,addItem,deleteItem,allCounts,allPrices}}>
        <BrowserRouter>
        <Routes>
         <Route path="/reactapplications" Component={Login} />    
         <Route path="/calculator" Component={Calculator}  />
         <Route path="/shopping" Component={Shopping} />
         <Route path="/weather" Component={Weather} />
         <Route path="/myitem" Component={Myitem} />
         <Route path="*" element={<Navigate to="/reactapplications" />} />
        </Routes>
        </BrowserRouter>
        </shopContext.Provider>
        
       
    )
}
export default App