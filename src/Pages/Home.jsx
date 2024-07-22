import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Button, Col, Form, Row } from "react-bootstrap";
import Feed from "../Component/Feed";
import { Outlet, Route, Routes } from "react-router-dom";
import Video from "../Components/Video";
import { IoSearchSharp } from "react-icons/io5";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <Row style={{ height: "100%", width: "100%" }}>
          <Col xs={4} style={{ height: "100vh", padding: "0", background:"whitesmoke" }}>
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
              <div
                style={{
                  height: "100%",
                  padding: "10px",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    borderRadius: "10px",
                    padding: "10px",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <div style={{ position: "relative" }}>
                      <Form.Control
                        className="pointer"
                        type="text"
                        placeholder="Search"
                        style={{
                          borderRadius: "30px",
                          padding: "4px 4px 4px 30px ",
                          fontSize: "14px",
                          // border: "none",
                        }}
                      />
                      <IoSearchSharp
                        style={{
                          position: "absolute",
                          top: "7px",
                          left: "8px",
                          color: "gray",
                        }}
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "10px",
                      lineHeight: 1,
                      height: "95%",
                      color: "gray",
                    }}
                  >
                    <h4>Search Your Heart Out</h4>
                    <p>Search Posts, Friends, Videos, etc</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
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
          <Col xs={4} style={{ height: "100vh", padding: "0",background:"whitesmoke"  }}>
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
              <div
                style={{
                  height: "100%",
                  padding: "10px",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    borderRadius: "10px",
                    padding: "10px",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <h4>Friends</h4>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      padding: "10px",
                    }}
                  >
                    {[0, 0, 0, 0, 0, 0].map((item) => (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                          justifyContent: "space-between",
                          borderBottom: "1px solid #ccc",
                          paddingBottom: "10px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          <img
                            style={{
                              width: "30px",
                              height: "30px",
                              objectFit: "cover",
                              borderRadius: "50%",
                            }}
                            src={
                              "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
                            }
                            alt=""
                          />
                          <span>Prathamesh Chavan</span>
                        </div>

                        <Button
                          size="sm"
                          style={{ width: "55px" }}
                          className="purple-btn"
                        >
                          Add
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
