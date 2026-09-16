import { useState } from "react"

function Card({title, description}) {
    
    
    return (
        <>
        <div className="card">
            <div className="card-body text-start">
                <h5>{title}</h5>
                <p>{description}</p> 
            </div>
        </div>
        
        </>
    )
};

export default Card;