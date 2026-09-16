import { useState } from "react";

function Button({ title, printCard }) {
    const [button, setButton] = useState(false)
    const handleClick = () => {
        setButton(!button)
        printCard()
    }
    return (
        <button onClick={handleClick} className={button ? "btn btn-warning" : "btn btn-primary"} type="button">{title}</button>
    )
}

export default Button;