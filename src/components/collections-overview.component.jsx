import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import '../assets/styles/collections-overview.scss'
import CollectionPreview from './collection-preview.component';
import {selectCollectionsForPreview} from '../redux/shop/shop.selectors';


const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {
        collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);