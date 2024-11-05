const removeFromArray = function(...args) {
    let arr = args[0];
    let itemsToRemove = args.slice(1);
    return arr.filter(item => !itemsToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
