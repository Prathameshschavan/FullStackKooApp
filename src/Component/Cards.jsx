import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import "./Cards.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import action from "../Redux/Action";
import axios from "axios"
import { Flex, Heading } from "@chakra-ui/react";


function Cards({ item }) {

   const [token, setToken]=useState(localStorage.getItem("userToken"))
   const [authId, setAuthId]=useState("")
  let dispatch = useDispatch();

  let loginStatus = localStorage.getItem("userToken");

  async function handleClick() {
    if(loginStatus){
      try {
        let data = await axios.patch(`https://clear-jeans-slug.cyclic.app/api/posts/${item._id}`,{userId:authId._id});
        console.log(data);
        action(dispatch);
      } catch (error) {
        console.log(error)
      }
    }
    else{
      alert("Please Login First")
    }
      
    }

  const [removeIcon, setRemoveIcon] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  useEffect(() => {
    const handler = (e) => setRemoveIcon(e.matches);
    window.matchMedia("(min-width: 768px)").addListener(handler);
    return () => {
      window.matchMedia("(min-width: 768px)").removeListener(handler);
    };
  }, []);
  
  
 
  async function getLoggedInUser() {
    try {
      let data = await axios.post("https://clear-jeans-slug.cyclic.app/api/verify", {
        token,
      });
      setAuthId(data.data.user);
    } catch (e) {
      console.log(e);
    }
  } 


  async function handleDelete(){
      try {
          let data = await axios.delete(`https://clear-jeans-slug.cyclic.app/api/posts/delete/${item._id}`)
          console.log(data);
          action(dispatch);
      
      } catch (error) {
        console.log(error)
      }
  }


  const [show, setShow] = useState(false);
  const [comment, setComment] = useState("");

  async function addComment(){
    let obj = {
      userId:authId._id,
      name:authId.name,
      comment,
    }
    
    if(authId._id&&comment.length>0){
      try {
            let data = await axios.post(`https://clear-jeans-slug.cyclic.app/api/posts/comment/${item._id}`,obj)
            console.log(data);
            action(dispatch);
            setComment("");
      } catch (error) {
          console.log(error)
      }
    }
    else if(!authId._id) {
      alert("Please Login First");
    }
    else if(comment.length<=0){
      alert("Please Enter Comment");
    }
  }

  let newComment= [...item.comments];

  async function deleteComment(comment){
        try {
              let data = await axios.patch(`https://clear-jeans-slug.cyclic.app/api/posts/comment/${item._id}`,{comment})
              console.log(data);
              action(dispatch);
              // setComment(" ");
        } catch (error) {
            console.log(error)
        }
  }

  useEffect(()=>{
    getLoggedInUser();
  },[])

console.log(authId);

  return (
    <Card>
      <Card.Body>
        <div  
          style={{
            display: "flex",
            background: "white",
            gap: "10px",
            alignItems: "center",
            marginBottom: "8px",
            
          }}
        >
          <div style={{ width: "11%" }}>
            <img
              src={
                item.avatar
                  ? item.avatar
                  : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              }
              alt=""
              style={{ width: "100%", height: "100%", borderRadius: "50%",boxShadow:"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" }}
            />
          </div>
          <div style={{display:"flex", justifyContent:"space-between", width:"100%", alignItems:"center"}}>
            <div style={{  display:"flex", flexDirection:"column",justifyContent:"center", width:"67%"}}>
              <div style={{ fontSize: "15px", fontWeight: "bold",display:"flex", alignItems:"center",marginBottom:"-2%" }}>
                <BsFillCheckCircleFill
                  style={{ color: "gold",  marginRight:"3px" }}
                />
                {item.name}
              </div>

              <div
                style={{ fontSize: "12px",fontWeight:"500",color:"gray", textAlign: "left" }}
              >
                @{item.name}
              </div>
            </div>
              {loginStatus&& authId._id && authId._id==item.userId ? <OverlayTrigger
                    trigger="click"
                    key={"bottom"}
                    placement={"bottom"}
                    overlay={
                  <Popover id={`popover-positioned-bottom`}>
                    <Popover.Body>
                    <Button onClick={handleDelete}>Delete</Button>
                    </Popover.Body>
                  </Popover>
                }
              >
                <i style={{ width:"10%", fontSize:"120%", cursor:"pointer" }} class="fa-solid fa-ellipsis-vertical"></i>
              </OverlayTrigger> :<></>}
          </div>
          
        </div>

        <Card.Text
          style={{ textAlign: "initial", fontSize: "18px", fontWeight: "500" }}
        >
          {item.description}
        </Card.Text>

        <p
          style={{
            textAlign: "initial",
            color: "blue",
            fontSize: "16px",
            margin: "-3% 0 2% 0",
          }}
        >
          {item.Tag1} {item.Tag2}
        </p>
    
    
        <img
          src={item.image}
          alt=""
          style={{ width: "106.2%",border:"2px",boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 0px 1px", margin: "2% 0 3% -3.1%" }}
          
        />
        <Flex  gap={"2%"} alignItems={"center"} justifyContent={"center"}>
        <input
          style={{
            width: "100%",
            borderRadius: "10px",
            padding: "1% 1% 1% 7%",
            outline: "none",
            border: "none",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 0px 1px",
            marginBottom: "2%",
          }}
          type="text"
          value={comment}
          placeholder="Write Your Comment"
          onChange={(e)=>setComment(e.target.value)}
        />
        <Button style={{marginTop:"-2%"}} onClick={addComment} ><i class="fa-regular fa-paper-plane"></i></Button>
        </Flex>
        
       { show? <div style={{ borderRadius:"10px", padding:"1%", background:"#F8F7F3", boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px", overflowY:"scroll", maxHeight:"350px"}}>
        {item.comments.length<=0?<h6 style={{marginTop:"2%", color:"gray"}}>Be the first to comment</h6>:newComment.reverse().map((elem, i)=>{
          return(
            <div style={{boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px", padding:"2%", borderRadius:"10px", margin:"2% 2%", background:"#fff"}}>
            <Flex alignItems={"center"}>
              <Flex gap={"2%"}>
                  <img style={{width:"8%", height:"100%"}} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
                  <Flex w={"100%"} justifyContent={"space-between"}>
                    <Flex flexDirection={"column"} w={"100%"}>
                      <Flex  textAlign={"left"} gap={"1%"} alignItems={"center"}>
                        <BsFillCheckCircleFill
                        style={{ color: "gold",fontSize:"60%", marginTop:"-1%" }}
                        />
                        <h4 style={{fontSize:"5px"}}>{elem.name}</h4>
                      </Flex>
                        
                        <p style={{fontSize:"3px",textAlign:"left", fontWeight:"500",color:"gray", marginTop:"-3%"}}>{`@${elem.name}`}</p>

                    </Flex>
                    {authId._id==item.userId || authId._id==elem.userId?<i onClick={()=>{deleteComment(elem.comment)}} style={{cursor:"pointer"}} class="fa-regular fa-trash-can"></i>:<></>}

                  </Flex>
              </Flex>
            </Flex>
              <div style={{ marginTop:"3%"}}>
                    <p style={{textAlign:"left",}}>
                     {elem.comment}
                     </p>
              </div>
         </div>
          )
        })}

        </div> :<></>}
        

        <div id="likeComment">
            <div
              onClick={() => {
                handleClick();
              }}

              style={{cursor:"pointer", width:"15%"}}
            >
              <i id={item._id} style={item.likes.includes(authId._id)?{color:"red"}:{color:"black"}} class="fa-solid fa-thumbs-up"></i>
              <h6 style={{margin:"2% 0 0 0"}}>{item.likes.length}</h6>
            </div>
            <div  onClick={()=>setShow(!show)}   style={{cursor:"pointer"}}>
              <i class="fa-regular fa-comment"></i>
              <h6 style={{margin:"2% 0 0 0"}}>{item.comments.length}</h6>
            </div>
            <div    style={{cursor:"pointer"}}>
              <i class="fa-solid fa-retweet"></i>
            </div>
            <div    style={{cursor:"pointer"}}>
              <i class="fa-brands fa-whatsapp"></i>
            </div>
            <div    style={{cursor:"pointer"}}>
              <i class="fa-solid fa-share"></i>
            </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cards;
