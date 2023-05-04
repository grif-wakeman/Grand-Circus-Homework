import { useState } from "react";
import "./ArraysEx.css"

export interface Pet {
    name: string;
    type: string;
    id: number;
}


export function ArraysEx() {

    const [colors, setColors] = useState(["red", "orange", "yellow"]);
    const [pets, setPets] = useState<Pet[]>([{ name: "Bug", type: "Dog", id: 1 }, { name: "Duck", type: "Dog", id: 2 }, { name: "Bubbles", type: "fish", id: 3 }, { name: "Larry", type: "Lobster", id: 4 },])

    function addColor(color: string): void {
        setColors(prev => [...prev, color]);
    }

    const handleDelete = (id: number) => {
        setPets(pets.filter(pet  => pet.id !== id));
        console.log(pets);

    };

    return (
        <div>
            <h1>Arrays Exercise</h1>
            <h2>Colors</h2>
            <ol>
                {colors.map((color, i) => <li key={i}>{color}</li>)}
            </ol>
            <button disabled={colors.includes("Green")} onClick={() => addColor("Green")}>Add Green</button>
            <button disabled={colors.includes("Blue")} onClick={() => addColor("Blue")}>Add Blue</button>
            <button disabled={colors.includes("Violet")} onClick={() => addColor("Violet")}>Add Violet</button>
            <h2>Pets</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map((pet, i) =>
                        <tr key={pet.id}>
                            <td>{pet.name}</td>
                            <td>{pet.type}</td>
                            <td><button onClick={(e) => handleDelete(pet.id)}>Delete</button></td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    )


}