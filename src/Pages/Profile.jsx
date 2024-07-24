import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import { FaCamera } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import EditProfileModal from "../Component/EditProfileModal";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const [openEditProfileModal, setOpenEditProfileModal] = useState(false);
  const  navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <Row style={{ margin: "0" }}>
        <Col md={4} style={{ padding: "0" }}></Col>
        <Col md={4} style={{ padding: "0", height: "100vh" }}>
          {" "}
          <div
            style={{
              height: "100vh",
              width: "100%",
              overflow: "auto",
              paddingTop: "60px",
              position: "relative",
              height: "100%",
              zIndex: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ zIndex: "1" }}>
              <div style={{ position: "relative" }}>
                <img
                  src={
                    "https://scontent.fbom36-1.fna.fbcdn.net/v/t1.6435-9/68827731_2394352007557904_6080198524488646656_n.jpg?stp=dst-jpg_p640x640&_nc_cat=105&ccb=1-7&_nc_sid=2a1932&_nc_ohc=m-1PBo7OM98Q7kNvgHcyhtN&_nc_ht=scontent.fbom36-1.fna&oh=00_AYBj_VAlY_31WbeUJeEK49AJ6KmvBWqjjIeL4OSuhmGePQ&oe=66C76B82"
                  }
                  style={{
                    height: "200px",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                  }}
                  alt=""
                />
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    background: "rgb(255 255 255 / 34%)",
                    top: "0",
                  }}
                >
                  {" "}
                  <FaCamera
                    style={{
                      position: "absolute",
                      top: "15px",
                      right: "15px",

                      color: "#fff",
                      zIndex: "3",
                      fontSize: "20px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                lineHeight: "0.5",
                gap: "10px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  marginTop: "-20px",
                  borderRadius: "50%",
                  marginTop: "-20px",
                  position: "relative",
                  zIndex: "2",
                }}
              >
                <img
                  src={
                    "https://scontent.fbom36-1.fna.fbcdn.net/v/t1.6435-1/96089526_2650477948611974_1013326009400819712_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=e4545e&_nc_ohc=DnwHPfuA1XQQ7kNvgGD0Fqv&_nc_ht=scontent.fbom36-1.fna&oh=00_AYDoPPt6Ef_zZn6ZiDdlJLrS3347Zccb2nwFdgOhaVKDbw&oe=66C785DF"
                  }
                  alt=""
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    left: "0",
                    bottom: "0",
                    borderRadius: "50%",
                    position: "relative",
                    zIndex: "2",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: "3",
                    cursor: "pointer",
                    background: "rgb(255 255 255 / 34%)",
                    height: "100%",
                    width: "100%",
                    borderRadius: "50%",
                  }}
                >
                  <FaCamera
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: "3",
                      color: "#fff",
                      fontSize: "20px",
                    }}
                  />
                </div>
              </div>
              <div>
                <h3
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  Prathamesh Chavan{" "}
                  <span style={{ fontSize: "15px" }}>
                    <FaEdit
                      onClick={() => setOpenEditProfileModal(true)}
                      style={{ cursor: "pointer" }}
                    />
                  </span>
                </h3>
                <p style={{ color: "gray" }}>Digital Creator</p>
                <p style={{ fontSize: "12px", color: "gray" }}>455 friends</p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "blue",
                    marginTop: "-4px",
                    cursor: "pointer",
                  }}
                  onClick={()=> navigate("/reset-password")}
                >
                  Reset Password
                </p>
              </div>
            </div>

            {/* <div
              style={{
                marginTop: "10px",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              }}
            >
              <Tabs
                defaultActiveKey="Posts"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="Posts" title="Posts"></Tab>
                <Tab eventKey="About" title="About"></Tab>
                <Tab eventKey="Friends" title="Friends"></Tab>
              </Tabs>{" "}
            </div> */}
          </div>
        </Col>
        <Col md={4} style={{ padding: "0px" }}></Col>
      </Row>
      <EditProfileModal
        setOpen={setOpenEditProfileModal}
        open={openEditProfileModal}
      />
    </div>
  );
};

export default Profile;
