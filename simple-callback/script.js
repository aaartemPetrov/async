
function one() {
    const callback = (error, data) => {
        console.log(data);
        two();
        three();
        four();
    }

    let fs = require('fs');
    fs.readFile('number1.txt', 'utf-8', callback);
}

function two() {
    let number = 2;
    console.log(number);
}

function three() {
    function getNumber() {
        return 3;
    }
    console.log(getNumber());
}

function four() {
    console.log(4);
}

one();

function square(number, callback) {
    setTimeout(() => {
        if (typeof number != 'number') {
            let error = new Error(`Invalid type '${number}' can not be squared.`);
            return callback(error);
        }
        const result = number * number;
        callback(null, result);
    }, 5000);
}

square(true, (error, result) => {
    if (error != null) return console.log('Asynchronous exception: ' + String(error));
    else console.log(result);
})

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('result');
    }, 2000);
})

promise.then(
    onFulfilled => {
        console.log(onFulfilled);
    },
    onRejected => {
        console.log(new Error("ERROR"));
    });

function asyncSquare(number) {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof number !== 'number')
                reject(new Error(`Type error: '${number}' not a number.`));
            let result = number * number;
            resolve(result);
        }, 3000);
    }).then(
        result => {
            console.log(result);
        },
        error => {
            console.log(String(error));
        }
    );
}

asyncSquare(10);

function logPromise(promise) {
    if (!(promise instanceof Promise)) promise = Promise.reject(new Error('ERROR!'));
    promise.then(resolved => console.log(resolved))
        .catch(error => console.log(String(error)));
}

function first() {
    return new Promise(resolve => {
        setTimeout(() => resolve(1000), 3000);
    })
}

function second() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('ERORR!')), 1000);
    })
}

function third() {
    return new Promise(resolve => {
        setTimeout(() => resolve(3000), 2000);
    })
}

//parallel promises
Promise.all([first(), second(), third()])
.then(results => console.log('all: ' + results))
.catch(error => console.log('all: ' + error));

Promise.all([first().catch(error => {return error}),
    second().catch(error => {return error}),
    third().catch(error => {return error})])
.then(results => console.log('All with catch in each promise : ' + results));

Promise.all([123, Promise.reject('ERRORERERROR'), 'lol'])
.then(results => console.log('all with Promise.reject(ERORERERROR): ' + results))
.catch(error => console.log('all with Promise.reject(ERORERERROR): ' + error));


Promise.race([first().catch(error => {return error}),
            second().catch(error => {return error}),
            third().catch(error => {return error})])
.then(results => console.log('Race: ' + results))
.catch(error => console.log('Race: ' + String(error)));

