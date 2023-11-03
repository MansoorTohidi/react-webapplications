import { NavLink } from "react-router-dom"
import "./navbar.css"

const Navbar=(props)=>{
return(
    <>
    <div className={props.classCustom}>
    <NavLink  to="/calculator" className="calHome" >Calculator</NavLink>
    <NavLink to="/shopping" className="shoHome">Shopping</NavLink>
    <NavLink to="/weather" className="weaHome">Weather</NavLink>
    </div>
    </>
)
}
export default Navbar