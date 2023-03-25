const add = (num1, num2) => {
    return num1 + num2;
}
const multiply = (num1, num2) => {
    return num1 * num2;
}
const subtraction = (num1, num2) => {
    return Math.abs(num1 - num2); // returns absolute value.
}
const division = (num1, num2) => {
    return (num1 / num2);
}
const modulus = (num1, num2) => {
    return num1 % num2;
}

//reduce method:
const getTotalPrice = (cosmetics) => {
    const sumReducer = (previousValue, currentValue) => previousValue + currentValue.price; // array of object
    const totalPrice = cosmetics.reduce(sumReducer, 0);
    return totalPrice;

}
export default add; // we can export one as default. (optional)
export {
    //add, //we can export add from here directly.
    multiply,
    subtraction,
    division,
    modulus as vagses, // we can change name when export.
    getTotalPrice as totalPrice //alias
};