import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [])
    const handleBuyNow = (meal) => {
        const newCart = [...cart, meal]
        setCart(newCart);
    }
    return (
        <div className='meals-container  flex justify-between '>
            <div className="meals-container grid grid-cols-3 gap-5 mt-16 ml-9">
                {
                    meals.map(meal => <Meal
                        key={meal.id}
                        meal={meal}
                        handleBuyNow={handleBuyNow}
                    ></Meal>)
                }
            </div>
            <div className="cart-container bg-red-300 p-9">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Meals;