import fetch from 'node-fetch';

const data = { name: 'piggy piggy pig'}
fetch('https://omdbapi.com/?apikey=d8e9986a', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log(data));