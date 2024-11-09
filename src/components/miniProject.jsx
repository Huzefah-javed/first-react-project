import { useState } from "react"
import "./Project.css"



export const Toggle = () => {
    const [isToggled, setIsToggled] = useState(false);
    const handleToggle = () => {
      setIsToggled(!isToggled);
    };
    return (
        <div className="Projectmain">
         <div className={`toggles ${isToggled ? "on": "off"} `} onClickCapture={() => handleToggle()}>
          <div className={`toggleCircles ${isToggled ? "on": "off"} ${isToggled ? "circleMove": "circleBack"}`}> 
           {isToggled ? 'ON' : 'OFF'}       
          </div>
         </div>
        </div>
    )
}


