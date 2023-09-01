//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";
import { useState } from "react";

// include your styles into the webpack bundle
//import "../styles/index.css";


//import your own components
//import Home from "./component/home.jsx";

function SimpleCounter(props){

    
    return (
        
        <div className="Container">
            <div className="bigCounter">
                <div className="timer">
                    <i class="fas fa-clock"></i>
                </div>   
             
                <div className="four">{props.digitFour}</div>
                <div className="three">{props.digitThree}</div>
                <div className="two">{props.digitTwo}</div>
                <div className="one">{props.digitOne}</div>
            
            </div>
            <div>
            <button className="btn" onClick={props.resetValue}> Reset </button></div>
        </div>

        );
}
SimpleCounter.propTypes={

    digitFour:propTypes.number,
    digitThree:propTypes.number,
    digitTwo:propTypes.number,
    digitOne: propTypes.number,
    resetValue: propTypes.func
};

let counter=0
setInterval (function(){
   
    const four=Math.floor(counter/1000);
    const three=Math.floor(counter/100);
    const two= Math.floor(counter/10);
    const one=Math.floor(counter/1);
    counter++;
 
    ReactDOM.render(<SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />, document.querySelector("#app"));

},1000);


