import React from "react";

function ClickTimes({handleClick}) {
    return(
        <button onClick={() => handleClick()}></button>
    )
}

export default ClickTimes;
