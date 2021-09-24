/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { UserContext } from "../App";
import { useHistory } from "react-router-dom";


export default function EditUser()
{
    const param=useParams().id;
    const history=useHistory();
    const userList=useContext(UserContext)
    const [user,setUser]=useState({username:"",
                                    email:"",
                                    job:"",
                                    company:""})
   
    const getUser=async()=>{
        const response=await (await axios.get(`https://611f26309771bf001785c71e.mockapi.io/crud/${param}`)).data
        console.log("in",response.username)
        setUser({...user,username:response.username,
        email:response.email,
        job:response.job,
        company:response.company
        })

    }
    useEffect(()=>{
        getUser();
    },[])

    const sendUser=async()=>
    {
       try{
        let response= await axios.put(`https://611f26309771bf001785c71e.mockapi.io/crud/${param}`,{           
                username:user.username,
                email:user.email,
                job:user.job,
                company:user.company
            });
            console.log(response)
        }
        catch(error)
        {
            console.log(console.error)
        }
            
            userList.getUser()
            history.goBack();

    }

    const handleChange=({target:{name,value}})=>
    {
        
        switch(name)
        {
            case "username":{
                setUser({...user,username:value})
                break 
            }
            case "email":{
                setUser({...user,email:value})
                break 
            }
            case "job":{
                setUser({...user,job:value})
                break 
            }
            case "company":{
                setUser({...user,company:value})
                break ;
            }
             default:{}
        }
    }

   const handleSubmit=(event)=>
    {   
        event.preventDefault();
        console.log(event)
        sendUser();
    }

    return(
        <>
        in edit profile
        <div className="outercontainer">
            <div className="innerContainer">
                <h2>Edit Profile</h2>
                <form >
                    <div>
                    <label>Username</label>
                    <input type="text" name="username" value={user.username} onChange={(event)=>{handleChange(event)}}/>
                    </div>
                    <br/>
                    <div>
                    <label>Email </label>
                    <input type="text" name="email" value={user.email} onChange={(event)=>{handleChange(event)}}/>
                    </div>
                    <br/>
                    <div>
                    <label>Job Title </label>
                    <input type="text" name="job" value={user.job} onChange={(event)=>{handleChange(event)}}/>
                    </div>
                    <br/>
                    <div>
                    <label>Company </label>
                    <input type="text" name="company" value={user.company} onChange={(event)=>{handleChange(event)}}/>
                    </div>
                    <br/>
                    <button type="submit" className="imageButton" onClick={(event)=>handleSubmit(event)}>Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}