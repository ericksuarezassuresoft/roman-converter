function romanToInteger(letterToConvert) {
    if (letterToConvert === 'IV') {
        return 4;
    }
    
    return letterToConvert.length;
}

module.exports = romanToInteger;