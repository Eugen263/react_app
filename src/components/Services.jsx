import React from 'react';
import styles from "../styles/services.module.css";

const Services = (props) => {
    return (
        <div className={'midEl'}>
            <div className={styles.serDiv} id={'services'} style={props.style}>
                <h2 className={'modTitle'}>Services</h2>
                <p className={'modDesc'}>Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests.</p>
                <div style={{display: 'flex'}}>

                </div>
                <a className={styles.featLearn} href="#">Learn more ></a>
            </div>
        </div>
    );
};

export default Services;