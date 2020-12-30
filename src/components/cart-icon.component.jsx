import React from 'react';
import '../assets/styles/cart-icon.scss';
import {ReactComponent as ShoppingIcon} from '../assets/images/shopping-bag.svg';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../redux/cart/cart.action';
import {selectCartItemsCount} from '../redux/cart/cart.selectors.js';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);