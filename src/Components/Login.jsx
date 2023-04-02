import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "./Signin.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {useNavigate} from "react-router-dom";


const Login = ({press}) => {
  // console.log(press)
  // const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(event){
     event.preventDefault();
     try {
        let data = await axios.post("https://clear-jeans-slug.cyclic.app/api/login",{email,password});
        localStorage.setItem("userToken", data.data.user.token)
        toast.success("User Login Successfully!")
        window.location.reload();
     } catch (error) {
        toast.error("UserName Or Password Is Wrong!")
     }
  }

  return (
      <div>
        {/* <ToastContainer style={{zIndex:"9999"}}/> */}
        <Modal show={show} onHide={handleClose} dialogClassName="modal-50w">
          <Modal.Header closeButton>
            <Modal.Title>Fill Login Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ width:"50%", display:"flex", alignItems:"center"}}>
                <img style={{width:"8%", marginRight:"5%"}} src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="" />
                Email address</Form.Label>
              <Form.Control required onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{ width:"50%", display:"flex", alignItems:"center"}}>
              <img style={{width:"8%", marginRight:"5%"}} src="https://cdn-icons-png.flaticon.com/512/807/807241.png" alt="" />
                Password</Form.Label>
              <Form.Control required  onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" />
            </Form.Group>
          
            <Button variant="outline-success" onClick={handleClose} type="submit">
              Submit
            </Button>
          </Form>
          </Modal.Body>
          <Modal.Footer>
        <div className='footerDiv'>
        <input type="checkbox" />
        <label>
          I agree to receive important updates via Whatsapp
          <img src="https://cdn-icons-png.flaticon.com/512/3670/3670133.png" style={{width:"4%"}} alt="" />
          </label>
        </div>  
         <p  style={{ textAlign:"center"}}>By continuing, I accept Terms of Service, Privacy Policy and Community Guidelines.</p> 
        </Modal.Footer>
          
        </Modal>
        <Button className="signBtn"  onClick={handleShow}>Login</Button>
      </div>
  )
};

export default Login;
