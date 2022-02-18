import React from 'react';

const BarHorisontalWhite = (props) => {
    const barBlock = {
        background: '#fff',
        borderRadius: '15px',
        boxShadow: '#F1F3F7 0px 0px 20px 0px',
        display: 'flex',
        alignItems: 'center'
    }

    const barTitle = {
        textTransform: 'uppercase',
        fontSize: '20px',
        margin: '0px 0px 24px 0px'
    }

    const barDesc = {
        fontSize: '16px',
        color: '#2C3847',
        margin: 0
    }

    const barImg = {
        margin: '58px 28px',
        width: '50px',
        height: '50px',
        backgroundImage: 'url(' + props.src + ')',
        backgroundSize: '100% auto',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div style={props.style}>
            <div style={barBlock}>
                <div style={barImg}></div>
                <div style={{width: '218px', margin: '38px 60px 31px 0px'}}>
                    <h3 style={barTitle}>{props.title}</h3>
                    <p style={barDesc}>{props.desc}</p>
                </div>
            </div>
        </div>
    );
};

export default BarHorisontalWhite;