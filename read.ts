const Blob = require('node:buffer');
const fs = require('fs'); // import module was an error

const jsonString = fs.readFileSync('./data/sample-response.json', 'utf-8');
const jsonData = JSON.parse(jsonString);

// console.log(jsonData);
// console.log(typeof jsonData);

const str = JSON.stringify(jsonData);
const bytes = new TextEncoder().encode(str);

console.log('Bytes:', bytes);


const blob = new Blob([bytes], {
    type: "application/json;charset=utf-8"
});

// for (let i of str) {
//     console.log(i)
// }


console.log('blob:', blob)

/**
 * 
 */