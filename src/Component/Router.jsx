import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ForgotPassword from "../Pages/ForgotPassword";
import ResetPassword from "../Pages/ResetPassword";
import Home from "../Pages/Home";
import Video from "../Components/Video";
import Feed from "./Feed";
import Profile from "../Pages/Profile";

function Router(props) {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Feed />}></Route>
        <Route path="/videos" element={<Video />}></Route>
        <Route path="/groups" element={<Video />}></Route>
        <Route path="/friends" element={<Video />}></Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default Router;
