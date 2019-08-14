import React from "react";
import "./hdbutton.css"

const HDButton = ( {  hdVisState } ) => {
    return (
        <button className="hd-button" onClick={() => hdVisState[1](!hdVisState[0])}
        >HD Image
        </button>
    );
};

export default HDButton;