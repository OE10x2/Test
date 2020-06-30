console.log("Node setup");

const Person = require('./person');
const person1 = new Person('Kevin', 30);
person1.greet();

console.log(__dirname, __filename); //Directory and file paths

const path = require('path');
console.log(path.basename(__filename)); //File name
console.log(path.dirname(__filename)); //Directory path
console.log(path.extname(__filename)); //Extension type
console.log(path.parse(__filename)); //Lists everything
console.log(path.join(__dirname, 'folder1', 'testfile.html')); //Concatenate

const fs = require('fs');
const path = require('path');
console.log(fs);
//Creating folder
