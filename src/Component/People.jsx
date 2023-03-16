import React, { useEffect } from "react";
import { useState } from "react";
import "./people.css";
import {useDispatch,useSelector} from "react-redux"
import { actionPeople } from "../Redux/Action";
import PeopleXt from "./PeopleXt";
function People() {
     


    let dispatch = useDispatch();

    useEffect(()=>{
        actionPeople(dispatch);
    },[])

   let Data =useSelector((store)=>{
          return store.people;
    })

    console.log(Data);
    
    
  return (
    <div className="mainbody">
      <div className="followpeople">
        <h6>People you can follow</h6>
        <img
          src="https://www.kooapp.com/_next/static/media/arrow_right.f549fb9e.svg"
          alt=""
        />
      </div>
      <div className="main">
        {
            Data.map((ele)=>{
                return <PeopleXt item={ele} />
            })
        }
      </div>
    </div>
  );
}
export default People;