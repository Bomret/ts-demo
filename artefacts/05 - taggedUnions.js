"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
class Ok {
    constructor(value) {
        this.value = value;
    }
}
class Fail {
    constructor(error) {
        this.error = error;
    }
}
function tryCatch(f, ...args) {
    try {
        const res = f(...args);
        return new Ok(res);
    }
    catch (err) {
        return new Fail(err);
    }
}
const result = tryCatch(str => {
    return `Hello ${str}`;
}, "John");
switch (result.tag) {
    case "ok":
        console.error(result.value);
        break;
    case "failure":
        console.log(result.error);
        break;
    default:
        common_1.assertNever(result);
        break;
}
const Counter = new class {
    constructor() {
        this.count = 0;
    }
    increment() {
        this.count = this.count++;
    }
    decrement() {
        this.count = this.count--;
    }
}();
console.log(Counter.count);
Counter.increment();
console.log(Counter.count);
const bla = promisify(getUser);
