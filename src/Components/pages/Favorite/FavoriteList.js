import React from 'react';
import './FavoriteList.css';
import FavoriteFilm from '../../atoms/FavoriteFilm/FavoriteFilm';

const FavoriteList = (props) => {
    if (props.arrayWithFavorite === null || props.arrayWithFavorite.length === 0) {
        return (
            <div>
                <div className="FavoriteList">
                    <p className="category">Latest Releases</p>
                    <p className="message">It's Empty</p>
                </div>
                <div className="background"/>
            </div>
        )
    } else {
        return (
            <div>
                <div className="FavoriteList">
                    <p className="category">Favorite</p>
                    {props.arrayWithFavorite.map((item, index) => {
                        return (
                            <FavoriteFilm deleteFavoriteFilm={props.deleteFavoriteFilm} index={index} key={index}
                                          film={item}/>
                        )
                    })}
                </div>
                <div className="background"/>
            </div>
        )
    }
}

export default FavoriteList;