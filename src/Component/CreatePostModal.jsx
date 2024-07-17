import React, { useMemo, useRef, useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { Assets } from "./Assets";
import JoditEditor from "jodit-react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CreatePostModal = ({ open, setOpen }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const options = [
    "bold",
    "italic",
    "|",
    "ul",
    "ol",
    "|",
    "font",
    "fontsize",
    "|",
    "outdent",
    "indent",
    "align",
    "|",
    "hr",
    "|",
    "fullsize",
    "brush",
    "|",
    "table",
    "link",
    "|",
    "undo",
    "redo",
  ];
  const config = useMemo(
    () => ({
      readonly: false,
      height: "400px",
      placeholder: "",
      defaultActionOnPaste: "insert_as_html",
      defaultLineHeight: 1.5,
      enter: "div",
      // options that we defined in above step.
      buttons: options,
      buttonsMD: options,
      buttonsSM: options,
      buttonsXS: options,
      statusbar: false,
      sizeLG: 900,
      sizeMD: 700,
      sizeSM: 400,
      toolbarAdaptive: false,
      addNewLine: false,
    }),
    []
  );
  const percentage = 50;
  console.log(content);
  return (
    <Modal centered size="lg" show={open} onHide={() => setOpen(!open)}>
      <Modal.Header closeButton>
        <p style={{ margin: "0", fontWeight: "600" }}>Create Post</p>
      </Modal.Header>
      <Modal.Body style={{ padding: "0px" }}>
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          tabIndex={1} // tabIndex of textarea
          onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          onChange={(newContent) => {
            console.log(newContent);
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "5px 10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              gap: "10px",
              width: "100%",
            }}
          >
            <label id="add-img-label" for="add-single-img">
              <img
                width={"30px"}
                className="pointer"
                src={Assets.GALLERY}
                alt=""
              />
            </label>
            <input
              type="file"
              id="add-single-img"
              style={{ visibility: "hidden", width: "0px" }}
              accept="image/jpeg"
            />
            <img
              width={"30px"}
              className="pointer"
              src={Assets.CAMERA}
              alt=""
            />
          </div>

          <div>
            {/* <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#3e98c7",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
              })}
            /> */}
            <Button className="purple-btn" style={{ width: "100px" }} size="sm">
              Post
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CreatePostModal;
