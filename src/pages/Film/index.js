import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './style.scss';

export function Film() {
    const { id } = useParams();
    const [film, setFilm] = useState([]);


    useEffect(() => {
        async function getFilm() {
            const response = await fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
            const data = await response.json();
            setFilm(data)
        }
        getFilm()
    }
        , [id])

    return (
        <>
            <div className='film-container'>
                <div className='film-aside-left'>
                    <div className='film-titles'>
                        <h1>{film.title}</h1>
                        <h2>{film.original_title} ( {film.release_date}) </h2>
                    </div>
                    <div className='film-infos'>
                        <div className='film-infos-diretor'>
                            Director <br />
                            {film.director}
                        </div>
                        <div className='film-infos-producer'>
                            Producer <br />
                            {film.producer}
                        </div>
                        <div className='film-infos-time'>
                            Running Time <br />
                            {film.running_time}m
                        </div>
                    </div>
                </div>

                <div className='film-aside-right'>
                    <img src={film?.movie_banner} alt={film.original_title} />
                </div>

                <div className='film-aside-middle'>
                    {film.description}
                </div>
            </div>
        </>
    );
}