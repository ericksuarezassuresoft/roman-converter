const integerToRoman = require("./integerToRoman");
const romanToInteger = require("./romanToInteger");

const input = process.argv[2];
const number = Number(input);

if (Number.isInteger(number) && input.trim() !== '') {
    console.log("Output:", integerToRoman(number));
} else {
    console.log("Output:", romanToInteger(input));
}
