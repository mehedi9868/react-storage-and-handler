import React from 'react';

const Cosmetic = (props) => {
    const { cosmetic } = props;
    const { name, price, id } = cosmetic;
    return (
        <div>
            <h2>Buy This:{name}</h2>
            <p>Price:${price}</p>
            <p><small>ID:{id}</small></p>
        </div>
    );
};

export default Cosmetic;