import React, { useState } from "react";

function CountButton () {
    const [clickCount, setClickCount] = useState(0);
    return (
        <section>
            //onClick do this
            <button onClick ={() => setClickCount(clickCount + 1)}>Click Count: {clickCount} </button>
        </section>
    )
}

export default CountButton;