import { Link } from 'react-router-dom';
import './style.scss'

export function Movie({id, title, image, original_title_romanised}) {

    return(
         <div className="card">
            <Link to={`film/${id}`}>
                <div className="card-image"><img src={image} alt={original_title_romanised} /></div>
                <div className="card-title">{title}</div>
            </Link>
        </div>
        )
    }