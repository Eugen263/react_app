import React from 'react';
import '../App.css';
import classes from "../styles/head.module.css";
import BlueBut from "./UI/button/BlueBut";

const Head = () => {
    return (
        <div className={"midEl " + classes.head}>
            <h1 className={classes.logoText}>FreeLancin.io</h1>
            <div className={classes.menuLinks}>
                <a href="#" className={classes.mLink}>Services</a>
                <a href="#" className={classes.mLink}>About Us</a>
                <a href="#" className={classes.mLink}>Blog</a>
            </div>
            <BlueBut value='Contact Us'/>
        </div>
    );
};

export default Head;