const romanConverter = require("../src/romanConverter");

it("It shoul return I ", () => {
    expect(romanConverter(1)).toBe("I");
});

it("It shoul return II ", () => {
    expect(romanConverter(2)).toBe("II");
});

it("It shoul return III ", () => {
    expect(romanConverter(3)).toBe("III");
});

it("It shoul return IV ", () => {
    expect(romanConverter(4)).toBe("IV");
});

it("It shoul return V ", () => {
    expect(romanConverter(5)).toBe("V");
});