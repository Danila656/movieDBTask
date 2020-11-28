import React, {useCallback} from 'react';
import styles from './Poster.module.scss'
import {useHistory} from "react-router-dom";

const Poster = ({setFilmInfo, filmInfo}) => {
    const history = useHistory();

    const handleClick = useCallback(() => {
        setFilmInfo(filmInfo);
        history.push('/film');
    }, [history, filmInfo, setFilmInfo]);

    return (
        <div className={styles.poster}>
            <span onClick={handleClick}>
                <img alt="poster" src={'http://image.tmdb.org/t/p/w342' + filmInfo.poster_path}/>
            </span>
        </div>
    );
};

export default Poster;
