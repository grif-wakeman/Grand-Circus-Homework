import { useState } from "react";
import "./AdDesigner.css"
import { Ad } from "../Ad/Ad";




export function AdDesigner() {

    const [adFlavor, setAdFlavor] = useState("Oreo Smash");
    const [fontSizeAd, setFontSizeAd] = useState(30);
    const [darkMode, setDarkMode] = useState(false);
    const styles = { fontSize: fontSizeAd + "px" };




    return (
        <div className="AdDesigner">
            <h2>Ad Designer</h2>
            <Ad flavor={adFlavor} fontSize={fontSizeAd} darkTheme={darkMode} />
            <div className="support">
                <p>What To Support</p>
                <button disabled={adFlavor === "Oreo Smash"} onClick={() => setAdFlavor("Oreo Smash")}>Oreo Smash</button>
                <button disabled={adFlavor === "Cherry Garcia"} onClick={() =>  setAdFlavor("Cherry Garcia")}>Cherry Garcia</button>
                <button disabled={adFlavor === "Superman"} onClick={() => setAdFlavor("Superman")}>Superman</button>
            </div>
            <div className="themeBox">
                <p>Color Theme</p>
                <button disabled={darkMode === false } onClick={() => setDarkMode(false)}>Light</button>
                <button disabled={darkMode === true} onClick={() => setDarkMode(true)}>Dark</button>
            </div>
            <div className="fontSizeAd">
                <p>Font Size</p>
                <button onClick={() => fontSizeAd !== 20 ? setFontSizeAd(prevCount => prevCount - 1) : setFontSizeAd(20)}>Down</button>
                <span>{fontSizeAd}</span>
                <button onClick={() => fontSizeAd !== 50 ? setFontSizeAd(prevCount => prevCount + 1) : setFontSizeAd(50)}>Up</button>
            </div>
        </div>
    )

}