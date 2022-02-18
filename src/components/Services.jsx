import React from 'react';
import ServiceBox from "./ServiceBox";

const Services = (props) => {
    const serDiv = {
        marginBottom: '195px'
    }
    return (
        <div style={serDiv} className={'midEl'}>
            <div id={'services'} style={props.style}>
                <h2 className={'modTitle'}>Services</h2>
                <p className={'modDesc'}>Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests.</p>
                <div>
                    <ServiceBox />
                </div>
            </div>
        </div>
    );
};

export default Services;