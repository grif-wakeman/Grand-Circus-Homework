import { useEffect, useState } from "react";
import { getDonuts } from "../../services/Donuts";
import { Link } from "react-router-dom";


export function Home() {

    const [donuts, setDonuts] = useState<any[]>();
    const [donutId, setDonutId] = useState(0);
    

    useEffect(() => {
        getDonuts().then(data => {
          setDonuts(data.results)
        })
      }, []);

      

      


    return (
        <div>
            <h1>Donuts</h1>
            <ul>
                {
                    donuts?.map(donut => <li><Link to={"/donut/" + donut.id}>{donut.name}</Link></li>)
                }
            </ul>
        </div>
    )
}