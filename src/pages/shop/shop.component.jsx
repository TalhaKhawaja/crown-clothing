import React from 'react';
import CollectionPreview from '../../components/collection-preview.component';
import { createStructuredSelector } from 'reselect';
import {selectCollections} from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';

const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);