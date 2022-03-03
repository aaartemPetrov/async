//async-await is syntax shugar around promises

async function empty() {
}

let emptyResult = empty();
console.log(emptyResult);

function withPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello!'), 1000);
    });
};

console.log(withPromise());

async function waitForPromise() {
    const result = await withPromise();
    console.log(result);
}
 
waitForPromise();


