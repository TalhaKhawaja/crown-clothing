import { findAllByTitle } from '@testing-library/react';
import React from 'react';
import '../../assets/styles/collection-preview.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
        {items
            .filter((item, idx) => idx < 4)
            .map(({id, ...otherItemProps}) => (
                <CollectionItem key={id} {...otherItemProps}></CollectionItem>
            ))
        }
        </div>
    </div>
);

export default CollectionPreview;