/* Works for any object
const person = {
    firstName: 'Kevin',
    lastName: "Wang",
}
module.exports = person;
*/

class Person{ //Also works for functions/classes
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hi ${this.name} who's ${this.age} years old!`);
    }
}
module.exports = Person;