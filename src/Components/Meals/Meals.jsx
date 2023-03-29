import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, []);
    useEffect(() => {
        const storeCart = getShoppingCart()
        const savedCart = [];
        for (const id in storeCart) {
            const addedMeal = meals.find(meal => meal.id === id)
            if (addedMeal) {
                const quantity = storeCart[id];
                addedMeal.quantity = quantity;
                savedCart.push(addedMeal)
            }

            // console.log(addedMeal);
        }
        setCart(savedCart)
    }, [meals]);

    const handleBuyNow = (meal) => {
        // const newCart = [...cart, meal]
        let newCart = [];
        const exists = cart.find(pd => pd.id === meal.id);
        if (!exists) {
            meal.quantity = 1
            newCart = [...cart, meal]
        } else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== meal.id);
            newCart = [...remaining, exists];
        }
        setCart(newCart);
        addToDb(meal.id)
    }
    return (
        <div className='meals-container  flex justify-between relative '>
            <div className="meals-container grid grid-cols-3 gap-5 mt-16 ml-9">
                {
                    meals.map(meal => <Meal
                        key={meal.id}
                        meal={meal}
                        handleBuyNow={handleBuyNow}
                    ></Meal>)
                }
            </div>
            <div className="cart-container bg-red-300 pl-2 pr-9 pt-4 fixed top-20       right-0">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Meals;