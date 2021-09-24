import { UserContext } from "../App";
import { useContext } from "react";
import blur from "../assests/bokeh-581820_1280.jpg"
import "./users.css"
import { Link } from "react-router-dom";
import axios from "axios";



function DisplayUsers({data})
{   
    const list=useContext(UserContext)

    const deleteUser=async()=>
    {
        await axios.delete(`https://611f26309771bf001785c71e.mockapi.io/crud/${data.id}`)
        list.getUser()
    }
   
    return(
        <>
     
        <div className="outercontainer">
        <div className="innercontainer">
            <div className="card">
                <div className="cardHeader">
                    <img  className="cardImage" src={blur} alt="blur" />
                </div>
                <div className="cardBody">
                    <div className="bodyImage">
                        <div><img className="userImage" src={data.avatar} alt="profile"/></div>
                        <div><h3 className="imageName">{data.username}</h3></div>
                        <div><Link to={`/profile/${data.id}`}><button className="imageButton">View Profile</button></Link></div>
                    </div>
                    <div className="bodyDetails">
                        <div><h3>{data.job}</h3></div>
                        <div><h4>{data.company}</h4></div>
                        <div><p>{data.email}</p></div>
                    </div>
                    <div className="bodyButtons">
                        <div><Link to={`/edit-user/${data.id}`}><button className="imageButton">Edit </button></Link></div>
                       <div><button className="imageButton" onClick={deleteUser}>Delete </button></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}


export default function User()
{
const userList=useContext(UserContext)
return(
    <>
    {console.log(userList.user)}

    {userList.user.map(a=>{
        return (<DisplayUsers data={a}/>)
    })}
    
    </>
)
}