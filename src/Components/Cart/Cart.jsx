import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h1 className='font-bold'>Order Summery</h1>
            <p>Selected Dishes: {cart.length}</p>
        </div>
    );
};

export default Cart; <h1>this is cart</h1>