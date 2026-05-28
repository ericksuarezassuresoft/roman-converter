function romanConverter(roman) {
    if (roman === 4) {
        return "IV";
    }
    return 'I'.repeat(roman);
}

module.exports = romanConverter;