//import react into the bundle
import React from "react";


import { useState } from "react";

// include your styles into the webpack bundle
//import "../styles/index.css";


//import your own components
//import Home from "./component/home.jsx";

function SimpleCounter(props){

    
    return (
        
        <div className="Container">
                <div className="one">{props.seconds}</div>   
        </div>

        );
}
export default SimpleCounter;




