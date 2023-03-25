import React, { useEffect, useState } from 'react';
import { totalPrice } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css';
const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('generated.json')
            .then(res => res.json())
            .then(data => setCosmetics(data));
    }, []);
    const total = () => {
        return totalPrice(cosmetics);
    }
    return (
        <div>
            <h2>Welcome to my cosmetics store !!!</h2>
            <h3>Total Money Needed: ${total()}</h3>
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