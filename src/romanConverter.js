function romanConverter(roman) {
    if (roman === 5) {
        return "V";
    }

    if (roman === 4) {
        return "IV";
    }

    if (roman === 6) {
        return "VI";
    }
    
    return 'I'.repeat(roman);
}

module.exports = romanConverter;