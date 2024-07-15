import "./App.css";

import Navbar from "./Components/Navbar";
import Feed from "./Component/Feed";
import Nav from "./Component/Nav";

import PostWriter from "./Component/PostWriter";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Trending from "./Component/Trending/Trending";
import MobileNav from "./Component/MobileNav";
import Router from "./Component/Router";

function App() {
   return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
