import React from 'react';
import './FavoriteFilm.css'

const FavoriteFilm = (props) => {
    return (
        <div>
            <div className={"favoriteFilm"}>
                <img className="poster" alt="poster" src={"http://image.tmdb.org/t/p/w342" + props.film.poster_path}/>
                <div className="descriptionOfFavoriteFilm">
                    <div>
                        <p className="title">{props.film.title}</p>
                        <a href="# " onClick={(index) => props.deleteFavoriteFilm(props.index)}
                           className="unfavoriteButton">Unfavorite
                        </a>
                    </div>
                    <p className="description">{props.film.overview}</p>
                </div>
            </div>
            <hr className="blackLine"/>
        </div>
    )
}

export default FavoriteFilm;