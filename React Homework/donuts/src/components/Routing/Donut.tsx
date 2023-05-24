import { useEffect, useState } from "react";
import { donutDetails } from "../../services/Donuts";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export function Donut() {

  const [donut, setDonut] = useState<any>({})
  const [extras, setExtras] = useState<any[]>()

  const id: number = parseInt(useParams().id!)



  useEffect(() => {
    donutDetails(id).then(data => {
      setDonut(data)
      setExtras(data.extras)
      console.log(data.name);

    })
  }, []);

  return (
    <div>
      <Link to="/home">Back to List</Link>
      <h1>Donut</h1>
      <p><strong>Name:</strong> {donut.name}</p>
      <p><strong>Calories:</strong> {donut.calories}</p>
      <p><strong>Extras:</strong></p>
      <ul>
        
        {
          extras?.map(e => <li>{e}</li>)
        }
      </ul>
      <img src={donut.photo} width="400px"/>

    </div>
  )
}