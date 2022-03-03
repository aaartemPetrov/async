let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'xmpqderf123',
    database: 'mydb'
});
connection.connect();

function getHumansCallback(callback) {
    connection.query('select * from humans;', (error, results, fields) => {
        if (error) callback(error);
        callback(null, results);
    })
}

getHumansCallback((error, humans) => {
    if (error) {
        console.log(String(error));
    }
    console.log(`List of humans:\n`);
    humans.forEach(human => {
        let counter = 0;
        for (let key in human) {
            counter++;
            process.stdout.write(key + ': ' + human[key]);
            if (counter === Object.keys(human).length) {
                process.stdout.write(`\n`);
                break;
            }
            process.stdout.write(', ');
        }
    });
    console.log();
})

function getHumansPromise() {
    return new Promise((resolve, reject) => {
        connection.query('select * from humans', (error, results, fields) => {
            if (error) return reject(String(error));
            return resolve(results);
        })
    });
}


getHumansPromise()
    .then(result => {
        console.log(`List of humans:\n`);
        result.forEach(human => {
            let counter = 0;
            for (let key in human) {
                counter++;
                process.stdout.write(key + ': ' + human[key])
                if (counter === Object.keys(human).length) {
                    process.stdout.write(`\n`);
                    break;
                }
                process.stdout.write(', ');
            }
        });
        //throw new Error('ERROR!');
        //return getHumansPromise();
    })
    .then(result => {
        console.log(result)
        throw new Error('ERROR!');
    })
    .catch(error => console.log(error));;

connection.end();
