import { useState } from "react";
import React from "react";


//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";



//create your first component
function App() {

    const [value, SetValue]=useState(0)

    return (

        <div>
            <h1>Simple React Counter</h1>
			<p>{value}</p>
            <button className="btn" onClick={(()=> SetValue=(value+1))}>Increase</button>
            <button className="btn" onClick={(()=> SetValue=(value-1))}>Decrease</button>
            <button className="btn" onClick={(()=> SetValue=(0))}>Reset</button>


    </div>


    );
};
export default App

