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
person.email = 'dwang@somemail.com'; //Adding attribute
console.log(person);

//Arrays of Objects
const todos = [
    {
        id: 1,
        task: 'Take out trash',
        isCompleted: true
    },{
        id: 2,
        task: 'Meeting with boss',
        isCompleted: false
    },{
        id: 3,
        task: 'Dentist Appointment',
        isCompleted: false
    }
];
console.log(todos);
console.log(todos[1].task); //Specific value in object

//Convert to JSON
//Note: JSON is similar to array of objects, but everything is double quotes
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//For loop
for (let i = 0; i < 10; i++) console.log(`Splashed ${i} threes`); //No surprises
for (let i = 0; i < todos.length; i++) console.log(todos[i].isCompleted); //Method 1
for (let i of todos) console.log(i.task); //Method 2

//While loop
let i = 10;
while (i > 0){
    console.log(`Bricked ${i} threes`);
    i--;
}

//High order array methods
//forEach runs provided code for each element in array
todos.forEach(function(i){
    console.log(i.task);
}); //Method 1
todos.forEach(i => console.log(i.id)); //Method 2
//Map extracts specific attributes from array
let todoText = todos.map(function(i){
    return i.task;
}); //Method 1
console.log(todoText);
console.log(todos.map(i => i.id)); //Method 2
//Filter returns elements that meet the given conditions
//Note: Triple equal signs also compares the types
console.log(todos.filter(i => i.isCompleted === false));
//Nested
console.log(todos.filter(i => !i.isCompleted).map(i => i.id));

//Conditionals
//In order to explain triple equal signs:
console.log(10 == '10');
console.log(10 === '10');
const X = 9;
if (X > 10 || 2 >= 1) console.log('Big');
else if (X < 10 && 2 >= 1) console.log('Small');
else console.log('Just right'); //Nothing special
const color = X < 5 ? 'Red' : 'Blue'; //Also works
//Switch statements (oh boy)
switch(color){
    case 'Red':
        console.log('The color is red');
        break;
    case 'Blue':
        console.log('The color is blue');
        break;
    default:
        console.log('The color ain\'t red/blue');
        break;
}

//Functions
function add(p1 = 1, p2 = 1){ //Can set defaults
    console.log(p1 + p2);
}
function add2(p1 = 1, p2 = 1){
    return p1 + p2;
}
add(5, 6);
add(5);
add();
console.log(add2(3, -4));
const add3 = (p1 = 1, p2 = 1) => console.log(p1 + p2);
const add4 = (p1 = 1, p2 = 1) => p1 + p2;
add3(-3, -5);
console.log(add4(-8, 16));

//Constructor Functions
function people(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); //Default date
    this.getYear = function(){
        return this.dob.getFullYear();
    }
}
people.prototype.getName = function(){
    return `${this.firstName} ${this.lastName}`;
} //To add new attribute to existing constructor
//Instantiate object
const people1 = new people();
const people2 = new people('Daniel', 'Wang', '2002-01-08');
console.log(people1);
console.log(people2.getYear());
console.log(people2.getName());