import "./Header.css"

interface User {
    name: string;
}

export function Header({ name }: User) {

    return (
        <header className="Header">
            <div>
                <p>Welcome {name}</p>
            </div>
            <h1>Ice Cream Wars</h1>
        </header>
    )
}