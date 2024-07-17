import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import action from "../Redux/Action";
import store from "../Redux/Store";
import Cards from "./Post";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { myAction } from "../Redux/Action";
import Spinner from "react-bootstrap/Spinner";
import Placeholder from "react-bootstrap/Placeholder";
import Post from "./Post";
import { Form } from "react-bootstrap";
import CreatePostModal from "./CreatePostModal";

const Feed = () => {
  const [showAnotherComponent, setShowAnotherComponent] = useState(false);
  const [openCreatePostModal, setOpenCreatePostModal] = useState(false);

  const handleClick = () => {
    setShowAnotherComponent(true);
  };

  const data = useSelector((store) => {
    return store.product;
  });

  let postsArray = [...data];

  const dispatch = useDispatch();
  useEffect(() => {
    action(dispatch);
  }, []);

  let loginStatus = localStorage.getItem("userToken");

  const [removeIcon, setRemoveIcon] = useState(
    window.matchMedia("(min-width: 1360px)").matches
  );
  useEffect(() => {
    const handler = (e) => setRemoveIcon(e.matches);
    window.matchMedia("(min-width: 1360px)").addListener(handler);
    return () => {
      window.matchMedia("(min-width: 1360px)").removeListener(handler);
    };
  }, []);

  return (
    <div
      style={{
        border: "2px solid #f8f7f3",
        backgroundColor: "#f8f7f3",
        width: "100%",
      }}
    >
      <div style={{ margin: "10px" }}>
        <Form.Control
          className="pointer"
          readOnly
          type="text"
          placeholder="What's on your mind?"
          onClick={() => setOpenCreatePostModal(true)}
        />
      </div>
      <CreatePostModal
        open={openCreatePostModal}
        setOpen={setOpenCreatePostModal}
      />
      <div style={{}}>
        {true ? (
          ["", "", ""].reverse().map((ele, i) => {
            return <Post key={i + 1} item={ele} />;
          })
        ) : (
          <div>
            <Placeholder as={"div"} xs={6} animation="glow">
              <Placeholder
                style={{
                  height: "500px",
                  width: "190%",
                  margin: "5% 0 0 5%",
                }}
                xs={12}
              />
              <Placeholder
                style={{
                  height: "500px",
                  width: "190%",
                  margin: "5% 0 0 5%",
                }}
                xs={12}
              />
              <Placeholder
                style={{
                  height: "500px",
                  width: "190%",
                  margin: "5% 0 0 5%",
                }}
                xs={12}
              />
              <Placeholder
                style={{
                  height: "500px",
                  width: "190%",
                  margin: "5% 0 0 5%",
                }}
                xs={12}
              />
            </Placeholder>
          </div>
        )}
      </div>
    </div>
  );
};
export default Feed;
