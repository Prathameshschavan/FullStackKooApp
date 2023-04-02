import { FiBell,FiLogOut } from "react-icons/fi";
import {FaUserCircle} from "react-icons/fa";
// import Notification from "./Notification";
import { useState,useEffect } from "react";
import Button from 'react-bootstrap/Button';
import axios from "axios";

const UserProfile = ({value}) => {
//  console.log(value)
 

  function handleLogout(){
    if(window.confirm("Are you sure want to logout?")){
      localStorage.removeItem("userToken");
      window.location.reload();
    }
  }

// console.log(value);
  return (
    <div>
     <Button><FaUserCircle /> {value.user.name}  </Button>
    
    <Button style={{border:" none",color: "rgb(136, 136, 136)",fontSize: "19px",
         textDecoration: "none",backgroundColor: "white", margin:"15px 0 0 5px", padding:"4%"}} >
      {/* <div style={{display:"flex", alignItems:"center", gap:"5px", margin:"15px 0 20px 7px"}}> */}
      <FiBell/> Notification
      {/* </div> */}
    </Button>
   
        <Button onClick={handleLogout} style={{border:" none",color: "rgb(136, 136, 136)",fontSize: "19px",
         textDecoration: "none",backgroundColor: "white", margin:"15px 0 0 5px",padding:"4%"}}><FiLogOut /> Logout</Button>
       
    </div>
  );
};

export default UserProfile
