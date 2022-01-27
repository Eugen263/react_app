import React from 'react';

const Bar = (props) => {
    const img_styles = {
        display: 'block',
        margin: 'auto',
        width: '70px'
    }

    return (
        <div style={props.style}>
            <div style={{width: '290px', display: 'inline-block'}}>
                <img style={img_styles} src={props.src} alt=""/>
                <p style={{fontSize: '20px', textAlign: 'center'}}>{props.title}</p>
                <p style={{fontSize: '16px', textAlign: 'center', color: '#757575'}}>{props.desc}</p>
            </div>
        </div>
    );
};

export default Bar;