let a = 1;
let b = a++; //1
let c = ++a; //2
console.log(b);
console.log(c);

let d = "hello";
let e = false;
d++; // error
e++; // 1
console.log(d); //NaN
console.log(e); //1

let perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
console.log(perplexed); // undefined

// let price = 2.7;
// price.toFixed(2);
// console.log(price); //2.70

// let price = "2.7";
// price.toFixed(2);
// console.log(price); //2.70
console.log("isNan")
console.log(isNaN(0)); // false

console.log(isNaN(1)); //false

console.log(isNaN("")); //false

console.log(isNaN("string")); //true

console.log(isNaN("0"));//false

console.log(isNaN("1"));//false

console.log(isNaN("3.145"));//false

console.log(isNaN(Number.MAX_VALUE));//true

console.log(isNaN(Infinity));//false

console.log(isNaN("true"));//true

console.log(isNaN(true));//false

console.log(isNaN("false"));//true

console.log(isNaN(false));//false

console.log(!true);   //false
console.log(!false);  //true
console.log(!!true);  //true
console.log(!!false); //false
console.log(!!0);     //false
console.log(!!-0);    //false
console.log(!!1);     //true
console.log(!!-1);    //true
console.log(!!0.1);   //true
console.log(!!"hello");//true
console.log(!!"");    //false
console.log(!!'');    //false
console.log(!!"false");//true
console.log(!!"0");   //true

let sample = "Hello Codeup";
console.log(sample);
console.log(sample.length);
console.log(sample.toUpperCase());
console.log(sample.toLowerCase());
let newSample = sample + " Students";
console.log(newSample)
let replaceStudents = newSample.replace("Students", "Class");
console.log(replaceStudents)
console.log(replaceStudents.indexOf("c"));
console.log(replaceStudents.indexOf("C"));
console.log(replaceStudents.substring(6, 12));
let costPerDay = 3;
let totalCost = 3 * 3 + 5 * 3 + 3
console.log(totalCost);

let totalPay = 350 * 10 + 6 * 400 + 4 * 380;
console.log(totalPay);

let username = 'codeup';
let password = 'notastrongpassword';
let isPasswordGreaterThan5Chars = password.length > 5;
console.log(isPasswordGreaterThan5Chars);
let pwDoesNotContainUsername = password.includes(username);
console.log(pwDoesNotContainUsername);
let isUsernameGreaterThan20Chars = username.length > 20;
console.log(isUsernameGreaterThan20Chars);
let doesUsernameOrPWHaveWhitespace = username.length === username.trim().length && password.length === password.trim().length;
console.log(doesUsernameOrPWHaveWhitespace);


