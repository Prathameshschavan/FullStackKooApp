import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import "./Cards.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import action from "../Redux/Action";
import axios from "axios";
import { Assets } from "./Assets";
import CommentModal from "./CommentModal";

function Post({ item }) {
  // const [token, setToken] = useState(localStorage.getItem("userToken"));
  // const [authId, setAuthId] = useState("");
  // let dispatch = useDispatch();

  // let loginStatus = localStorage.getItem("userToken");

  // async function handleClick() {
  //   if (loginStatus) {
  //     try {
  //       let data = await axios.patch(
  //         `https://clear-jeans-slug.cyclic.app/api/posts/${item._id}`,
  //         { userId: authId._id }
  //       );
  //       console.log(data);
  //       action(dispatch);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   } else {
  //     alert("Please Login First");
  //   }
  // }

  // const [removeIcon, setRemoveIcon] = useState(
  //   window.matchMedia("(min-width: 768px)").matches
  // );
  // useEffect(() => {
  //   const handler = (e) => setRemoveIcon(e.matches);
  //   window.matchMedia("(min-width: 768px)").addListener(handler);
  //   return () => {
  //     window.matchMedia("(min-width: 768px)").removeListener(handler);
  //   };
  // }, []);

  // async function getLoggedInUser() {
  //   try {
  //     let data = await axios.post(
  //       "https://clear-jeans-slug.cyclic.app/api/verify",
  //       {
  //         token,
  //       }
  //     );
  //     setAuthId(data.data.user);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  // async function handleDelete() {
  //   try {
  //     let data = await axios.delete(
  //       `https://clear-jeans-slug.cyclic.app/api/posts/delete/${item._id}`
  //     );
  //     console.log(data);
  //     action(dispatch);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const [show, setShow] = useState(false);
  // const [comment, setComment] = useState("");

  // async function addComment() {
  //   let obj = {
  //     userId: authId._id,
  //     name: authId.name,
  //     comment,
  //   };

  //   if (authId._id && comment.length > 0) {
  //     try {
  //       let data = await axios.post(
  //         `https://clear-jeans-slug.cyclic.app/api/posts/comment/${item._id}`,
  //         obj
  //       );
  //       console.log(data);
  //       action(dispatch);
  //       setComment("");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   } else if (!authId._id) {
  //     alert("Please Login First");
  //   } else if (comment.length <= 0) {
  //     alert("Please Enter Comment");
  //   }
  // }

  // let newComment = [...item.comments];

  // async function deleteComment(comment) {
  //   try {
  //     let data = await axios.patch(
  //       `https://clear-jeans-slug.cyclic.app/api/posts/comment/${item._id}`,
  //       { comment }
  //     );
  //     console.log(data);
  //     action(dispatch);
  // setComment(" ");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   getLoggedInUser();
  // }, []);
  const [openCommentsModal, setOpenCommentsModal] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card style={{ margin: "10px" }}>
      <Card.Body style={{ width: "100%", padding: "0", borderRadius: "10px" }}>
        <div
          style={{
            display: "flex",
            background: "white",
            gap: "5px",
            alignItems: "center",
            padding: "10px",
            borderRadius: "15px 15px 0 0",
          }}
        >
          <div>
            <img
              src={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
              alt=""
              style={{
                width: "30px",
                height: "100%",
                borderRadius: "50%",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                fontSize: "12px",
              }}
            >
              {item?.name || "Prathamesh Chavan"}
            </div>

            <div
              style={{
                fontSize: "10px",

                color: "gray",
                textAlign: "left",
              }}
            >
              10 hours ago
            </div>
          </div>

          <div style={{  display: "flex", alignItems: "center", cursor:"pointer"}}>
            <img width={"20px"} src={Assets.MORE} alt="" />
          </div>
        </div>
        <div style={{padding: "0 10px",}}>
          <Card.Text
            style={{
              textAlign: "initial",
              fontSize: "12px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            amet cumque magni inventore.
          </Card.Text>

          <p
            style={{
              textAlign: "initial",
              color: "blue",
              fontSize: "12px",
              margin: "-3% 0 2% 0",
            }}
          >
            #new #latest
          </p>
        </div>

        <div style={{ width: "100%", background: "#000" }}>
          <img
            src={
              item?.image ||
              "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
            }
            alt=""
            style={{
              width: "100%",
              height: "500px",
              objectFit: "contain",
            }}
          />
          {/* <video
            width="100%"
            height="100%"
            src="https://cdn.coverr.co/videos/coverr-a-tropical-beach-681/1080p.mp4"
            controls
            muted
            autoPlay={"autoplay"}
            preLoad="auto"
            loop
          ></video> */}
        </div>

        <div id="likeComment">
          <div>
            <div>
              <img
                width={"25px"}
                src={!isLiked ? Assets.LIKE : Assets.RED_LIKE}
                alt=""
                className="pointer"
                onClick={() => setIsLiked(!isLiked)}
              />
            </div>
            <div>
              <img
                className="pointer"
                width={"25px"}
                src={Assets.COMMENT}
                alt=""
                onClick={() => setOpenCommentsModal(true)}
              />
            </div>
          </div>
          <div>
            <h6
              style={{
                display: "flex",
                gap: "20px",
                color: "gray",
                marginTop: "2%",
              }}
            >
              {" "}
              <span>{item?.likes?.length || 0} likes</span>{" "}
              <span>{item?.likes?.length || 0} comments</span>{" "}
            </h6>
          </div>
        </div>
      </Card.Body>
      <CommentModal open={openCommentsModal} setOpen={setOpenCommentsModal} />
    </Card>
  );
}

export default Post;
