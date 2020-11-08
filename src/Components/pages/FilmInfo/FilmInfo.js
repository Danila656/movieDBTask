import React, {useEffect, useState} from 'react';
import './FilmInfo.css'
import DescriptionUnit from '../../atoms/DescriptionUnit/DescriptionUnit';

const FilmInfo = (props) => {
    const [addStatus, changeAddStatus] = useState(false)

    useEffect(() => {
        let AddStatus = false;
        if (props.arrayWithFavorite !== null) {
            props.arrayWithFavorite.forEach(function (item) {
                if (item.id === props.film.id) {
                    AddStatus = true;
                    changeAddStatus(true);
                }
                if (!AddStatus) {
                    changeAddStatus(false);
                }
            })
        }
    }, [props.arrayWithFavorite]);

    return (
        <div className="filmInfoPage">
            <div className="unitWithButtons">
                <a href="/ " className="navButton">Back to list</a>
                <a href="# " onClick={(film) => props.changeFilmToNext(props.film.id)} className="navButton">Next
                    Movie</a>
            </div>
            <div className="unitWithInfo">
                <img alt="poster" src={'http://image.tmdb.org/t/p/w342' + props.film.poster_path}/>
                <div className="infoUnit">
                    <div className="titleUnit">
                        <p>{props.film.title} ({props.film.release_date.substr(0, 4)})</p>
                        {addStatus ?
                            <a href="# " className="favoriteButton"
                               onClick={(film) => props.deleteFromFavorite(props.film)}>Delete
                                from favorite</a> :
                            <a href="# " onClick={props.addToFavoriteFunction} className="favoriteButton">Add to
                                favorite</a>}
                    </div>
                    <DescriptionUnit film={props.film}/>
                </div>
            </div>
        </div>
    )
}

export default FilmInfo;