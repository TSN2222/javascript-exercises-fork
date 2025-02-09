const repeatString = function(string, num) {
    if(num < 0) return 'ERROR';

    let phrase = '';
    for(i = 0; i < (num); i++) {
        phrase += string;
    }
    return phrase;
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
