import { Link } from 'react-router-dom'

import './style.scss'

export function Header(){
return(
    <>
    <header>
        <div className="logo">
        <Link to = "/">
        <img src='https://www.pngkey.com/png/full/133-1338872_-hayao-miyazaki-princess-mononoke-ponyo-spirited-away.png' alt='Studio Glibli'/>
         </Link>          
        </div>  
    </header>
    </>
)
}