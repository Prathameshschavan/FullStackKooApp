import React from "react";

const Comment = () => {
  return (
    <div style={{  display: "flex", gap:"5px" , padding:"5px"}}>
      <img
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
        alt=""
        style={{
          width: "30px",
          height: "30px",
          objectFit: "cover",
          borderRadius: "50%",
        }}
      />
      <div style={{  borderRadius: " 5px", padding:"5px", background:"#eaeaea" }}>
        <p
          style={{ fontSize: "12px", fontWeight: "600", marginBottom: "-3px" }}
        >
          Prathamesh Chavan
        </p>
        <p style={{ fontSize: "13px", width:"100%", wordBreak:"break-all", lineHeight:"1" }}>eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
      </div>
    </div>
  );
};

export default Comment;
