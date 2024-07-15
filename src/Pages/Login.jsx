import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Assets } from "../Component/Assets";
import { useNavigate } from "react-router-dom";
import SocialMediaWallpaper from "../Components/SocialMediaWallpaper";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
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
          <SocialMediaWallpaper/>
          </Col>
          <Col xs={6} style={{ padding: "0" }}>
            <div className="auth-col-two">
              <div className="login-form-container">
                <img width={"70px"} src={Assets.USER_LOCK} alt="" />
                <h5 style={{ marginTop: "-10px", marginBottom: "15px" }}>
                  Login
                </h5>
                <Form style={{ width: "80%" }}>
                  <Form.Group style={{ marginBottom: "12px" }}>
                    <Form.Control
                      type="email"
                      size="sm"
                      aria-describedby="passwordHelpBlock"
                      placeholder="Email"
                    />
                  </Form.Group>
                  <Form.Group
                    style={{ marginBottom: "12px", position: "relative" }}
                  >
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      size="sm"
                      style={{ width: "100%" }}
                      aria-describedby="passwordHelpBlock"
                      placeholder="Password"
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "6px",
                        right: "8px",
                        fontSize: "13px",
                        cursor: "pointer",
                      }}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <i class="fa-solid fa-eye"></i>
                      ) : (
                        <i class="fa-solid fa-eye-slash"></i>
                      )}
                    </div>
                  </Form.Group>
                  <p
                    className="forgot-password-text"
                    onClick={() => navigate("/forgot-password")}
                  >
                    Forgot Password?
                  </p>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      variant="primary"
                      size="sm"
                      className="mt-3 purple-btn "
                      onClick={() => navigate("/")}
                    >
                      Login
                    </Button>
                  </div>
                </Form>
                <p
                  style={{
                    position: "absolute",
                    bottom: "0",
                    fontSize: "12px",
                  }}
                >
                  Don't have an account?{" "}
                  <span
                    onClick={() => navigate("/register")}
                    style={{ color: "#1679AB", cursor: "pointer" }}
                  >
                    Register
                  </span>{" "}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
