function romanConverter(roman) {
    if (roman === 4) {
        return "IV";
    }

    if (roman >= 5) {
        return "V" + 'I'.repeat(roman - 5);
    }

    return 'I'.repeat(roman);
}

module.exports = romanConverter;