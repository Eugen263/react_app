import React from 'react';
import BarHorisontalWhite from "./UI/bar/BarHorisontalWhite";
import star_icon from '../img/icons/icon_star.png';
import globe_icon from '../img/icons/icon_globe.png';
import analyse_icon from '../img/icons/icon_analyse.png';
import image_icon from '../img/icons/icon_image.png';

const ServiceBox = (props) => {
    const serviceBox = {
        margin: '0px 40px',
    }


    return (
        <div style={props.style}>
            <div style={serviceBox}>
                <div style={{display: 'flex'}}>
                    <BarHorisontalWhite src={star_icon} title='branding identity' desc='Our support team will get assistance from AI-powered.' />
                    <BarHorisontalWhite style={{marginLeft: 40}} src={globe_icon} title='Branding consult' desc='Our support team will get assistance from AI-powered.' />
                </div>
                <div style={{marginTop: 40, display: 'flex', float: 'right'}}>
                    <BarHorisontalWhite src={image_icon} title='web development' desc='Our support team will get assistance from AI-powered.' />
                    <BarHorisontalWhite style={{marginLeft: 40}} src={analyse_icon} title='market anlisys' desc='Our support team will get assistance from AI-powered.' />
                </div>
                <div style={{clear: 'both'}}></div>
            </div>
        </div>
    );
};

export default ServiceBox;