/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { UserContext } from "../App";
import { useHistory } from "react-router-dom";


export default function EditProfile()
{
    const param=useParams().id;
    const history=useHistory();
    const userList=useContext(UserContext)
    const [user,setUser]=useState({firstName:"",
                                    lastName:"",
                                    address:"",
                                    country:""})
   
    const getUser=async()=>{
        const response=await (await axios.get(`https://611f26309771bf001785c71e.mockapi.io/crud/${param}`)).data
        console.log("in",response.username)
        setUser({...user,firstName:response.firstName,
        lastName:response.lastName,
        address:response.address,
        country:response.country
        })

    }
    useEffect(()=>{
        getUser();
    },[])

    const sendProfile=async()=>
    {
       try{
        let response= await axios.put(`https://611f26309771bf001785c71e.mockapi.io/crud/${param}`,{           
                firstName:user.firstName,
                lastName:user.lastName,
                address:user.address,
                country:user.country
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
            case "firstName":{
                setUser({...user,firstName:value})
                break 
            }
            case "lastName":{
                setUser({...user,lastName:value})
                break 
            }
            case "address":{
                setUser({...user,address:value})
                break 
            }
            case "country":{
                setUser({...user,country:value})
                break ;
            }
             default:{}
        }
    }

   const handleSubmit=(event)=>
    {   
        event.preventDefault();
        console.log(event)
        sendProfile();
    }

    return(
        <>
        in edit profile
        <div className="outercontainer">
            <div className="innerContainer">
                <h2>Edit Profile</h2>
                <form >
                    <div>
                    <label>First Name </label>
                    <input type="text" name="firstName" value={user.firstName} onChange={(event)=>{handleChange(event)}}/>
                    </div>
                    <br/>
                    <div>
                    <label>Last Name </label>
                    <input type="text" name="lastName" value={user.lastName} onChange={(event)=>{handleChange(event)}}/>
                    </div>
                    <br/>
                    <div>
                    <label>Address </label>
                    <input type="text" name="address" value={user.address} onChange={(event)=>{handleChange(event)}}/>
                    </div>
                    <br/>
                    <div>
                    <label>Country </label>
                    <input type="text" name="country" value={user.country} onChange={(event)=>{handleChange(event)}}/>
                    </div>
                    <br/>
                    <button type="submit" className="imageButton" onClick={(event)=>handleSubmit(event)}>Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}