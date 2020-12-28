import React from 'react';
import '../assets/styles/cart-icon.scss';
import {ReactComponent as ShoppingIcon} from '../assets/images/shopping-bag.svg';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../redux/cart/cart.action';

const CartIcon = ({toggleCartHidden}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);