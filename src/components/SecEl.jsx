import React from 'react';
import Bar from "./UI/bar/Bar";
import peoples_img from '../img/icons/icon_peoples.png';
import science_img from '../img/icons/icon_science.png';
import graphic_img from '../img/icons/icon_graphic.png';
import bg_shape from '../img/BG_shape.png';
import BarPercented from "./UI/bar/BarPercented";
import styles from '../styles/secEl.module.css';

const SecEl = () => {
    const bg = {
        backgroundImage: 'url(' + bg_shape +')',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        borderRadius: '20px',
        padding: ' 0px 136px 78px 122px',
        marginBottom: '140px'
    }

    return (
        <div className={'midEl'}>
            <div style={{display: 'flex', padding: '140px 40px 100px 40px', alignItems: 'baseline'}}>
                <Bar width='290px' style={{flex: '1'}} src = {peoples_img} title = 'Grow your audience' desc = 'Find new customers and build your email list with lead generation ..' />
                <Bar width='290px' style={{flex: '1'}} src = {graphic_img} title = 'Boost online sales' desc = 'Market your ecommerce business and deliver experiences ..' />
                <Bar width='290px' src = {science_img} title = 'Sell your knowledge' desc = 'Build a following, engage them with your content ..' />
            </div>
            <div style={bg}>
                <h2 className={styles.secElTitle}>Journey of our Success</h2>
                <div style={{display: 'flex', alignItems: 'baseline'}}>
                    <BarPercented style={{flex: '1'}} title='85%' desc='manage communication more efficiently' />
                    <BarPercented style={{flex: '1'}} title='95%' desc='improve communication with customers and clients' />
                    <BarPercented title='75%' desc='average improvement in team efficiency' />
                </div>
            </div>
        </div>
    );
};

export default SecEl;