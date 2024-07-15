import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Assets } from "../Component/Assets";
import { useNavigate } from "react-router-dom";
import SocialMediaWallpaper from "../Components/SocialMediaWallpaper";

const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "50rem", height: "30rem" }}>
        <Row style={{ height: "100%" }}>
          <Col xs={6} style={{ padding: "0" }}>
            <SocialMediaWallpaper />
          </Col>
          <Col xs={6} style={{ padding: "0" }}>
            <div className="auth-col-two">
              <div className="login-form-container">
                <img width={"70px"} src={Assets.USER_LOCK} alt="" />
                <h5 style={{ marginTop: "-10px", marginBottom: "15px" }}>
                  Reset Password
                </h5>
                <Form style={{ width: "80%" }}>
                  <Form.Group
                    style={{ marginBottom: "12px", position: "relative" }}
                  >
                    <Form.Control
                      type={"number"}
                      size="sm"
                      style={{ width: "100%" }}
                      aria-describedby="passwordHelpBlock"
                      placeholder="New Password"
                    />
                  </Form.Group>
                  <Form.Group style={{ marginBottom: "12px" }}>
                    <Form.Control
                      type="email"
                      size="sm"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Confirm Password"
                    />
                  </Form.Group>

                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      variant="primary"
                      size="sm"
                      className="mt-3 purple-btn "
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      Reset
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ResetPassword;
