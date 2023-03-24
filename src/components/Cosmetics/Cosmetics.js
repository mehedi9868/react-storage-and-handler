import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css';
const Cosmetics = () => {
    const cosmetics = [
        { id: 1, name: 'Alta', price: 100 },
        { id: 2, name: 'Alta', price: 200 },
        { id: 3, name: 'Alta', price: 300 },
        { id: 4, name: 'Alta', price: 400 },
        { id: 5, name: 'Alta', price: 500 }
    ];
    return (
        <div>
            <h2>Welcome to my cosmetics store !!!</h2>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;