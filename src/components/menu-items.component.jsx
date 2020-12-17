import React from 'react';
import '../assets/styles/menu-items.scss';

const MenuItem = ({title, imageUrl, size}) => (
    <div className={`${size} menu-item`}>
    <div className='background-image' style={{
        backgroundImage: `url(${imageUrl})`
        }}></div>
        <div class='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;