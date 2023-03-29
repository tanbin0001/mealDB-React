import React from 'react';


const Cart = ({ cart }) => {

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0
    for (const meal of cart) {


        // meal.quantity = meal.quantity || 1;
        totalPrice = totalPrice + meal.price * meal.quantity;
        totalShipping = totalShipping + meal.shipping;
        quantity = quantity + meal.quantity;
    }
    const tax = parseFloat((totalPrice * 7 / 100).toFixed(2));

    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div>
            <h1 className='font-bold'>Order Summary</h1>
            <p>Selected Dishes: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax}</p>
            <h6 className='font-bold'>Grand Total: ${grandTotal}</h6>
        </div>
    );
};

export default Cart; 