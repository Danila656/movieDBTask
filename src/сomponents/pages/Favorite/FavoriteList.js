import React from 'react';
import styles from './FavoriteList.module.scss';
import FavoriteFilm from '../../atoms/FavoriteFilm/FavoriteFilm';

const FavoriteList = ({deleteFavoriteFilm,arrayWithFavorite}) => {
    if (!arrayWithFavorite) {
        return (
            <div>
                <div className={styles.favoriteList}>
                    <p className={styles.category}>Latest Releases</p>
                    <p className={styles.message}>It's Empty</p>
                </div>
                <div className={styles.background}/>
            </div>
        )
    } else {
        return (
            <div>
                <div className={styles.favoriteList}>
                    <p className={styles.category}>Favorite</p>
                    {arrayWithFavorite.map((item, index) =>  (
                            <FavoriteFilm deleteFavoriteFilm={deleteFavoriteFilm} film={item} index={index} key={item.id}/>
                        )
                    )}
                </div>
                <div className={styles.background}/>
            </div>
        );
    }
};

export default FavoriteList;
