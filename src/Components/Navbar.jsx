import { Col, Dropdown, Form, Nav, Row } from "react-bootstrap";
import "./Navbar.css";
import { useState } from "react";
import { Assets } from "../Component/Assets";
import { useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";

function Navbar() {
  const [selectedMenu, setSelectedMenu] = useState("/");
  const navigate = useNavigate();
  return (
    <div className="navbar-containter">
      <Row style={{ width: "100%" }}>
        <Col xs={4}>
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <h3 className="social_media_text">Aura</h3>
          </div>
        </Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          xs={4}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Nav
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
              }}
              variant="underline"
              defaultActiveKey="/"
            >
              <Nav.Item
                className={`navbar-item-container${
                  selectedMenu === "/" ? "-selected" : ""
                }`}
                onClick={() => {
                  navigate("/");
                  setSelectedMenu("/");
                }}
              >
                <i className="fa-solid fa-house"></i>
              </Nav.Item>
              <Nav.Item
                className={`navbar-item-container${
                  selectedMenu === "/videos" ? "-selected" : ""
                }`}
                onClick={() => {
                  navigate("/videos");
                  setSelectedMenu("/videos");
                }}
              >
                <i className="fa-brands fa-youtube"></i>
              </Nav.Item>
              <Nav.Item
                className={`navbar-item-container${
                  selectedMenu === "/groups" ? "-selected" : ""
                }`}
                onClick={() => {
                  navigate("/groups");
                  setSelectedMenu("/groups");
                }}
              >
                <i className="fa-solid fa-users"></i>
              </Nav.Item>
              <Nav.Item
                className={`navbar-item-container${
                  selectedMenu === "/friends" ? "-selected" : ""
                }`}
                onClick={() => {
                  navigate("/friends");
                  setSelectedMenu("/friends");
                }}
              >
                <i className="fa-solid fa-user-group"></i>
              </Nav.Item>
            </Nav>
          </div>
        </Col>
        <Col
          style={{
            display: "flex",
          }}
          xs={4}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div style={{ position: "relative" }}>
              <Form.Control
                className="pointer"
                type="text"
                placeholder="Search"
                style={{
                  borderRadius: "30px",
                  padding: "4px 4px 4px 30px ",
                  fontSize: "14px",
                  border: "none",
                }}
              />
              <IoSearchSharp style={{position:"absolute", top:"7px", left:"8px", color:"gray"}} />
            </div>
            <Dropdown className="navbar-dropdown">
              <Dropdown.Toggle className="navbar-dropdown">
                <img
                  style={{ width: "30px" }}
                  src={Assets.USER_PROFILE}
                  alt="User Profile"
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => navigate("/login")}>
                  Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default Navbar;
