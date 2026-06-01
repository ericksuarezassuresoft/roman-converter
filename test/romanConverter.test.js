const romanConverter = require("../src/romanConverter");
const romanToInteger = require("../src/romanToInteger");

it("It should return I", () => {
    expect(romanConverter(1)).toBe("I");
});

it("It should return II", () => {
    expect(romanConverter(2)).toBe("II");
});

it("It should return III", () => {
    expect(romanConverter(3)).toBe("III");
});

it("It should return IV", () => {
    expect(romanConverter(4)).toBe("IV");
});

it("It should return V", () => {
    expect(romanConverter(5)).toBe("V");
});

it("It should return VI", () => {
    expect(romanConverter(6)).toBe("VI");
});

it("It should return IX", () => {
    expect(romanConverter(9)).toBe("IX");
});

it("It should return X", () => {
    expect(romanConverter(10)).toBe("X");
});

it("It should return XI", () => {
    expect(romanConverter(11)).toBe("XI");
});

it("It should return XL", () => {
    expect(romanConverter(40)).toBe("XL");
});

it("It should return L", () => {
    expect(romanConverter(50)).toBe("L");
});

it("It should return XC", () => {
    expect(romanConverter(90)).toBe("XC");
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