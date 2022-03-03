import fetch from 'node-fetch';

async function getRandomDog() {
    let response = await fetch('https://dog.ceo/api/breeds/image/random');
    let urlOfRandomDog = await response.json();
    console.log(urlOfRandomDog.message);
}

getRandomDog();

//the same with anonymous async function
(async function () {
    let response = await fetch('https://dog.ceo/api/breeds/image/random');
    let urlOfRandomDog = await response.json();
    console.log(urlOfRandomDog.message);
})();

//top level await
let response = await fetch('https://dog.ceo/api/breeds/image/random');
let urlOfRandomDog = await response.json();
console.log(urlOfRandomDog.message);

//when promise is rejected await throws error
//coz of this we can use try...catch
async function getRandomDogError() {
    try {
        let response = await fetch('https://dog.4124124eo/ap12412i/breeds/im4132age/ran124124dom');
        let urlOfRandomDog = await response.json();
        console.log(urlOfRandomDog.message);
    } catch(error) {
        console.log('FETCH ERROR: ' + error);
    }
}

getRandomDogError();