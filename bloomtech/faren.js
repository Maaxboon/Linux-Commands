// This a a variable declaring today's forecast. We use let as we expect the variable to change
const kelvin = 293;

// Converting kelvin to celsius
const celsius = kelvin - 273;

// Converting kelvin to fahrenheit using let to create the variable
let fahrenheit = celsius * (9 / 5) + 32;

// rounding down the number in farenheit

fahrenheit = Math.floor(fahrenheit);

// printing the value of fahrenheit
console.log(`The temperature is ${fahrenheit} Fahrenheit.`);
