const integerToRoman = require("../src/integerToRoman");
const romanToInteger = require("../src/romanToInteger");

it("It should return I", () => {
    expect(integerToRoman(1)).toBe("I");
});

it("It should return II", () => {
    expect(integerToRoman(2)).toBe("II");
});

it("It should return III", () => {
    expect(integerToRoman(3)).toBe("III");
});

it("It should return IV", () => {
    expect(integerToRoman(4)).toBe("IV");
});

it("It should return V", () => {
    expect(integerToRoman(5)).toBe("V");
});

it("It should return VI", () => {
    expect(integerToRoman(6)).toBe("VI");
});

it("It should return IX", () => {
    expect(integerToRoman(9)).toBe("IX");
});

it("It should return X", () => {
    expect(integerToRoman(10)).toBe("X");
});

it("It should return XI", () => {
    expect(integerToRoman(11)).toBe("XI");
});

it("It should return XL", () => {
    expect(integerToRoman(40)).toBe("XL");
});

it("It should return L", () => {
    expect(integerToRoman(50)).toBe("L");
});

it("It should return XC", () => {
    expect(integerToRoman(90)).toBe("XC");
});

it("It should return 1", () => {
    expect(romanToInteger('I')).toBe(1);
});

it("It should return 2", () => {
    expect(romanToInteger('II')).toBe(2);
});

it("It should return IV", () => {
    expect(romanToInteger('IV')).toBe(4);
});

it("It should return V", () => {
    expect(romanToInteger('V')).toBe(5);
});

it("It should return VI", () => {
    expect(romanToInteger('VI')).toBe(6);
});

it("It should return IX", () => {
    expect(romanToInteger('IX')).toBe(9);
});

it("It should return X", () => {
    expect(romanToInteger('X')).toBe(10);
});

it("It should return XI", () => {
    expect(romanToInteger('XI')).toBe(11);
});

it("It should return XL", () => {
    expect(romanToInteger('XL')).toBe(40);
});

it("It should return L", () => {
    expect(romanToInteger('L')).toBe(50);
});

it("It should return XC", () => {
    expect(romanToInteger('XC')).toBe(90);
});

it("It should return C", () => {
    expect(romanToInteger('C')).toBe(100);
});