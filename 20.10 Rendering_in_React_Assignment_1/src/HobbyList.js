import React from "react";
import "./HobbyList.css";

function HobbyList({hobbies}) {
  if(hobbies.length <=0){
    return null;
  }                         
  return (
    <div>
      <h4>Hobbies</h4>
      
      <ul>
        {hobbies.map((hobby,index) => <li key={index}>{hobby}</li>)}
      </ul>
    </div>
      
    
  );
  
   // You must use this heading for this component
}

export default HobbyList;
