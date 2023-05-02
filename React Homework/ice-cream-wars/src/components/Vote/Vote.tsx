import { useState } from "react";
import "./Vote.css"
import { IceCream } from "../../models/iceCream";


export function Vote() {
    const [oreo, setOreo] = useState(0);
    const [cherry, setCherry] = useState(0);
    const [superman, setSuperman] = useState(0);
    const [totalVotes, setTotalVotes] = useState(0);
    const oreoStyle = {width: Math.round(oreo / totalVotes * 100) + "%"}
    const cherryStyle = {width: Math.round(cherry / totalVotes * 100) + "%"}
    const supermanStyle = {width: Math.round(superman / totalVotes * 100) + "%"}


    let voteArray: IceCream[] =
        [
            {
                flavor: "Oreo Smash",
                votes: oreo
            },
            {
                flavor: "Cherry Garcia",
                votes: cherry
            },
            {
                flavor: "Superman",
                votes: superman
            }
        ];

    return (
        <div className="Vote">
            <h2>Vote Here</h2>
            <button onClick={() => { setOreo(prevCurr => prevCurr + 1); setTotalVotes(prevCurr => prevCurr + 1);}}>Oreo Smash</button>
            <button onClick={() => {setCherry(prevCurr => prevCurr + 1); setTotalVotes(prevCurr => prevCurr + 1);}}>Cherry Garcia</button>
            <button onClick={() => {setSuperman(prevCurr => prevCurr + 1); setTotalVotes(prevCurr => prevCurr + 1);}}>Superman</button>
            <div className={totalVotes > 0 ? "hidden" : "noVotes"}>
                <p>No Votes Yet.</p>
            </div>
            <div className="voteSection">
                <div className={oreo < 1 ? "oreoVotes voteGroup hidden" : "oreoVotes voteGroup"}>
                    <p>Oreo Smash: <span>{oreo}</span> <span>({(oreo / totalVotes * 100).toFixed(1)}%)</span></p>
                    <div style={oreoStyle} className="voteBar oreoBar"></div>
                </div>
                <div className={cherry < 1 ? "cherryVotes voteGroup hidden" : "cherryVotes voteGroup"}>
                    <p>Cherry Garcia: <span>{cherry}</span> <span>({(cherry / totalVotes * 100).toFixed(1)}%)</span></p>
                    <div style={cherryStyle} className="voteBar cherryBar"></div>
                </div>
                <div className={superman < 1 ? "supermanVotes voteGroup hidden" : "supermanVotes voteGroup"}>
                    <p>Superman: <span>{superman}</span> <span>({(superman / totalVotes * 100).toFixed(1)}%)</span></p>
                    <div style={supermanStyle} className="voteBar supermanBar"></div>
                </div>
            </div>
        </div>
    )
}