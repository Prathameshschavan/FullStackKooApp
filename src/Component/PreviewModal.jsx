import React from "react";
import { Modal } from "react-bootstrap";

const PreviewModal = ({ open, setOpen, fileName, src, type }) => {
  const handleFileName = (fileName) => {
    if (fileName?.length > 20) {
      return (
        fileName?.substring(0, 10) +
        "..." +
        fileName?.substring(fileName?.length - 10, fileName?.length)
      );
    }

    return fileName;
  };

  console.log(type);
  return (
    <Modal centered size="sm" show={open} onHide={() => setOpen(!open)}>
      <Modal.Header closeButton>
        <p style={{ margin: "0", fontWeight: "600" }}>
          {handleFileName(fileName)}
        </p>
      </Modal.Header>
      <Modal.Body style={{ padding: "5px" }}>
        {type !== "video/mp4" ? (
          <img style={{ width: "100%" }} src={src} alt="" />
        ) : (
          <video width="100%" loop autoPlay>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default PreviewModal;
