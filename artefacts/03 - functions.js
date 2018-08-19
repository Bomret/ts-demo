"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// create intersection type
function combine(first, second) {
    return Object.assign({}, first, second);
}
exports.combine = combine;
const johnConnor = combine({ firstname: 'John' }, { lastname: 'Connor' });
// traditional function
function getGreeting(greeter, greetee) {
    return `Hi, ${greetee.firstname}. My name is ${greeter.firstname} ${greeter.lastname}.`;
}
exports.getGreeting = getGreeting;
// arrow function
const bindGreeter = (greeter) => getGreeting.bind(greeter);
const letDennisGreet = bindGreeter(DennisNedry);
letDennisGreet(mary);
