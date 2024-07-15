import React from "react";
import { Assets } from "../Component/Assets";

const SocialMediaWallpaper = () => {
  return (
    <div className="auth-col-one">
      <img
        src={Assets.PURPLE_BG}
        style={{ borderRadius: " 10px 0px 0px 10px" }}
        width={"100%"}
        height={"100%"}
        alt=""
      />
      <h1 className="social_media">
        Aura <br />
       <span style={{fontSize:"25px"}}> Social Media Application </span>
      </h1>
    </div>
  );
};

export default SocialMediaWallpaper;
