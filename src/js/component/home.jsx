
import React, { useState, useEffect } from "react";
import SimpleCounter from "./SimpleCounter"
import { element } from "prop-types";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";



//create your first component
function Home() {

    const [sec, setSec]=useState(0)
    useEffect(()=>{
        setInterval(function(){
            setSec(previousSec=>previousSec+1)
        },1000);
    },[])
    let arrayOfSec= sec.toString().split("")

    return (

        <div>
            <h1>Simple React Counter</h1>

            <div className="bigCounter">
                <div className="timer">
                    <i class="fas fa-clock"></i>
                </div>   
                {arrayOfSec.map((element)=>{
                return (
                    <SimpleCounter seconds={element}/>
                    )
            })}
             
            </div>
            <div>
                 <button className="btn" onClick={()=> setSec(0)}> Reset </button>
            </div>

           
		
          
           {/* <button className="btn" onClick={(()=> SetValue=(value+1))}>Increase</button>
            <button className="btn" onClick={(()=> SetValue=(value-1))}>Decrease</button>
        <button className="btn" onClick={(()=> SetValue=(0))}>Reset</button>*/}


    </div>


    );
};
export default Home

