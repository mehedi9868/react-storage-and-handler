import React from 'react';
import add, { division, multiply, subtraction, vagses } from '../../utilities/calculate';
import './Cosmetics.css';
const Cosmetics = () => {
    const firstNumber = 10;
    const secondNumber = 20;
    const total = add(firstNumber, secondNumber);
    const result = multiply(firstNumber, secondNumber);
    const subResult = subtraction(firstNumber, secondNumber);
    const divResult = division(firstNumber, secondNumber);
    const modulusResult = vagses(firstNumber, secondNumber); // must use alias.
    return (
        <div>
            <h2>Welcome to my cosmetics store !!!</h2>
            <p>Total:{total}</p>
            <p>Sub Result:{subResult}</p>
            <p>Div Result:{divResult}</p>
            <p>Multiply Result:{result}</p>
            <p>Remaining:{modulusResult}</p>
        </div>
    );
};

export default Cosmetics;