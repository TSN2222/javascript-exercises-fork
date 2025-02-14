const leapYears = function(num) {

    if (!Number.isInteger) return 'ERROR';

    if(num % 100 === 0 && !(num % 400 === 0)) {
        return false;
    } else if (num % 4 === 0 || num % 400 === 0) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
