import React from 'react'
import "./people.css";
import {useDispatch,useSelector} from "react-redux"
import { actionPeople } from "../Redux/Action";

export default function PeopleXt(item) {
    // console.log(item)
    let dispatch = useDispatch();

    let handleFollow = async()=>{
   
        let peopleObj={
            ...item.item, Follow: !item.item.Follow,
        }

        console.log(peopleObj)
     
        let data = await fetch(`http://localhost:3004/People/${item.item.id}`,
    {
      method:"PATCH",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(peopleObj)
    })
  
    data= await data.json();
    // console.log(data);
    actionPeople(dispatch);
    }

  return (
    <div>
       <div className="mainbox" key={item.item.id}>
              <div className="main2">
                <div className="imageanddetails">
                  <div className="image">
                    <img src={item.item.image} alt="" />
                  </div>

                  <div className="details">
                    <div className="nameicon">
                      <div className="name">{item.item.name}</div>
                      <div className="icon">
                        <img src={item.item.icon} alt="" />
                      </div>
                    </div>

                    <div className="aboutuser">
                      {item.item.username}
                      <div className="doticon">.</div>
                      {item.item.about}
                    </div>
                  </div>
                </div>
                <div className="follow">
                  
                  <button key={item.item.id} id={item.item.id}onClick={handleFollow} >
                  {item.item.Follow ? "Following" : "+Follow"}
                  </button>

                </div>
              </div>
            </div>
    </div>
  )
}
