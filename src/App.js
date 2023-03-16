import './App.css';
import RoutesComp from './Components/RoutesComp';
import Navbar from './Components/Navbar';
import Feed from './Component/Feed';
import Nav from "./Component/Nav"
import RouterDinesh from './Component/RouterDinesh';
import PostWriter from './Component/PostWriter';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {ChakraProvider} from "@chakra-ui/react"
import Trending from './Component/Trending/Trending';

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
 




  return (
    <div className="App">
     


      {data ?  <div><ChakraProvider> <PostWriter /> </ChakraProvider></div> : <div className='Koo'>
                                                
                                                {loginMatch &&  <div style={{ width: "100%" }}>
                                                      <RoutesComp/>
                                                      <Navbar/>
                                                  </div>} 
                                                 
                                                  <div style={{width:"140%",margin: "0 0 0 0%" }} > 
                                                      <Nav/>
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



