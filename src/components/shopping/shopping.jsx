import { Products } from '../products/products'
import Product from "../product/product"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from "react";
import { shopContext } from "../../App";

import {Link} from "react-router-dom"
import "../product/product.css"
import Navbar from '../navbar/navbar'

const Shopping = () => {
  const {item,allCounts}=useContext(shopContext)
  const classCustom="forOthers"

  const handleBasket=()=>{
    if(allCounts>0){
      return(
         <Link to="/myitem" className="basket">
               <FontAwesomeIcon icon={faCartShopping}/>
               <div className="allcounts">{allCounts}</div>
            </Link>  
      )
    }

    else{
      return(
      <div  className="basket">
      <FontAwesomeIcon icon={faCartShopping}/>
      </div> 
       )
    }
  }
  
   return (
        <>
        <Navbar classCustom={classCustom}/>
        <>
        <nav className="header">
            <div className='logo'>SHOP</div>
            {handleBasket()}
           
        </nav>

        <h1 className='shopName'>Enjoy!</h1>
        <div className="cards">
        {Products.map((item)=>{return(<Product key={item.id} id={item.id} title={item.title} price={item.price} />)})}
        </div>
        </>
        </>
      )
    }
   
export default Shopping;

