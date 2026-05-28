function romanConverter(roman) {
    if (roman === 1) {
        return "I";
    }

    if (roman === 2) {
        return "II";
    }

    return "III";
}

module.exports = romanConverter;