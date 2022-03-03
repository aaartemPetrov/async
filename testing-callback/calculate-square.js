function calculateSquare(number, callback) {
    setTimeout(() => {
        if (typeof number != 'number') {
            let error = new Error(`Invalid type '${number}' can not be squared.`);
            return callback(error);
        }
        const result = number * number;
        callback(null, result);
    }, 5000);
}

module.exports = calculateSquare;
