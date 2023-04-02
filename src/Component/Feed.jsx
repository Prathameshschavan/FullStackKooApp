import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import action from "../Redux/Action";
import store from "../Redux/Store";
import Cards from "./Cards";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { myAction } from "../Redux/Action";
import Spinner from "react-bootstrap/Spinner";
import Placeholder from 'react-bootstrap/Placeholder';

const Feed = () => {
  const [showAnotherComponent, setShowAnotherComponent] = useState(false);

  const handleClick = () => {
    setShowAnotherComponent(true);
  };

  const data = useSelector((store) => {
    return store.product;
  });

  let postsArray=[...data]

  const dispatch = useDispatch();
  useEffect(() => {
    action(dispatch);
  }, []);

  let loginStatus = localStorage.getItem("userToken");

  const openWriter = () => {
    loginStatus ? myAction(dispatch, true) : alert("Login first to post");
  };

  let inputStyles = {
    width: "95%",
    borderRadius: "10px",
    padding: "1% 1% 1% 2%",
    outline: "none",
    border: "none",
    cursor: "pointer",
    boxShadow: "rgba(0, 0, 0, 0.10) 0px 0px 0px 1px",
    margin: "2%",
  };

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
    <>
      <div
        style={{
          border: "2px solid #f8f7f3",
          backgroundColor: "#f8f7f3",
          width: "100%",
        }}
      >
        <input
          onClick={() => {
            openWriter();
          }}
          readOnly
          style={inputStyles}
          type="text"
          placeholder="What's on your mind?"
        />


       
          <div style={{}}>

            {postsArray.length>0?postsArray.reverse().map((ele, i) => {
              return <Cards key={i + 1} item={ele} />;
            }):
            <div>
            {/* <Spinner style={{margin:"50% 0 0 0"}} size="lg" animation="grow" variant="secondary" /> */}
                <Placeholder  as={"div"} xs={6} animation="glow">
                        <Placeholder style={{height:"500px", width:"190%", margin:"5% 0 0 5%"}}  xs={12}/>
                        <Placeholder style={{height:"500px", width:"190%", margin:"5% 0 0 5%"}}  xs={12}/>
                        <Placeholder style={{height:"500px", width:"190%", margin:"5% 0 0 5%"}}  xs={12}/>
                        <Placeholder style={{height:"500px", width:"190%", margin:"5% 0 0 5%"}}  xs={12}/> 
                </Placeholder>
             
            </div>
            
        }
          </div>
        
      </div>
    </>
  );
};
export default Feed;
