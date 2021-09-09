import React, { useState } from "react";
import ClickTimes from "./ClickTimes";
import TimestampsDisplay from "./TimestampsDisplay";

function App() {
  const [timestamps, setTimestamp] = useState([]);
  const handleClick = () => setTimestamp([...timestamps, Date.now()]);
  return(
    <div>
      <ClickTimes handleClick={handleClick}/>
      <TimestampsDisplay timestamps={timestamps}/>
    </div>
  ) 
}

export default App;
