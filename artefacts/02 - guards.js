"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type guard
function isPerson(obj) {
    if (typeof obj !== 'object')
        return false;
    return 'firstname' in obj && 'lastname' in obj && 'age' in obj;
}
exports.isPerson = isPerson;
function printNameIfPerson(something) {
    if (isPerson(something)) {
        console.log(`${something.firstname} ${something.lastname}`);
    }
}
exports.printNameIfPerson = printNameIfPerson;
