import React, { useMemo, useRef, useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { Assets } from "./Assets";
import { RxCross2 } from "react-icons/rx";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PreviewModal from "./PreviewModal";

const CreatePostModal = ({ open, setOpen }) => {
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [openPreviewModal, setOpenPreviewModal] = useState(false);

  const handleOnchange = (e) => {
    let value = e.target.value;
    if (value.length <= 200) {
      setContent(value);
    }
  };

  const handleFile = (e) => {
    let file = e.target.files;
    setFile(file);
    let tmp = [];
    for (let i = 0; i < file.length; i++) {
      tmp.push(URL.createObjectURL(file[i]));
    }
    setPreview(tmp);
  };

  const handleFileName = (fileName) => {
    if (fileName?.length > 20) {
      return (
        fileName.substring(0, 15) +
        "..." +
        fileName.substring(fileName?.length - 15, fileName?.length)
      );
    }

    return fileName;
  };

  return (
    <Modal
      backdrop={"static"}
      centered
      size="lg"
      show={open}
      onHide={() => setOpen(!open)}
    >
      <Modal.Header closeButton>
        <p style={{ margin: "0", fontWeight: "600" }}>Create Post</p>
      </Modal.Header>
      <Modal.Body style={{ padding: "0px" }}>
        <Form>
          <Form.Group>
            <div style={{ position: "relative" }}>
              <Form.Control
                style={{ resize: "none" }}
                as="textarea"
                rows={10}
                type="text"
                value={content}
                onChange={handleOnchange}
                placeholder="What's on your mind?"
              />
              <div
                style={{
                  width: "30px",
                  position: "absolute",
                  bottom: "5px",
                  right: "5px",
                }}
              >
                <CircularProgressbar
                  value={content.length / 2}
                  text={`${200 - content.length}`}
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "#28004d",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                  })}
                />
              </div>
            </div>
          </Form.Group>
        </Form>
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
              <input
                type="file"
                id="add-single-img"
                style={{ visibility: "hidden", width: "0px" }}
                accept="image/jpeg, video/*"
                onChange={handleFile}
              />
            </label>
            {file && preview && (
              <>
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "10px",
                    color: "#3498DB",
                    cursor: "pointer",
                  }}
                  onClick={() => setOpenPreviewModal(true)}
                >
                  {handleFileName(file?.[0].name)}
                </span>
                <span
                  style={{
                    fontSize: "10px",
                    color: "#000",
                    cursor: "pointer",
                    marginLeft: "-5px",
                  }}
                  onClick={() => {
                    setPreview(null);
                    setFile(null);
                  }}
                >
                  <RxCross2 />
                </span>
              </>
            )}

            <PreviewModal
              setOpen={setOpenPreviewModal}
              open={openPreviewModal}
              src={preview}
              fileName={file?.[0].name}
              type={file?.[0].type}
            />
          </div>

          <Button className="purple-btn" style={{ width: "100px" }} size="sm">
            Post
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CreatePostModal;
