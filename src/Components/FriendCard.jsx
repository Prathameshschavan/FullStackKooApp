import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Assets } from "../Component/Assets";

const FriendCard = ({ defaultAdded }) => {
  const [isAdded, setIsAdded] = useState(defaultAdded || false);
  return (
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
            Assets.ACCOUNT ||
            "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
          }
          alt=""
        />
        <div
          style={{
            lineHeight: "0.8",
          }}
        >
          <span style={{ fontSize: "14px" }}>Prathamesh Chavan</span> <br />
          <span style={{ fontSize: "10px", color: "gray" }}>
            Digital Creator
          </span>
        </div>
      </div>

      <Button
        size="sm"
        style={{
          width: "55px",
          fontSize: "10px",
          padding: "2px 0",
        }}
        onClick={() => setIsAdded(!isAdded)}
        className="purple-btn"
      >
        {isAdded ? "Remove" : "Add"}
      </Button>
    </div>
  );
};

export default FriendCard;
