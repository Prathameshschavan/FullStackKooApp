import { FiBell,FiLogOut } from "react-icons/fi";
import {FaUserCircle} from "react-icons/fa";
import Notification from "./Notification";
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
    
    <button style={{border:" none",color: "rgb(136, 136, 136)",fontSize: "19px",
    textDecoration: "none",backgroundColor: "white"}} >
      <div style={{display:"flex", alignItems:"center", gap:"5px", margin:"15px 0 20px 7px"}}>
      <FiBell/><Notification/>
      </div>
    </button>
   
        <button onClick={handleLogout} style={{border:" none",color: "rgb(136, 136, 136)",fontSize: "19px",
         textDecoration: "none",backgroundColor: "white", marginLeft:"10px"}}><FiLogOut /> Logout</button>
       
    </div>
  );
};

export default UserProfile
