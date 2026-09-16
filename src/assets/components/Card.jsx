import { useState } from "react"

function Card({title, description}) {
    const[button, setButton]=useState(false)
    const mostraContenuto = () => {
        setButton(!button)
    }
    
    return (
        <div className="card">
            <div className="card-body text-start">
                <a href="#" onClick={mostraContenuto} className={button ? "btn btn-warning" : "btn btn-primary"}>{title}</a>
                {button ? <p>{description}</p> : <p></p>}
            </div>
        </div>
    )
};

export default Card;