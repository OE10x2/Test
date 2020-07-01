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
/*
//Creating folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if (err) throw err;
    console.log('Folder Created!');
});
*/
//Writing in file
fs.writeFile(path.join(__dirname, '/test', 'hello.text'), 'This is the text written', err => {
    if (err) throw err;
    console.log('File written!');
});
fs.appendFile(path.join(__dirname, '/test', 'hello.text'), 'This\nis the second line', err => {
    if (err) throw err;
    console.log('File edited!');
});
//Read file
fs.readFile(path.join(__dirname, '/test', 'hello.text'), 'utf8', (err, data) => { //data represents the text
    if (err) throw err;
    console.log(data);
});
//Rename file
const first = path.join(__dirname, '/test', 'hello.text');
const second = path.join(__dirname, '/test', 'renamed.text');
fs.rename(first, second, err => {
    if (err) throw err;
    console.log('Rename successful');
})

//Operating system
const os = require('os');
//Platform
console.log(os.platform()); //win32
console.log(os.arch()); //32/64 bit
console.log(os.cpus()); //CPU cores
console.log(os.freemem()); //Free memory in system
console.log(os.totalmem()); //Total memory in system
console.log(os.homedir()); //Home directory
console.log(os.uptime()); //System uptime

//URLs
const url = require('url');
const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active'); //Example
console.log(myUrl.href); //Link
console.log(myUrl.host); //Host (root) website
console.log(myUrl.hostname); //Without the port
console.log(myUrl.pathname); //Page name
console.log(myUrl.search); //Serialized query
console.log(myUrl.searchParams); //Params object
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
console.log(myUrl.href); //Now the appended param is added to link
myUrl.searchParams.forEach((key, value) => console.log(`${key} ==> ${value}`));

//Events
const EventEmitter = require('events');
class myEmitter extends EventEmitter{};
const emitter1 = new myEmitter();
//Event listener
emitter1.on('event', () => console.log('Event fired!'));
emitter1.emit('event');
emitter1.emit('event');
emitter1.emit('event'); //Every time this is called, the "on" listener is activated
const uuid = require('uuid');
class Logger extends EventEmitter{
    log(message){
        //Call event
        this.emit('message', {id: uuid.v4(), message});
    }
}
module.exports = Logger;

//HTTP
const http = require('http');
http.createServer((req, res) => {
    res.write('First line on the server?');
    res.end(); //Most basic server
}).listen(5000, () => console.log('Server is running'));