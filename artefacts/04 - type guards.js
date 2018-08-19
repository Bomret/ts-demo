"use strict";
class Invalid {
    constructor(reason) {
        this.reason = reason;
    }
}
class Valid {
    constructor(value) {
        this.value = value;
    }
}
function isValid(validation) {
    return 'value' in validation;
}
const res = validate("i'm a string");
if (isValid(res)) {
    console.log(res.value);
}
else {
    console.error(res.reason);
}
