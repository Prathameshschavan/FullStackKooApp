import React from "react";
import { Route, Routes } from "react-router-dom";
import Video from "../Components/Video";
import Feed from "./Feed";
import People from "./People";
import PostWriter from "./PostWriter";
import Cricket from "../Components/Cricket";



function RouterDinesh(props) {
  return (
    <Routes>
      <Route path="/Feed" element={<Feed/>} />
      <Route path="/people" element={<People/>} />
      <Route path="/new" element={<Feed/>} />
      <Route path="/polls" element={<Feed/>}/>
      <Route path="/videos" element={<Video/>}/>
      <Route path="/cricket" element={<Cricket />}/>
      <Route path="/following" element={<Feed/>}/>
      <Route path="/popular" element={<Feed/>}/>
      <Route path="/Project_kooApp" element={<Feed/>} />
      <Route path="/" element={<Feed/>} />
    </Routes>
  );
}

export default RouterDinesh;