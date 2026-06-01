function romanToInteger(letterToConvert) {
    if (letterToConvert.startsWith("V")) {
        return 5 + romanToInteger(letterToConvert.slice(1));
    }

    if (letterToConvert === 'IV') {
        return 4;
    }

    return letterToConvert.length;
}

module.exports = romanToInteger;