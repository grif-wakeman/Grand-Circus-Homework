import { useState } from "react";

export function Typing() {

    const [message, setMessage] = useState("");

    return (
        <div>
            <label htmlFor="message">Type something: </label>
            <input type="text" name="message" value={message}
                onChange={e => setMessage(e.target.value)} />
            <p>{message}</p>
        </div>
    )
}