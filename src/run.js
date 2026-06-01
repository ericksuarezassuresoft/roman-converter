const romanConverter = require("./integerToRoman");

const input = process.argv[2];

if (typeof input === 'number') {
    console.log("Output:", integerToRoman(input));
} else {
    console.log("Output:", romanToInteger(input));
}
