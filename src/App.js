import './App.css';

import Navbar from './Components/Navbar';
import Feed from './Component/Feed';
import Nav from "./Component/Nav"
import RouterDinesh from './Component/RouterDinesh';
import PostWriter from './Component/PostWriter';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {ChakraProvider} from "@chakra-ui/react"
import Trending from './Component/Trending/Trending';
import MobileNav from "./Component/MobileNav";

function App() {
  const data =useSelector((store)=>{
    return store.writer;
 })

 const [matches, setMatches] = useState(window.matchMedia("(min-width: 1360px)").matches);
 useEffect(() => {
 const handler = e => setMatches(e.matches);
 window.matchMedia("(min-width: 1360px)").addListener(handler);
 return () => {
 window.matchMedia("(min-width: 1360px)").removeListener(handler);
 };
 }, []);

 const [loginMatch, setloginMatch] = useState(window.matchMedia("(min-width: 768px)").matches);
 useEffect(() => {
 const handler = e => setloginMatch(e.matches);
 window.matchMedia("(min-width: 768px)").addListener(handler);
 return () => {
 window.matchMedia("(min-width: 768px)").removeListener(handler);
 };
 }, []);

 const [nav, setNav] = useState(window.matchMedia("(max-width: 767px)").matches);
 useEffect(() => {
 const handler = e => setNav(e.matches);
 window.matchMedia("(max-width: 767px)").addListener(handler);
 return () => {
 window.matchMedia("(max-width: 767px)").removeListener(handler);
 };
 }, []);
 




  return (
    <div className="App">
     


      {data ?  <div><ChakraProvider> <PostWriter /> </ChakraProvider></div> : <div className='Koo'>
                                                
                                                {loginMatch &&  <div style={{ width: "100%" }}>
                                                      <Navbar/>
                                                  </div>} 
                                                 
                                                  <div style={{width:"140%",margin: "0 0 0 0%" }} > 
                                                    {/* {loginMatch && <Nav/>}   */}
                                                     {nav ? <MobileNav />:<Nav />} 
                                                      <RouterDinesh/>
                                                      
                                                  </div>

                                                  {matches && <div style={{width:"100%", position:"static"}} > 
                                                  <Trending /> 
                                                  </div>}
                                                  
                                              </div>}
    </div>
  )
};

export default App;



