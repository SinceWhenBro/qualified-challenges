import React, {useState} from "react";
import "./App.css";

function handleSub(subState){
  if(subState === true){
    return false;
  } else{
    return true;
  }
}

function App() {

  const [subscribed, setSubscribed] = useState(false);
  
  return(
    <div>
    <h1>Hello World!</h1>
      <button onClick={()=>setSubscribed(handleSub(subscribed))}>
        {subscribed ? "Unsub" : "SubSub" }
      </button>
    </div>
  ) 
}

export default App;
