import React from 'react';
import styles from './Main.module.scss'
import Poster from '../../atoms/Poster/Poster';

const Main = ({setFilm, films}) => (
    <>
        <div className={styles.mainUnit}>
            <p className={styles.category}>Latest Releases</p>
            <div className={styles.unitWithPosters}>
                {films.map((film) => (
                        <Poster setFilmInfo={setFilm} filmInfo={film} key={film.id}/>
                    )
                )}
            </div>
        </div>
        <div className={styles.back}/>
    </>
);

export default Main;
