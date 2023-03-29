import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faStar } from '@fortawesome/free-solid-svg-icons'


const Meal = (props) => {
    const { name, img, category, price, ratings, shipping } = props.meal;
    const handleBuyNow = props.handleBuyNow;

    return (
        <div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Category: {category}</p>
                    <h3>Price: ${price}</h3>
                    <h3>Shipping: ${shipping}</h3>
                    <p>Ratings: {ratings} <FontAwesomeIcon className='text-red-500' icon={faStar} /></p>
                    <div className="card-actions justify-end">
                        <button onClick={() => { handleBuyNow(props.meal) }} className="btn btn-primary bg-red-500 border-none hover:bg-red-300"><span className='pr-2'>Buy Now</span><FontAwesomeIcon icon={faUtensils} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meal;