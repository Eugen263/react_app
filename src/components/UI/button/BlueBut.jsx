import React from 'react';
import styles from './buttons.module.css';

const BlueBut = (props) => {
    return (
        <button className={styles.blueBut}>{props.value}</button>
    );
};

export default BlueBut;