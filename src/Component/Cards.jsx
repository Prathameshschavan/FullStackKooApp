import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Badge from 'react-bootstrap/Badge';
import "./Cards.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import action from "../Redux/Action";
import axios from "axios"
function Cards({ item }) {
  // console.log(item);
   const [token, setToken]=useState(localStorage.getItem("userToken"))
   const [authId, setAuthId]=useState("")
  let dispatch = useDispatch();
  const data = useSelector((store) => {
    return store.product;
  });

  let loginStatus = localStorage.getItem("userToken");

  async function handleClick() {
    let colorr = document.getElementById(item._id);
    console.log(colorr.style.color);
   

    if (loginStatus) {
      if (colorr.style.color == "red") {
        let data = await axios.patch(`https://clear-jeans-slug.cyclic.app/api/posts/${item._id}`,{value:-1});
        colorr.style.color = "black";
        console.log(data);
        action(dispatch);
       
      } else if (colorr.style.color == "black" || colorr.style.color == "") {
        let data = await axios.patch(`https://clear-jeans-slug.cyclic.app/api/posts/${item._id}`,{value:1});
        console.log(data);
        colorr.style.color = "red";
        action(dispatch);
      }
    } else {
      alert("First Login to Like");
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
    console.log(data.data.user._id);
      setAuthId(data.data.user._id);
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

  useEffect(()=>{
    getLoggedInUser();
  })

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
          <div style={{ marginTop: "1%" }}>
            <Card.Title style={{ fontSize: "15px", fontWeight: "bold" }}>
              {item.people}{" "}
              <BsFillCheckCircleFill
                style={{ color: "gold", marginBottom: "2px", marginRight:"3px" }}
              />
              {item.name}
            </Card.Title>

            <Card.Subtitle
              className="mb-2 text-muted"
              style={{
                textAlign: "initial",
                fontSize: "10px",
                marginTop: "-8%",
              }}
            >
              @{item.name}
            </Card.Subtitle>
            </div>
              {loginStatus&& authId && authId==item.userId ? <OverlayTrigger
                    trigger="click"
                    key={"bottom"}
                    placement={"bottom"}
                    overlay={
                  <Popover id={`popover-positioned-bottom`}>
                    <Popover.Body style={{}}>
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
          placeholder="Write Your Comment"
        />
        {removeIcon && (
          <i
            style={{
              position: "absolute",
              marginLeft: "-91%",
              marginTop: "3.3%",
              fontSize: "20px",
            }}
            id="style.fa-solid"
            class="fa-solid fa-user fa-lg"
          ></i>
        )}

        <div id="likeComment">
            <div
              onClick={() => {
                handleClick();
              }}

              style={{cursor:"pointer", width:"15%"}}
            >
              <i id={item._id} style={{color:"black"}} class="fa-solid fa-thumbs-up"></i>
              <h6 style={{margin:"2% 0 0 0"}}>{item.likes}</h6>
            </div>
            <div     style={{cursor:"pointer"}}>
              <i class="fa-regular fa-comment"></i>
              {item.comments}
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
