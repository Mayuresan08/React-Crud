/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router";
import React, { useState } from "react";
import axios from "axios";
import "./profile.css"
import {Link} from "react-router-dom"
export default function Profile()
{   
    const[data,setData]=useState({initial:"loading"})
    const getProfileData=async()=>
    {
         const response=await axios.get(`https://611f26309771bf001785c71e.mockapi.io/crud/${param}`)
         console.log(response.data)
         setData(response.data)
    }
    
    React.useEffect(()=>{
        getProfileData()
    },[])
    const param=useParams().id
    return(
        <>
        {data.initial}
        <div className="container1">
            <div className="card1">
                <div className="header1">
                    <div className="headerImage1">
                        <div className="image"><img src={data.avatar} alt="profile" /></div>
                        <div ><p>{data.username}</p></div>
                    </div>
                    <div className="headerButton1">
                       <Link to={`/profile/${data.id}/edit`}> <button className="btn1">Edit Profile</button></Link>
                    </div>
                </div>
                <div className="cardBody1">
                    <div className="cardBody2">
                      <div>  <h4>First Name: {data.firstName}</h4><hr/></div>
                      <div> <h4>Last Name: {data.lastName}</h4><hr/></div>
                      <div>   <h4>Address: {data.address}</h4><hr/></div>
                      <div>  <h4>Country: {data.country}</h4></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}