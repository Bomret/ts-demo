"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// traditional OOP class
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet(other) {
        console.log(`Hi, ${other.firstname}. My name is ${this.firstname} ${this.lastname}.`);
    }
}
exports.Person = Person;
class Employee extends Person {
    constructor(firstname, lastname, job) {
        super(firstname, lastname);
        this.firstname = firstname;
        this.lastname = lastname;
        this.job = job;
    }
    // overriden method
    greet(other) {
        super.greet(other);
        console.log(`I'm a ${this.job}`);
    }
}
exports.Employee = Employee;
// inheritance
class Developer extends Employee {
    constructor(firstname, lastname) {
        super(firstname, lastname, 'Software Developer');
    }
}
class RocketScientist extends Employee {
    constructor(firstname, lastname) {
        super(firstname, lastname, 'Rocket Scientist');
    }
}
// instantiation
const dennis = new Developer('Dennis', 'Nedry');
const mary = new RocketScientist('Mary', 'Sherman Morgan');
mary.greet(dennis);
