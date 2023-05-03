import { useState } from "react";
import "./AdDesigner.css"




export function AdDesigner() {

    const [adFlavor, setAdFlavor] = useState("Oreo Smash");
    const [fontSizeAd, setFontSizeAd] = useState(30);
    const [oreoDisable, setOreoDisable] = useState(true);
    const [cherryDisable, setCherryDisable] = useState(false);
    const [supermanDisable, setSupermanDisable] = useState(false);
    const [lightMode, setLightMode] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const styles = { fontSize: fontSizeAd + "px" };

    function oreoBtn() {
        setAdFlavor("Oreo Smash")
        setOreoDisable(true);
        setCherryDisable(false);
        setSupermanDisable(false);
    }


    function cherryBtn() {
        setAdFlavor("Cherry Garcia")
        setCherryDisable(true);
        setOreoDisable(false);
        setSupermanDisable(false);
    }

    function supermanBtn() {
        setAdFlavor("Superman")
        setSupermanDisable(true);
        setOreoDisable(false);
        setCherryDisable(false);
    }

    function lightBtn() {
        setLightMode(true);
        setDarkMode(false)
    }
    function darkBtn() {
        setLightMode(false);
        setDarkMode(true)
    }


    return (
        <div className="AdDesigner">
            <h2>Ad Designer</h2>
            <div className={darkMode ? "designer-box darkMode" : "designer-box lightMode"}>
                <p>Vote For</p>
                <h3 style={styles}>{adFlavor}</h3>
            </div>
            <div className="support">
                <p>What To Support</p>
                <button disabled={oreoDisable} onClick={() => oreoBtn()}>Oreo Smash</button>
                <button disabled={cherryDisable} onClick={() =>  cherryBtn()}>Cherry Garcia</button>
                <button disabled={supermanDisable} onClick={() => supermanBtn()}>Superman</button>
            </div>
            <div className="themeBox">
                <p>Color Theme</p>
                <button disabled={lightMode} onClick={() => lightBtn()}>Light</button>
                <button disabled={darkMode} onClick={() => darkBtn()}>Dark</button>
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