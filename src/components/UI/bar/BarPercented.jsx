import React from 'react';

const BarPercented = (props) => {
    const barTitle = {
        fontWeight: '400',
        fontSize: '70px',
        color: '#fff',
        textDecoration: 'underline',
        margin: '0px 0px 27px 0px'
}

    const barDesc = {
        fontSize: '20px',
        color: '#fff'
    }
    return (
        <div style={props.style}>
            <div style={{width: '225px', display: 'block'}}>
                <p style={barTitle}>{props.title}</p>
                <p style={barDesc}>{props.desc}</p>
            </div>
        </div>
    );
};

export default BarPercented;