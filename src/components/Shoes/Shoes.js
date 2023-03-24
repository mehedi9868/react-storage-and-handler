import React from 'react';
import { multiply } from '../../utilities/calculate';

const Shoes = () => {
    const firstNum = 10;
    const secondNum = 20;
    const total = multiply(firstNum, secondNum);
    return (
        <div>
            <h3>This is shoes componemt.</h3>
            <p>Total:{total}</p>
        </div>
    );
};

export default Shoes;