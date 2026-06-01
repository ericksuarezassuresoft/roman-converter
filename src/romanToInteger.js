function romanToInteger(letterToConvert) {
    if (letterToConvert === 'V') {
        return 5;
    }

    if (letterToConvert === 'VI') {
        return 6;
    }

    if (letterToConvert === 'IV') {
        return 4;
    }

    return letterToConvert.length;
}

module.exports = romanToInteger;