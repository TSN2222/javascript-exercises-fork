//I cooked a little too hard here
const removeFromArray = function(myArray, val0, val1, val2, val3) {
    myArray.forEach((item, index) => {
        if(item === val0){
            delete myArray[index];
        } else if(item === val1) {
            delete myArray[index];
        } else if (item === val2) {
            delete myArray[index];
        } else if (item === val3) {
            delete myArray[index];
        }
    })
    const cleanArray = myArray.filter(element => element !== null);
    return cleanArray;
};

// Do not edit below this line
module.exports = removeFromArray;
