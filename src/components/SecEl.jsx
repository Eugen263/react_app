import React from 'react';
import Bar from "./UI/bar/Bar";
import peoples_img from '../img/icons/icon_peoples.png';
import science_img from '../img/icons/icon_science.png';
import graphic_img from '../img/icons/icon_graphic.png';

const SecEl = () => {
    return (
        <div className={'midEl'}>
            <div style={{display: 'flex', padding: '140px 40px 100px 40px'}}>
                <Bar style={{flex: '1'}} src = {peoples_img} title = 'Grow your audience' desc = 'Find new customers and build your email list with lead generation ..' />
                <Bar style={{flex: '1'}} src = {graphic_img} title = 'Boost online sales' desc = 'Market your ecommerce business and deliver experiences ..' />
                <Bar src = {science_img} title = 'Sell your knowledge' desc = 'Build a following, engage them with your content ..' />
            </div>
        </div>
    );
};

export default SecEl;