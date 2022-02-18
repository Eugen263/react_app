import React from 'react';
import '../App.css';
import BlueButActive from "./UI/button/BlueButActive";


const Projects = (props) => {
    return (
        <div className={'midEl'}>
            <div style={props.style}>
                <h2 className={'modTitle'}>Our Projects</h2>
                <p className={'modDesc'}>We have been providing great flooring solutions service.</p>
                <div>
                    <BlueButActive type='butActive' value='All' />
                </div>
            </div>
        </div>
    );
};

export default Projects;