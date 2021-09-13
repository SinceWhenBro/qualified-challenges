import React from "react";

function Subtitle({session, secondsToDuration}){
    return (
        <p className="lead" data-testid="session-sub-title">
            {secondsToDuration(session?.timeRemaining)} remaining
        </p>
    )
}

export default Subtitle;