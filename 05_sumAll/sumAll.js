const sumAll = function(smaller, larger) {
    if (!Number.isInteger(smaller) || !Number.isInteger(larger)
        || smaller < 0 || larger < 0) return "ERROR";
    let sum = 0;
    if (smaller > larger) {
        let temp = larger;
        larger = smaller;
        smaller = temp;
    }

    for (let i = smaller; i <= larger; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
