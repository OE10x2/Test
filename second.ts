//Intro
let myString: string; //String declaration M2
let myNum: number; //Number declaration M2
let myBool: boolean; //Boolean declaration M2
let myVar: any; //Anything M2
let myArr: string[]; //String array declaration M2
myString = 'Test 1';
console.log(myString);
console.log(myString.slice(0, 4)); //Substring
myArr = ['Yeet']; //Must be initialized first
myArr.push('World');
console.log(myArr);
let myArr2: Array<number>; //Number array declaration M3
let x: Array<number> = []; //Initializing upon creation
myArr2 = []
console.log(myArr2);
//"void" is used for storing null/undefined.
let myVoid: void = null;
myVoid = undefined;
let myNull: null = null; //...

//Tuple
let tuple1: [number, string] = [1, '222'];
//The first array shows which data type the first n elements are.
//Note: After the first n elements, the upcoming elements can be anything.
tuple1.push('third');
console.log(tuple1);

//Functions
function addNum(p1: number, p2: number): number{
    return p1 + p2; //Why is it no unnecessary?
}
console.log(addNum(4, 5));
let addNum2 = function(p1: any, p2: any): number{
    if (typeof(p1) == 'string') p1 = parseInt(p1);
    if (typeof(p2) == 'string') p2 = parseInt(p2);
    return p1 + p2;
}
console.log(addNum2(-3, '-7'));
//Question mark makes the parameter optional
function addString(p1: string, p2?: string): string{
    if (p2 == undefined) p2 = 'Doe';
    return p1 + ' ' + p2;
}
console.log(addString('John'));
function isVoid(): void{
    return;
}

//Interfaces
//Default way of doing it
function showTodo(p1: {title: string, text: string}){
    console.log(`${p1.title} => ${p1.text}`);
}
let myTodo = { //Object
    title: 'Trash',
    text: 'Take out trash'
}
showTodo(myTodo);
//Interface way
interface todo{
    title: string;
    text: string;
}
function showTodo2(p1: todo){
    console.log(`${p1.title} -> ${p1.text}`);
}
showTodo2(myTodo);

//Classes
class user{
    private name: string; //Yes, they can be private
    private email: string;
    public age: number;
    //Parameters when creating object based on this class
    constructor(name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age;
        console.log(`User created for ${name}`);
    }
    paid(){ //Function within class
        console.log('User has paid');
    }
}
let user1 = new user('John', 'John@somemail.com', 24);
console.log(user1.age);
class member extends user{ //Ahh hit here we go again
    id: number; //Extra parameters
    constructor(id: number, name: string, email: string, age: number){
        super(name, email, age);
        this.id = id;
        this.payInvoice();
    }
    private payInvoice(){ //Functions can be private
        super.paid(); //Call function from inheritance
    }
}
let member1 = new member(96042, 'Kevin', 'Kevin@somemail.com', 19);
interface UserInterface{
    name: string;
    email: string;
    age: number;
    paid();
}
class memberv2 implements UserInterface{ //Implement from interface
    name: string;
    email: string;
    age: number;
    constructor(name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age;
        console.log(`User created for ${name}`);
    }
    paid(){
        console.log('User has paid');
    }
}
