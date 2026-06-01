function romanToInteger(letterToConvert) {
    if (letterToConvert.startsWith("XI")) {
        return 11;
    }

    if (letterToConvert.startsWith("X")) {
        return 10;
    }

    if (letterToConvert.startsWith("IX")) {
        return 9;
    }

    if (letterToConvert.startsWith("V")) {
        return 5 + romanToInteger(letterToConvert.slice(1));
    }

    if (letterToConvert === 'IV') {
        return 4;
    }

    return letterToConvert.length;
}

module.exports = romanToInteger;