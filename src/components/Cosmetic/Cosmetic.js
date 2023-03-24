import React from 'react';

const Cosmetic = (props) => {
    const { cosmetic } = props;
    const { name, price } = cosmetic;
    return (
        <div>
            <h2>Buy This:{name}</h2>
            <p>Price:${price}</p>
        </div>
    );
};

export default Cosmetic;