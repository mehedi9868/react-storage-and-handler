import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fckedb';
import './Cosmetic.css';
const Cosmetic = (props) => {
    const { cosmetic } = props;
    const { name, price, id } = cosmetic;
    const handleCart = (id) => {
        addToDb(id);
    }
    const handleRemove = (id) => {
        removeFromDb(id);
    }

    return (
        <div className='product'>
            <h2>Buy This:{name}</h2>
            <p>Price:${price}</p>
            <p><small>ID:{id}</small></p>
            <button onClick={() => handleCart(id)}>Add to Cart</button>
            <button onClick={() => handleRemove(id)}>Remove</button>
        </div>
        // use wrapper '()=>' to onClick to pass parameters.
    );
};

export default Cosmetic;