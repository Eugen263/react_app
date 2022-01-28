import React from 'react';
import styles from '../styles/features.module.css';
import Bar from "./UI/bar/Bar";
import '../App.css';
import settings_img from "../img/icons/icon_settings.png";
import human_img from "../img/icons/icon_human.png";
import mail_img from "../img/icons/icon_mail.png";
import phone_img from "../img/icons/icon_phone.png";

const Features = (props) => {
    return (
        <div className={'midEl'}>
            <div className={styles.featDiv} id={'features'} style={props.style}>
                <h2 className={'modTitle'}>Our Features</h2>
                <p className={'modDesc'}>Unleash your creativety with a visual collaboration plattorm that enables effective ideation</p>
                <div style={{display: 'flex'}}>
                    <Bar width='208px' style={{flex: '1'}} src = {settings_img} title = 'Choosing a Service' desc = 'Choosing an accountant that matches your needs' />
                    <Bar width='208px' style={{flex: '1'}} src = {human_img} title = 'Our Clients Say' desc = 'Read the reviews from some of our satisfied clients'/>
                    <Bar width='208px' style={{flex: '1'}} src = {mail_img} title = 'Initial Consultation' desc = 'Understanding your accountancy requirements'/>
                    <Bar width='208px' src = {phone_img} title = 'Request a Callback' desc = 'Lets talk at a more convenient time for you'/>
                </div>
                <a className={styles.featLearn} href="#">Learn more ></a>
            </div>
        </div>
    );
};

export default Features;