import React from "react"
import College from "/images/College.png"

export default function Upperfoot(){
    return(
        <div className="first">
            <div className="first1">
                <h1 id="header">READY FOR</h1><h1 id="header1">WHAT'S NEXT</h1>
            </div>

                <div className="upper_part">
                    <button id="request">REQUEST MORE INFO</button>
                    <button id="apply">APPLY NOW</button>
                    <button id="explore">EXPLORE PROGRAMS</button>
                </div>
                
                <img className="image" src={College} alt="Random"/>
                <p className="line"></p>
         </div>
    )
    
}