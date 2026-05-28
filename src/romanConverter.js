function romanConverter(roman) {
    if (roman === 5) {
        return "V";
    }
    
    if (roman === 4) {
        return "IV";
    }
    return 'I'.repeat(roman);
}

module.exports = romanConverter;