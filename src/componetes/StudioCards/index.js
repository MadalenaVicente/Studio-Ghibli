import { useEffect, useState } from "react";
import { Movie } from "../Movie";
import './style.scss'

export function StudioCards({films}){
    const [active, setActive] = useState('')

    useEffect(() => {
        setActive('')
    }, [films])
    
    return(
        <div className="films-container">
            <div className="films-body">
                <Movie />
            </div>
        </div>

    
    )
}