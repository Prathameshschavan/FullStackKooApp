import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import React,{ useState,useEffect } from "react";
import myContext from "./myContext";
import "./Signin.css"
import UserProfile from './UserProfile';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Signin (props) {
  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false);  setLoginDiv(false)};
  const handleShow = () => setShow(true);
  const [loginDiv, setLoginDiv]=useState(false);


  let [name,setName]=useState("");
  let [email,setEmail]=useState("");
  let [gender,setGender]=useState("");
  let [password,setPassword]=useState("");


  function openRegister(){
    setLoginDiv(true);
  }

   async function submitFunc(event){
    event.preventDefault();
    try {
      let data = await axios.post("https://clear-jeans-slug.cyclic.app/api/register",{name, email, gender, password});
      toast.success("User Resgistered Successfully!")
      setShow(false);
    } catch (error) {
      toast.error("User Already Exist!")
    }
  }
   



  return (
    <>
    <ToastContainer />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
               {loginDiv ? "Fill In The Details" :"Choose SignIn Method"}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loginDiv ? <>
            <Form onSubmit={submitFunc}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ width:"50%", display:"flex", alignItems:"center"}}>
                <img style={{width:"8%", marginRight:"5%"}} src="https://cdn-icons-png.flaticon.com/512/2544/2544085.png" alt="" />
                  Name
                </Form.Label>
                <Form.Control onChange={(e)=>{setName(e.target.value)}} required type="name" placeholder="Enter name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ width:"50%", display:"flex", alignItems:"center"}}>
                <img style={{width:"8%", marginRight:"5%"}} src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="" />
                  Email address
                </Form.Label>
                <Form.Control  onChange={(e)=>{setEmail(e.target.value)}}  required type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ width:"50%", display:"flex", alignItems:"center"}}>
                <img style={{width:"8%", marginRight:"5%"}} src="https://cdn-icons-png.flaticon.com/512/2517/2517445.png" alt="" />
                  Gender
                </Form.Label>
                <Form.Select  onChange={(e)=>{setGender(e.target.value)}}  required aria-label="Default select example">
                  <option>Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{ width:"50%", display:"flex", alignItems:"center"}}>
                <img style={{width:"8%", marginRight:"5%"}} src="https://cdn-icons-png.flaticon.com/512/807/807241.png" alt="" />
                  Password
                </Form.Label>
                <Form.Control  onChange={(e)=>{setPassword(e.target.value)}}  required type="password" placeholder="Password" />
              </Form.Group>
            
              <Button  variant="outline-success" type="submit">
                Submit
              </Button>

            </Form>
          
          </>:<>
          <Button onClick={openRegister} style={{display:"flex", border:"2px solid red", color:"red", gap:"20%", alignItems:"center"}}>
          <img style={{width:"5%", marginLeft:"10%"}} src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="" />
            Sign-up with E-mail</Button>
          <br />
          <Button style={{display:"flex", border:"2px solid red", color:"red", gap:"20%", alignItems:"center"}}>
          <img style={{width:"5%", marginLeft:"10%"}} src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="" />
            Sign-up with Google </Button>
          <br />
          <Button style={{display:"flex", border:"2px solid red", color:"red", gap:"20%", alignItems:"center"}}>
          <img style={{width:"5%", marginLeft:"10%"}} src="https://cdn-icons-png.flaticon.com/512/2504/2504911.png" alt="" />
            Sign-up with Github</Button>
          <br />
          </>
          }
          
        </Modal.Body>
        <Modal.Footer>
        <div className='footerDiv'>
        <input type="checkbox" />
        <label>
          I agree to receive important updates via Whatsapp
          <img src="https://cdn-icons-png.flaticon.com/512/3670/3670133.png" style={{width:"4%"}} alt="" />
          </label>
        </div>  
         <p  style={{ margin:"auto"}}>By continuing, I accept Terms of Service, Privacy Policy and Community Guidelines.</p> 
        </Modal.Footer>
      </Modal>

     <Button className='signBtn' variant='outline' onClick={handleShow}>SignIn</Button>
    </>
  );
}

export default Signin;




  