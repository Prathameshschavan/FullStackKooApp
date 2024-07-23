import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Button, Col, Form, Row } from "react-bootstrap";
import Feed from "../Component/Feed";
import { Outlet, Route, Routes } from "react-router-dom";
import Video from "../Components/Video";
import { IoSearchSharp } from "react-icons/io5";
import FriendCard from "../Components/FriendCard";
import SearchedPost from "../Components/SearchedPost";
import { IoMdClose } from "react-icons/io";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <Row style={{ height: "100%", width: "100%" }}>
          <Col
            xs={0}
            md={4}
            style={{ height: "100vh", padding: "0", background: "whitesmoke" }}
          >
            <div
              style={{
                height: "100%",
                width: "100%",
                overflow: "hidden",
                paddingTop: "60px",
                position: "relative",
                zIndex: "1",
              }}
            >
              <div
                style={{
                  height: "100%",
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    flexGrow: 0,
                    borderRadius: "10px",
                    // padding: "10px",
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      position: "relative",
                      marginBottom: "10px",
                    }}
                  >
                    <Form.Control
                      type="text"
                      placeholder="Search"
                      style={{
                        borderRadius: "30px",
                        padding: "8px 12px 8px 40px",
                        fontSize: "14px",
                      }}
                    />
                    <IoSearchSharp
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "10px",
                        transform: "translateY(-50%)",
                        color: "gray",
                      }}
                    />

                    <IoMdClose
                      style={{
                        position: "absolute",
                        top: "50%",
                        right: "10px",
                        transform: "translateY(-50%)",
                        color: "gray",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    flexGrow: 1,
                    overflow: "auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: "0px",
                  }}
                >
                  {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(
                    (item, i) => (
                      <SearchedPost
                        key={i}
                        type={i % 2 === 0 ? "video" : "image"}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </Col>

          <Col xs={12} md={4} style={{ height: "100vh", padding: "0" }}>
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
            xs={0}
            md={4}
            style={{ height: "100vh", padding: "0", background: "whitesmoke" }}
          >
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
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    height: "49%",
                    borderRadius: "10px",
                    padding: "10px",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                    background: "#fff",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <h5>Friends</h5>
                  </div>

                  <div style={{ position: "relative", marginBottom: "10px" }}>
                    <Form.Control
                      type="text"
                      placeholder="Search Friend"
                      style={{
                        borderRadius: "30px",
                        padding: "8px 12px 8px 40px",
                        fontSize: "14px",
                      }}
                    />
                    <IoSearchSharp
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "10px",
                        transform: "translateY(-50%)",
                        color: "gray",
                      }}
                    />

                    <IoMdClose
                      style={{
                        position: "absolute",
                        top: "50%",
                        right: "10px",
                        transform: "translateY(-50%)",
                        color: "gray",
                        cursor: "pointer",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      padding: "10px",

                      height: "100%",
                      overflow: "auto",
                      flexGrow: 1,
                    }}
                  >
                    {[0, 0, 0, 0, 0, 0].map((item) => (
                      <FriendCard defaultAdded={true} />
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    height: "49%",
                    borderRadius: "10px",
                    padding: "10px",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                    background: "#fff",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <h5>Friends</h5>
                  </div>

                  <div style={{ position: "relative", marginBottom: "10px" }}>
                    <Form.Control
                      type="text"
                      placeholder="Search Friend"
                      style={{
                        borderRadius: "30px",
                        padding: "8px 12px 8px 40px",
                        fontSize: "14px",
                      }}
                    />
                    <IoSearchSharp
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "10px",
                        transform: "translateY(-50%)",
                        color: "gray",
                      }}
                    />

                    <IoMdClose
                      style={{
                        position: "absolute",
                        top: "50%",
                        right: "10px",
                        transform: "translateY(-50%)",
                        color: "gray",
                        cursor: "pointer",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      padding: "10px",

                      height: "100%",
                      overflow: "auto",
                      flexGrow: 1,
                    }}
                  >
                    {[0, 0, 0, 0, 0, 0].map((item) => (
                      <FriendCard />
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
