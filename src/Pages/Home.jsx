import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Col, Row } from "react-bootstrap";
import Feed from "../Component/Feed";
import { Outlet, Route, Routes } from "react-router-dom";
import Video from "../Components/Video";


const Home = () => {
 
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <Row style={{ height: "100%", width: "100%" }}>
          <Col
            xs={4}
            style={{ height: "100vh", backgroundColor: "#f8f7f3" }}
          ></Col>
          <Col xs={4} style={{ height: "100vh", padding: "0" }}>
            <div
              style={{
                height: "100%",
                width: "100%",
                overflow: "auto",
                paddingTop: "60px",
                position: "relative",
                zIndex: "1",
              }}
            >
              <Outlet />
            </div>
          </Col>
          <Col
            xs={4}
            style={{ height: "100vh", backgroundColor: "#f8f7f3" }}
          ></Col>
        </Row>
      </div>
      
    </div>
  );
};

export default Home;
