const romanConverter = require("../src/romanConverter");

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