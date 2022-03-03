function getNumber(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof number !== 'number') return reject(new Error('NaN'));
            else return resolve(number);
        }, 2000);
    });
}

//sequential
(async function() {
    let firstPromise = await getNumber(10);
    let secondPromise = await getNumber(20);
    console.log(firstPromise, secondPromise);
})();

//parallel
(async function() {
    let firstPromise = getNumber(100);
    let secondPromise = getNumber(200);
    let firstValue = await firstPromise;
    let secondValue = await secondPromise;
    console.log(firstValue, secondValue);
})(); 