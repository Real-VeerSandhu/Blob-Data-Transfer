import * as fs from 'fs';

const jsonString = fs.readFileSync('./data/sample-response.json', 'utf-8');
const jsonData = JSON.parse(jsonString);

console.log(jsonData);

console.log(typeof jsonData)

const str = JSON.stringify(jsonData);
const bytes = new TextEncoder().encode(str);
const blob = new Blob([bytes], {
    type: "application/json;charset=utf-8"
});


console.log('blob:', blob)