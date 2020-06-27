console.error("ERROR!"); //Error (Red)
console.warn("Warning..."); //Warning (Yellow)

//Variables: let/const
let age = 30;
age = 41; //'let' can update value
console.log(age);
const age2 = 30;
//'const' cannot be updated
console.log(age2);

//Data types: String, numbers, boolean, null, undefined
const name = 'Daniel';
const bool = true;
const rating = 4.5; //Also considered a number
const x = null; //Empty
const y = undefined;
let z; //Undefined if no value assigned
console.log(typeof rating); //Shows primitive data type

//Concatenation
console.log("My name is " + name + ' and I am ' + age);
//Template String
const hello = `My name is ${name}\nand I am ${age}`;
console.log(hello);

//Strings Methods
console.log(hello.length);
console.log(hello.toLowerCase());
console.log(hello.substring(0, 10)); //[start, end)
console.log(hello.substring(0, 10).toUpperCase());
console.log(hello.split(''));
const aList = 'first, third, fifth, fourth, second';
console.log(aList.split(', '));

//Arrays
const numbers = new Array(5, 9, 1, 6, 2); //Method 1
console.log(numbers);
const fruits = ['apple', 'orange', 'pear', 15.5, false]; //Method 2
//Note: arrays can contain different data types
console.log(fruits[2]);
fruits[2] = -10; //Update value
fruits[6] = 'grapes'; //Append value
fruits.push(true); //Append method 2
fruits.unshift(0); //Append to front
console.log(fruits);
fruits.pop(); //Pop the end
console.log(fruits);
console.log(fruits.indexOf(15.5)); //Returns index

//Object literals
const person = {
    firstName: 'Danyang', //Parameters
    lastName: 'Wang',
    age: 18,
    hobbies: ['ball', 'code', 'simp'], //Arrays work too
    address: { //Embedded object
        street: 'Lawrence Avenue',
        city: 'Toronto',
        country: 'Canada'
    }
}
console.log(person);
console.log(person.address.city, person.address.country); //Comma acts as space
console.log(person.hobbies[1]); //Everything is normal
const {firstName, lastName, address: {street}} = person; //Extract information from object
console.log(firstName, lastName, street);