"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// traditional function
function getGreeting(greeter, greetee) {
    return `Hi, ${greetee.firstname}. My name is ${greeter.firstname} ${greeter.lastname}.`;
}
// arrow function
const bindGreeter = (greeter) => getGreeting.bind(greeter);
const letDennisGreet = bindGreeter(dennis);
letDennisGreet(mary);
const unemployedMary = {
    firstname: "Mary",
    middlename: "Sherman",
    lastname: "Morgan",
    job: "Rocket Scientist"
};
const employedMary = Object.assign({}, unemployedMary, { employer: "North American Aviation" });
