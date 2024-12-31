import React from 'react';

const FoodCard = ({ item }) => {
    const { image, name, price, recipe } = item;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <p className='bg-slate-900 text-white absolute top-3 right-5 rounded px-2 py-1'>${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title font-bold text-2xl">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-500">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;