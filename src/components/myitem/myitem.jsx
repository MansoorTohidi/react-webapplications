

import { NavLink } from "react-router-dom";

import Product from "../product/product";
import "./myitem.css"
import { useContext } from "react";
import { shopContext } from "../../App";
import { Products } from "../products/products";


const Myitem = () => {
  const {item,allCounts,allPrices}=useContext(shopContext)
  const handleClassName=()=>{
    if(item.length>3){
      console.log("cards")
      return("cards")
      
    }
    else{
      console.log("twocards")
      return("twocards")
    }
  }
    return(
        <>
          <div className="totalAmounts">
        <div className="totalItems">total items:   {allCounts} </div>
        <div className="totalPrices" >total price:  {allPrices} $</div>
        </div>
        <div className="backToShop">
        <NavLink className="navLink" to="/shopping">back to shop</NavLink>
        </div>

        <div className={handleClassName()}>
        {Products.map((p)=>{
          if(item.some((i)=>i.id===p.id)){
           return <Product key={p.id} id={p.id} title={p.title} price={p.price}/>
          }
        })}
       
        </div >

      
        </>
        
      )
}
 
export default Myitem;
