var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Intro
var myString; //String declaration M2
var myNum; //Number declaration M2
var myBool; //Boolean declaration M2
var myVar; //Anything M2
var myArr; //String array declaration M2
myString = 'Test 1';
console.log(myString);
console.log(myString.slice(0, 4)); //Substring
myArr = ['Yeet']; //Must be initialized first
myArr.push('World');
console.log(myArr);
var myArr2; //Number array declaration M3
var x = []; //Initializing upon creation
myArr2 = [];
console.log(myArr2);
//"void" is used for storing null/undefined.
var myVoid = null;
myVoid = undefined;
var myNull = null; //...
//Tuple
var tuple1 = [1, '222'];
//The first array shows which data type the first n elements are.
//Note: After the first n elements, the upcoming elements can be anything.
tuple1.push('third');
console.log(tuple1);
//Functions
function addNum(p1, p2) {
    return p1 + p2; //Why is it no unnecessary?
}
console.log(addNum(4, 5));
var addNum2 = function (p1, p2) {
    if (typeof (p1) == 'string')
        p1 = parseInt(p1);
    if (typeof (p2) == 'string')
        p2 = parseInt(p2);
    return p1 + p2;
};
console.log(addNum2(-3, '-7'));
//Question mark makes the parameter optional
function addString(p1, p2) {
    if (p2 == undefined)
        p2 = 'Doe';
    return p1 + ' ' + p2;
}
console.log(addString('John'));
function isVoid() {
    return;
}
//Interfaces
//Default way of doing it
function showTodo(p1) {
    console.log(p1.title + " => " + p1.text);
}
var myTodo = {
    title: 'Trash',
    text: 'Take out trash'
};
showTodo(myTodo);
function showTodo2(p1) {
    console.log(p1.title + " -> " + p1.text);
}
showTodo2(myTodo);
//Classes
var user = /** @class */ (function () {
    //Parameters when creating object based on this class
    function user(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User created for " + name);
    }
    user.prototype.paid = function () {
        console.log('User has paid');
    };
    return user;
}());
var user1 = new user('John', 'John@somemail.com', 24);
console.log(user1.age);
var member = /** @class */ (function (_super) {
    __extends(member, _super);
    function member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        _this.payInvoice();
        return _this;
    }
    member.prototype.payInvoice = function () {
        _super.prototype.paid.call(this); //Call function from inheritance
    };
    return member;
}(user));
var member1 = new member(96042, 'Kevin', 'Kevin@somemail.com', 19);
var memberv2 = /** @class */ (function () {
    function memberv2(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User created for " + name);
    }
    memberv2.prototype.paid = function () {
        console.log('User has paid');
    };
    return memberv2;
}());
