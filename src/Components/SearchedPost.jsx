import { Assets } from "../Component/Assets";

const SearchedPost = ({type}) => {
  return (
    <div
      style={{
        overflow: "hidden",
        position: "relative",
        borderRadius: "10px",
        border: "1px solid #ccc",
        marginTop: "10px",
        height: "200px",
        width: "100%",
        cursor: "pointer",
        flexShrink: 0, // Prevent shrinking
      }}
    >
      {type == "video" ? (
        <video
          width="100%"
          loop
          autoPlay
          // controls
          style={{
            position: "relative",
            zIndex: "1",
            cursor: "pointer",
            width: "100%",
            borderRadius:"10px"
          }}
        >
          <source src={Assets.SAMPLE_VIDEO} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          style={{ width: "100%", height: "100%", objectFit: "contain", background:"#000" }}
          src={
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
          }
          alt=""
        />
      )}
      <div
        style={{
          position: "absolute",
          bottom: "0px",
          zIndex: "99",
          height: "40%",
          width: "100%",
          background: "#fff",
          borderRadius: "0 0 10px 10px",
          padding: "5px",
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

        <div>
          <p style={{ fontSize: "10px", margin: "5px 5px 5px 0px" }}>
            {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nam
            laborum explicabo. Nihil adipisci incidunt fuga consequatur quaerat
            enim veniam culpa dolorum officia optio soluta non, ipsa delectus
            sed quos velit consequuntur nam repellendus ea corporis aliquid
            iure. Ea sint sed eum minus nemo, laudantium facilis recusandae?
            Placeat, temporibus porro.`.substring(0, 200) + "..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchedPost;
