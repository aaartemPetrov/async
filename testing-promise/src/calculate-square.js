function calculateSquare(number) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof number !== 'number')
                return reject(new Error('Invalid type: Cant square, not a number.'));
            resolve(number * number);
            }, 1000);
    });
    return promise;
}

module.exports = calculateSquare;