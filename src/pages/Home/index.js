import { useEffect, useState } from "react"
import { Movie } from "../../componetes/Movie";
import './styles.scss'
import { Search } from "../../componetes/Search";

export function Home(){

    const [ films, setFilm ] = useState([]);
    const[search,setSearch] = useState("");

    useEffect(() => {
        async function getFilm(){
            const response = await fetch('https://ghibliapi.herokuapp.com/films/');
            const data = await response.json();
            setFilm(data)
        }
        getFilm();
    }, [])

    const filteredFilms = films.filter( film => film.title.toLowerCase().includes(search))

  function getSearchValue(e){
    e.preventDefault()
    setSearch(e.target.value.toLowerCase())
    
  }


    return(
        <main className="home">
        <div className="for-search">
        <Search 
        search={getSearchValue}/>
        </div>
            <div className="container">
                {filteredFilms.map( film =>
                    <Movie 
                        id={film.id}
                        image={film.image}
                        title={film.title}
                        subtitle={film.original_title}
                    />
                )}
            </div>
        </main>


    )
}