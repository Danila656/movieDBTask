import React from 'react';
import './DescriptionUnit.css';

const DescriptionUnit = (props) => {
    return (
        <div className="descriptionUnit">
            <p className="info">Score: {props.film.vote_average} | Release
                Date: {props.film.release_date}</p>
            <hr className="whiteLine"/>
            <p className="info">{props.film.overview}</p>
            <hr className="whiteLine"/>
        </div>
    )
}

export default DescriptionUnit;