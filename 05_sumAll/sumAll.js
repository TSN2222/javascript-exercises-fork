const sumAll = function(num, numTwo) {

    if (!Number.isInteger(num) || !Number.isInteger(numTwo) || num < 0 || numTwo < 0) return 'ERROR';


    if(num > numTwo) {
        const temp = num;
        num = numTwo;
        numTwo = temp;
    }

    let sum = 0;
    for(i = num; i <= numTwo; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
