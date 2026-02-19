alert('Hello');
alert('World');

alert("Hello");
[1, 2].forEach(alert);

let message;
message = 'Hello!';

alert(message); 

(function() {
    'use strict';

    // ...your code here...
})()

let user = 'John';
let age = 25;

let n = 123;
n = 12.345;

alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN

let string = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number

console.log("" + 1 + 0) // = "10"
console.log("" - 1 + 0) // = -1
console.log(true + false) // = 1
console.log(6 / "3") // = 2
console.log("2" * "3") // = 6
console.log(4 + 5 + "px") // = "9px"
console.log("$" + 4 + 5) // = "$45"
console.log("4" - 2) // = 2
console.log("4px" - 2) // = NaN
console.log("  -9  " + 5) // = "  -9  5"
console.log("  -9  " - 5) // = -14
console.log(null + 1) // = 1
console.log(undefined + 1) // = NaN
console.log(" \t \n" - 2) // = -2

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;


