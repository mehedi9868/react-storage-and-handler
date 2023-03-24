import React from 'react';
import './Cosmetic.css';
const Cosmetic = (props) => {
    const { cosmetic } = props;
    const { name, price, id } = cosmetic;
    const handleCart = (id) => {
        console.log('product added:', id);
    } // use wrapper '()=>' to onClick to pass parameters. 
    return (
        <div className='product'>
            <h2>Buy This:{name}</h2>
            <p>Price:${price}</p>
            <p><small>ID:{id}</small></p>
            <button onClick={() => handleCart(id)}>Add to Cart</button>
        </div>
    );
};

export default Cosmetic;