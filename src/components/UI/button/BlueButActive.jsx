import React from 'react';
import styles from './buttons.module.css';

const BlueButActive = (props) => {
    styles.active = props.type``
    return (
        <button className={styles.active + ' ' + styles.blueButActive}>{props.value}</button>
    );
};

export default BlueButActive;