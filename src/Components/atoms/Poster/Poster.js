import React from 'react';
import './Poster.css'

const Poster = (props) => {
    return (
        <div className="poster">
            <a onClick={(film) => props.setFilm(props.filmInfo)} href="/film ">
                <img alt="poster" src={"http://image.tmdb.org/t/p/w342" + props.filmInfo.poster_path}/>
            </a>
        </div>
    )
};

export default Poster;
