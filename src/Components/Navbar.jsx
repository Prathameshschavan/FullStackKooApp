import "./Navbar.css"
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Language from "./Language";
import Signin from "./Signin";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineBorderlessTable } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import UserProfile from "./UserProfile";
import Login from "./Login";
import { useEffect, useState } from "react";
import axios from "axios";


function Navbar() {
  const [value, setValue] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("userToken"));
  const [trigger, press] = useState(0);
  
  var aStyle = {
    color: "#888",
    // margin: "9%",
    fontSize:" 19px",
    textDecoration: "none",
   
     
  };
  var style3={
    backgroundColor: "white !important",
    display:"flex",
    alignItems: "center",
    gap:"5px"
  }
 var style2={
     fontSize: "18px",
     display:"grid",
     width:"55%",
     position: "sticky",
      top: "12%",
     padding: "5% 5% 0% 5%",
     marginLeft:"40%",
     textAlign: "left" ,
    //  border:"2px solid red"
 }
 var imagestyle={
  width: "30%",
  margin: "auto 3rem",
  // border:"2px solid red"
 }
 
 

 async function getLoggedInUser(){
   try{let data = await axios.post("https://clear-jeans-slug.cyclic.app/api/verify",{token});
  //  console.log(data);
   setValue(data);}
   catch(e){
    console.log(e);
   }
 }

 useEffect(()=>{
  getLoggedInUser();
  
},[])
 
// console.log(value);
  return (
    <div style={style2}>
       <Link to="/"><img src="https://www.kooapp.com/_next/static/media/logoKuSolidOutline.1f4fa971.svg" style={imagestyle} alt="" /></Link>
       <br /> 
       <div id="navitems">
          <Button  style={style3}><AiOutlineHome/> Feed</Button>{' '}
          {value ?<UserProfile value={value.data}/> :<></>}
          <Button  style={style3}><AiOutlineBorderlessTable/> Explore</Button>{' '}
          <Language/>
          <Button style={style3}><AiOutlineSearch/>  Search </Button>{' '}
       </div>
       
      <Button className="newbtn"> <Link className="COLOR" to="/Koo">+ Koo</Link></Button>
      <br /> <br />  
      {
      token ?   <></>:
      <div id="method"><Signin/> <Login press={press} /></div>
      }
    </div>
  );
}
export default Navbar;