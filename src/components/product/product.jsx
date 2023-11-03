import { useContext } from "react";
// import "./product.css"
import { shopContext } from "../../App";



const Product = ({id,title,price}) => {
const {item,addItem,deleteItem}=useContext(shopContext)
const isItem=item.some((i)=>i.id===id)
    return (
      <div className="card">
        <img src="" alt="" />
        <div className="titleCart">{title}</div>
        <div className="price">price: {price}$</div>
        {isItem===false?
        <div className="buttons">
        <div className="addBtn" onClick={()=>{addItem(id,price)}} >+</div>
        </div>
       :
        <div className="buttons">
        <div className="addBtn" onClick={()=>{addItem(id,price)}} >+</div>
        <div className="count">{item?.filter((i)=>i.id===id)[0]?.count}</div>
        {isItem && <div className="subBtn" onClick={()=>{deleteItem(id,price)}}>-</div>}
        </div>
        }
      </div>
      
      );
}
 
export default Product;
