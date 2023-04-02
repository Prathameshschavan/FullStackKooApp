import { border } from "@chakra-ui/react";
import React from "react";
import style from "../Trending/trending.module.css";
import pic from "../Trending/trendImg.png"

export default function Trending() {
  return (
  <div style={{position:"sticky", top:"10%"}}  >



    <div style={{position:"static"}} >
    <input style={{width:"80%", borderRadius:"20px", padding:"1.5% 10%", margin:"5% 0 0 -12%", zIndex:"-9999", outline:"none", border:"1px solid black"}} readOnly  placeholder="Search" type="search"  />
    </div>
    <i style={{margin:"-6.5% 0% 0 -42% ", position:"absolute"}} class="fa-solid fa-magnifying-glass"></i>
    <i style={{margin:"-6.5% 0% 0 25% ", position:"absolute"}} class="fa-solid fa-microphone"></i>
    

    <div style={{margin:"4% 0 -3% -5%", fontSize:"25px", fontWeight:"600", width:"100%"}}> <pre>Trending Hashtags           <i class="fa-solid fa-arrow-right"></i></pre></div>

    <div id={style.first}>
      <div className={style.card}>
        <div>
          <p> #aeroindia2023 </p>
          <img src={pic} alt="trendingImage" />
        </div>
        <i className="fa-regular fa-plus"></i>
      </div>
    </div>

    <div id={style.first}>
      <div className={style.card}>
        <div>
          <p> #womensinblue </p>
          <img src={pic} alt="trendingImage" />
        </div>
        <i className="fa-regular fa-plus"></i>
      </div>
    </div>

    <div id={style.first}>
      <div className={style.card}>
        <div>
          <p> #mcstan </p>
          <img src={pic} alt="trendingImage" />
        </div>
        <i className="fa-regular fa-plus"></i>
      </div>
    </div>

    <div id={style.first}>
      <div className={style.card}>
        <div>
          <p> #nationalwomensday </p>
          <img src={pic} alt="trendingImage" />
        </div>
        <i className="fa-regular fa-plus"></i>
      </div>
    </div>

    <div id={style.first}>
      <div className={style.card}>
        <div>
          <p> #indvsaus </p>
          <img src={pic} alt="trendingImage" />
        </div>
        <i className="fa-regular fa-plus"></i>
      </div>
    </div>
    
  </div>
     
  );
}