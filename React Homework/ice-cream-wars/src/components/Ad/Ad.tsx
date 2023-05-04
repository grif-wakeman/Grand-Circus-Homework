
interface AdProps {
    flavor: string;
    fontSize: number;
    darkTheme: boolean;
}

export function Ad({flavor, fontSize, darkTheme}: AdProps) {

    return (
        <div className={ darkTheme ? "designer-box darkMode" : "designer-box lightMode"}>
                <p>Vote For</p>
                <h3 style={{fontSize: fontSize}}>{flavor}</h3>
            </div>
    )
}