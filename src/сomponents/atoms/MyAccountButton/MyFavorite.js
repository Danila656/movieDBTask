import React, {useCallback} from 'react';
import styles from './MyFavorite.module.scss'
import {useHistory} from 'react-router-dom';

const MyFavorite = () => {
    const history = useHistory();

    const handleClick = useCallback(() => history.push('/favorite'), [history]);

    return (
        <span onClick={handleClick} className={styles.myAccountButton}>My favorite</span>
    );
};

export default MyFavorite;
