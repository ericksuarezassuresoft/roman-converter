function romanConverter(roman) {
    if (roman >= 10) {
        return "X" + romanConverter(roman - 10);
    }

    
    if (roman === 9) {
        return "IX";
    }
    
    if (roman === 4) {
        return "IV";
    }

    if (roman >= 5) {
        return "V" + 'I'.repeat(roman - 5);
    }

    return 'I'.repeat(roman);
}

module.exports = romanConverter;