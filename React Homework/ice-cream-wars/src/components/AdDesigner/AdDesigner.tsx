import { useState } from "react";
import "./AdDesigner.css"




export function AdDesigner() {

    const [adFlavor, setAdFlavor] = useState("Oreo Smash");
    const [darkMode, setDarkMode] = useState(false);
    const [fontSizeAd, setFontSizeAd] = useState(30);
    const [btnDisabled, setBtnDisabled] = useState(false);
    const styles = {fontSize: fontSizeAd + "px"};
    

    return (
        <div className="AdDesigner">
            <h2>Ad Designer</h2>
            <div className={darkMode ? "designer-box darkMode" : "designer-box lightMode"}>
                <p>Vote For</p>
                <h3 style={styles}>{adFlavor}</h3>
            </div>
            <div className="support">
                <p>What To Support</p>
                <button onClick={() => setAdFlavor("Oreo Smash")}>Oreo Smash</button>
                <button onClick={() => setAdFlavor("Cherry Garcia")}>Cherry Garcia</button>
                <button onClick={() => setAdFlavor("Superman")}>Superman</button>
            </div>
            <div className="themeBox">
                <p>Color Theme</p>
                <button onClick={() => setDarkMode(false)}>Light</button>
                <button onClick={() => setDarkMode(true)}>Dark</button>
            </div>
            <div className="fontSizeAd">
                <p>Font Size</p>
                <button onClick={() => fontSizeAd !== 20 ? setFontSizeAd(prevCount => prevCount - 1): setFontSizeAd(20)}>Down</button>
                <span>{fontSizeAd}</span>
                <button onClick={() => fontSizeAd !== 50 ? setFontSizeAd(prevCount => prevCount + 1): setFontSizeAd(50)}>Up</button>
            </div>
        </div>
    )

}