import React from "react";
import Navbar from "../Components/Navbar";
import { Col, Row, Tab, Tabs } from "react-bootstrap";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <Row style={{margin:"0"}}>
        <Col md={3} style={{ padding: "0" }}></Col>
        <Col md={6} style={{ padding: "0" }}>
          {" "}
          <div
            style={{
              height: "100%",
              width: "100%",
              overflow: "auto",
              paddingTop: "60px",
              position: "relative",
              height: "100%",
              zIndex: "1",
            }}
          >
            <div style={{ position: "relative", zIndex: "1" }}>
              <img
                src={
                  "https://scontent.fbom36-1.fna.fbcdn.net/v/t1.6435-9/68827731_2394352007557904_6080198524488646656_n.jpg?stp=dst-jpg_p640x640&_nc_cat=105&ccb=1-7&_nc_sid=2a1932&_nc_ohc=m-1PBo7OM98Q7kNvgHcyhtN&_nc_ht=scontent.fbom36-1.fna&oh=00_AYBj_VAlY_31WbeUJeEK49AJ6KmvBWqjjIeL4OSuhmGePQ&oe=66C76B82"
                }
                style={{
                  height: "200px",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: " 0 0 10px 10px ",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                }}
                alt=""
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                lineHeight: "0.5",
                gap: "10px",
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
                  marginTop: "-20px",
                  marginLeft: "10px",
                  borderRadius: "50%",
                  position: "relative",
                  zIndex: "2",
                }}
              />
              <div>
                <h3>Prathamesh Chavan</h3>
                <p style={{ color: "gray" }}>Digital Creator</p>
                <p style={{ fontSize: "12px", color: "gray" }}>455 friends</p>
              </div>
            </div>

            <div
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
            </div>
          </div>
        </Col>
        <Col md={3} style={{ padding: "0px",  }}></Col>
      </Row>
    </div>
  );
};

export default Profile;
