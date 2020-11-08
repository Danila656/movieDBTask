import React from 'react';
import './Main.css'
import Poster from '../../atoms/Poster/Poster';

const Main = (props) => (
    <div className="mainUnit">
        <p className="category">Latest Releases</p>
        <div className="unitWithPosters">
            {props.films.map((film, index) => {
                return (
                    <Poster setFilm={props.setFilm} key={index} filmInfo={film}/>
                )
            })}
        </div>
    </div>
);

export default Main;
