import { useState } from "react"
import "./Shapes.css"

export function Shapes() {

    const [isCircle, setIsCircle] = useState(false);
    const [diameter, setDiameter] = useState(0);
    
    const styles = {width: diameter, height: diameter, borderRadius: isCircle ? "50%" : 0, border: diameter > 0 ? "3px solid #8282f8" : "none"};

    return (
        <div>
            <input name="diameter" type="number" value={diameter} 
            onChange={e => setDiameter(+e.target.value)}/>
            <label htmlFor="diameter">Diameter</label>
            <input type="checkbox" name="circleChk" id="circleChk" checked={isCircle}
            onChange={e => setIsCircle(e.target.checked)}/>
            <label htmlFor="circleChk">Is Circle?</label>
            <div className="shapeBox" style={styles}>

            </div>

        </div>
    )
}