import React from 'react';
import styles from './DescriptionUnit.module.scss';

const DescriptionUnit = ({film: {vote_average, release_date, overview}}) => (
    <div className={styles.descriptionUnit}>
        <p className={styles.info}>Score: {vote_average} | Release
            Date: {release_date}</p>
        <hr className={styles.whiteLine}/>
        <p className={styles.info}>{overview}</p>
        <hr className={styles.whiteLine}/>
    </div>
);

export default DescriptionUnit;
