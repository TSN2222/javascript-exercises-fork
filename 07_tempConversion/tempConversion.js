const convertToCelsius = function(temp) {
  let c = ((temp - 32) * (5/9));
  c = parseFloat(c.toFixed(1))

  return c; 
};

const convertToFahrenheit = function(temp) {
  let f = ((temp * (9/5)) + 32);
  f = parseFloat(f.toFixed(1));

  return f;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
