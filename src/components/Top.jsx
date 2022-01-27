import React from 'react';
import Head from "./Head";
import styles from '../styles/top.module.css';
import back from '../img/Header_Image.png';
import './../App.css';
import BlueBut from "./UI/button/BlueBut";
import BlueBorderedBut from "./UI/button/BlueBorderedBut";
const Top = () => {
    const bg = {
        backgroundImage: 'url('+back+')'
    }
    return (
        <div style={bg}>
            <div className={'midEl elHeight ' + styles.topDiv}>
                <Head />
                <div className={styles.topText}>
                    <h2 className={styles.topTitle}>Find & Hire Expert Freelancers</h2>
                    <p className={styles.topDesc}>Work with the best freelance talent from around the world on our secure flexible and cost-effective platform.</p>
                    <BlueBut value = 'Contact Us'/>
                    <BlueBorderedBut style={{marginLeft: '20px'}} value = 'Learn More'/>
                </div>
            </div>
        </div>
    );
};

export default Top;