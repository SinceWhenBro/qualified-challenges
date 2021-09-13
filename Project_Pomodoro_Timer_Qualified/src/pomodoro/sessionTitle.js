import React from "react";
import {secondsToDuration, minutesToDuration} from "../utils/duration"
import Subtitle from "./Subtitle";
import BarPercentage from "./BarPercentage";

function SessionTitle({session, focusDuration, breakDuration}){
    if(!session) return null;
    
    return (
        <div>
        {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
            <h2 data-testid="session-title">
                {session.label} for {minutesToDuration(session.label === "Focusing" ? focusDuration : breakDuration)} minutes 
            </h2>
            {/* TODO: Update message below correctly format the time remaining in the current session */}
            <Subtitle session={session} secondsToDuration={secondsToDuration}/>
          </div>
        </div>
        <BarPercentage session={session} focusDuration={focusDuration} breakDuration={breakDuration}/>
      </div>
    )
}

export default SessionTitle;
