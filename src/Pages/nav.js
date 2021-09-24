import "./nav.css"
import { FaUserCheck } from 'react-icons/fa';
import {Link} from "react-router-dom"
export default function NavHead()
{

return(
    <>
    <div className="navContainer">
    <div><h1><FaUserCheck/></h1></div>
    <div className="Home" ><Link to="/users"><h4>Home</h4></Link></div>
    <div className="addUser" ><Link to="/create-user"><h4>Add User</h4></Link></div>
    </div>
    </>
)
}