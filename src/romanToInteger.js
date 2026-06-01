function romanToInteger(letterToConvert) {
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let result = 0;

    for (let i = 0; i < letterToConvert.length; i++) {
        const current = values[letterToConvert[i]];
        const next = values[letterToConvert[i + 1]];

        if (current < next) {
            result -= current;
        } else {
            result += current;
        }
    }

    return result;
}

module.exports = romanToInteger;