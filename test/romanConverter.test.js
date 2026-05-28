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
