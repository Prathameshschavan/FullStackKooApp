import React from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

const EditProfileModal = ({ open, setOpen }) => {
  return (
    <Modal
      backdrop={"static"}
      centered
      show={open}
      onHide={() => setOpen(!open)}
    >
      <Modal.Header closeButton>
        <p style={{ margin: "0", fontWeight: "600" }}>Edit Profile</p>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col xs={6} style={{ padding: "0" }}>
              <div style={{ padding: "5px" }}>
                <Form.Control placeholder="First Name" />
              </div>
            </Col>
            <Col xs={6} style={{ padding: "0" }}>
              <div style={{ padding: "5px" }}>
                <Form.Control placeholder="Last Name" />
              </div>
            </Col>
            <Col xs={12} style={{ padding: "0" }}>
              <div style={{ padding: "5px" }}>
                <Form.Control placeholder="What's your professional superpower?" />
              </div>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer style={{padding:"5px"}}>
        <Button className="purple-btn" style={{ width: "100px" }} size="sm">
          Post
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProfileModal;
