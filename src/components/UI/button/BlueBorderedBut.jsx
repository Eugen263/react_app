import React from 'react';
import styles from './buttons.module.css';

const BlueBorderedBut = (props) => {
    return (
        <button className={styles.blueBordered} style={props.style}>{props.value}</button>
    );
};

export default BlueBorderedBut;