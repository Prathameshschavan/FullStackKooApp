import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Comment from "./Comment";

const CommentModal = ({ open, setOpen }) => {
  return (
    <Modal show={open} onHide={() => setOpen(!open)} size="md" centered>
      <Modal.Header closeButton>
        <p style={{ margin: "0", fontWeight: "600" }}>Comments</p>
      </Modal.Header>
      <Modal.Body style={{ padding: "0" }}>
        <div style={{ width: "100%", height: "400px", overflow: "auto" }}>
          <div style={{ height: "200px", background: "#ccc" }}>
            <img
              src={
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
              }
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div style={{ height: "200px" }}>
            {/* {[0, 0, 0, 0].map(() => (
              <Comment />
            ))} */}
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                color: "#ccc",
              }}
            >
              <h2>No Comments</h2>
              <p>Be the first one to comment</p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            gap: "5px",
          }}
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            style={{
              width: "30px",
              height: "30px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
          <Form style={{ width: "100%" }}>
            <Form.Group>
              <Form.Control
                type="text"
                size="sm"
                aria-describedby="passwordHelpBlock"
                placeholder="Commment as Prathamesh Chavan"
              />
            </Form.Group>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CommentModal;
