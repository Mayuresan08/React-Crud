/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import NavHead from './Pages/nav';
import "./App.css"
import axios from "axios";
import { BrowserRouter,Route,Link,Switch,Redirect ,useLocation} from "react-router-dom";
import User from "./Pages/users";
import Profile from "./Pages/profile";
import EditProfile from "./Pages/editProfile";
import EditUser from "./Pages/editUser";
import AddUser from "./Pages/addUser";
export  const UserContext = React.createContext([])

function App() {

  const [users,setUsers]=React.useState([])
  const path=useLocation().pathname
  console.log(path)
const getUserList=async()=>{
let response=await axios.get("https://611f26309771bf001785c71e.mockapi.io/crud")
console.log(response.data)
setUsers(response.data)
}

 useEffect(()=>
 {
   getUserList()
 },[])



  return (
    <>
  
    {/* <BrowserRouter> */}
    <div  >
      <UserContext.Provider value={
        {user:users,
        getUser:getUserList}
      }>
        {/* {(path === "/users")?<NavHead/>:<></>} */}
        <NavHead/>
      <Switch>
        <Route exact  path="/" render={()=>{return <Redirect to="/users"/>}} />
        <Route path="/users" component={User}/>
        <Route  exact path="/profile/:id" component={Profile}></Route>
        <Route  exact path="/profile/:id/edit" component={EditProfile}></Route>
        <Route exact path="/create-user" component={AddUser}/>
        <Route exact path="/edit-user/:id" component={EditUser}/>

      </Switch>
      </UserContext.Provider>
    </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
