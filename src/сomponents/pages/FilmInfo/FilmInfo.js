import React, {useCallback, useEffect, useState} from 'react';
import styles from './FilmInfo.module.scss'
import DescriptionUnit from '../../atoms/DescriptionUnit/DescriptionUnit';
import {useHistory} from "react-router-dom";

const FilmInfo = ({arrayWithFavorite, deleteFromFavorite, changeFilmToNext, addToFavoriteFunction, film}) => {
    const [addStatus, changeAddStatus] = useState(false)
    const history = useHistory();

    const HandleAddressHome = useCallback(() => {
        history.push('/');
    }, [history]);

    const HandleAddressNextFilm = useCallback(() => {
        changeFilmToNext(film.id);
        history.push('/film');
    }, [history, film.id, changeFilmToNext]);

    const handleDeleteFromFavorite = useCallback((film) => {
        deleteFromFavorite(film);
    }, [deleteFromFavorite]);

    useEffect(() => {
        let checkStatus = false;
        if (arrayWithFavorite !== null) {
            arrayWithFavorite.forEach(function (item) {
                if (item.id === film.id) {
                    checkStatus = true;
                    changeAddStatus(true);
                }
                if (!checkStatus) {
                    changeAddStatus(false);
                }
            })
        }
    }, [arrayWithFavorite, film]);

    return (
        <div className={styles.filmInfoPage}>
            <div className={styles.unitWithButtons}>
                <span onClick={HandleAddressHome} className={styles.navButton}>Back to list</span>
                <span onClick={HandleAddressNextFilm} className={styles.navButton}>Next
                    Movie</span>
            </div>
            <div className={styles.unitWithInfo}>
                <img alt="poster" src={'http://image.tmdb.org/t/p/w342' + film.poster_path}/>
                <div className={styles.infoUnit}>
                    <div className={styles.titleUnit}>
                        <p>{film.title} ({film.release_date.substr(0, 4)})</p>
                        {addStatus ?
                            <span className={styles.favoriteButton}
                                  onClick={handleDeleteFromFavorite}>Delete
                                from favorite</span> :
                            <span onClick={addToFavoriteFunction} className={styles.favoriteButton}>Add to
                                favorite</span>}
                    </div>
                    <DescriptionUnit film={film}/>
                </div>
            </div>
        </div>
    );
};

export default FilmInfo;
