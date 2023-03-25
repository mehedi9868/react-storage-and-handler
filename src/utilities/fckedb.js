// use local storage to manage data:
const addToDb = (id) => {
    let shoppingCart;
    // get from local storage:
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart)
    } else {
        shoppingCart = {}
    }

    // inject or update quantity:
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }
    // set to local storage:
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

// remove specefic item from local storage:
const removeFromDb = (id) => {
    // get from local storage:
    const storedCart = localStorage.getItem('shopping-cart');
    const shoppingCart = JSON.parse(storedCart);
    if (shoppingCart) {
        if (id in shoppingCart) {
            delete shoppingCart[id];
            // set to local storage:
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
}

export {
    addToDb,
    removeFromDb
};