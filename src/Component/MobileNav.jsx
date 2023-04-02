import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Signin from '../Components/Signin';
import Login from '../Components/Login';
import {Link} from "react-router-dom"
import axios from 'axios';
import { Button } from 'react-bootstrap';


const MobileNav = () => {
  const [token, setToken] = useState(localStorage.getItem("userToken"));
  const [value, setValue] = useState(null);



    let arr = [{name:"Feed", path:"/Feed"},
    {name:"People", path:"/people"},
    {name:"New", path:"/Feed"},
    {name:"Polls", path:"/Feed"},
    {name:"Videos", path:"/videos"},
    {name:"Cricket", path:"/Feed"},
    {name:"Following", path:"/Feed"},
    {name:"Popular", path:"/Feed"},
]

async function getLoggedInUser(){
  try{let data = await axios.post("https://clear-jeans-slug.cyclic.app/api/verify",{token});
 //  console.log(data);
  setValue(data.data.user);}
  catch(e){
   console.log(e);
  }
}

function handleLogout(){
  if(window.confirm("Are you sure want to logout?")){
    localStorage.removeItem("userToken");
    window.location.reload();
  }
}

useEffect(()=>{
 getLoggedInUser();
 
},[])

// console.log(value)


  return (
    <>
    <Navbar variant="light" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand style={{display:"flex", width:"50%", gap:"5%"}}> <img style={{width:"10%"}} src="https://www.kooapp.com/_next/static/media/logoKuSolidOutline.1f4fa971.svg" alt="" /> KooApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-light-example" />
        <Navbar.Collapse id="navbar-light-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Account"
              menuVariant='light'
            >
             
           {value?<div style={{display:"flex", justifyContent:"center"}}><h6>{value.name}</h6></div>:<div style={{display:"flex", justifyContent:"center"}}> <Signin /></div>}   
              <NavDropdown.Divider />
              {value?<div style={{display:"flex", justifyContent:"center"}}><Button onClick={handleLogout}>LogOut</Button></div>:<div style={{display:"flex", justifyContent:"center"}}> <Login /></div>} 
            </NavDropdown>
            
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Category"
              menuVariant='light'
            >
                {arr.map((elem,idx)=>{
                    return(
                        <>
                        <NavDropdown.Item style={{textAlign:"center"}}><Link style={{textDecoration:"none", color:"black"}} to={elem.path}>{elem.name}</Link></NavDropdown.Item>
                        {idx==arr.length-1?<></>:<NavDropdown.Divider />}
                        </>
                    )
                })}

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </>
  )
}

export default MobileNav;
