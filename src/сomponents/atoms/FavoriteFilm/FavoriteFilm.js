import React from 'react';
import styles from './FavoriteFilm.module.scss'

const FavoriteFilm = ({deleteFavoriteFilm, film, index}) => (
    <div className={styles.mainContainer}>
        <div className={styles.favoriteFilm}>
            <img className={styles.poster} alt="poster"
                 src={'http://image.tmdb.org/t/p/w342' + film.poster_path}/>
            <div className={styles.descriptionOfFavoriteFilm}>
                <div>
                    <p className={styles.title}>{film.title}</p>
                    <span onClick={(indexOfFilm) => deleteFavoriteFilm(index)}
                          className={styles.unfavoriteButton}>Unfavorite
                        </span>
                </div>
                <p className={styles.description}>{film.overview}</p>
            </div>
        </div>
        <hr className={styles.blackLine}/>
    </div>
);

export default FavoriteFilm;
