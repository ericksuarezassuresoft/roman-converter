const romanConverter = require("../src/romanConverter");

it("It shoul return I ", () => {
    expect(romanConverter(1)).toBe("I");
});