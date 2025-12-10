// console.log("External JS");

// document.writeln("hello")
// document.writeln("hello")
// document.writeln("hello")

// document.write("JS")
// document.write("JS")
// document.write("JS")

//! TOKENS :  it is the smallest unit of any programming lang
/*
 In js tokens are divided into 4 parts
 1) keywords : pre-defined reserved word which has specific meaning. eg: var, let, const, if etc..

 2) identifier : name given to a variable, class, methods or function

 3) literal / value : data stored in a variable

 4) operators : symbol used to perform some operation on operands

 EXAMPLE : var a = 10
*/

//! DATA TYPES
/*
There are 2 types of datatypes
1) Primitive
 - In primitive there are 7 types
    1) number
    2) string
    3) boolean
    4) undefined
    5) null
    6) bigInt
    7) symbol

2) Non-Primitive
 - In Non-primitive there are 3 types
   1) Object
   2) Array
   3) Function
*/

// var a1 = 10.234;
// console.log(a1);
// console.log(typeof a1); // number

// var a2 = "Hello";
// console.log(a2);
// console.log(typeof a2); // string

// var a3 = true;
// console.log(a3);
// console.log(typeof a3); // boolean

// console.log(typeof typeof a1); // string

// var a4 = undefined;
// console.log(a4);
// console.log(typeof a4); // undefined

// var a5 = null;
// console.log(a5);
// console.log(typeof a5); // object

// var a6 = 1n;
// console.log(a6);
// console.log(typeof a6); // bigint

// var a7 = Symbol("Hello");
// var a8 = Symbol("Hello");

// console.log(a7 == a8); // false
// console.log(a7 === a8); // false

// console.log(typeof a7); // symbol

//! NON-PRIMITIVE DATA TYPES

// let obj1 = {
//   firstName: "John",
//   lastName: "Doe",
// };
// console.log(obj1);
// console.log(typeof obj1);// object

// let arr1 = [10, 20, 30];
// console.log(arr1);
// console.log(typeof arr1);// object

// function greet(){
//    console.log("Welcome");
// }
// console.log(greet);
// console.log(typeof greet); // function

//! HOW MANY WAYS TO DECLARE A VARIABLE
/*
Three Ways:
1) var
2) let ----- (ES6)
3) const --- (ES6)
*/

// var a; // declaration
// console.log(a); // ud
// a = 10; // initialization
// console.log(a); // 10
// var a; // re-declaration
// console.log(a); // 10
// a = 20; // re-initialization
// console.log(a); // 20
// var b = 100; // declare and initialize
// console.log(b); // 100
// var b = 200; // re-declare and re-initialize
// console.log(b); // 200

// let c;
// console.log(c); // ud
// c = 1000;
// console.log(c); // 1000
// // let c //! cannot re-declare
// c = 2000;
// console.log(c); // 2000

// //! similar to final keyword in java
// //! it cannot be re-declare or re-initialize
// const d = 5000
// console.log(d);

//! HOISTING
// // var a1 = undefined //! internally
// console.log(a1); // UD
// var a1 = 10
// console.log(a1); // 10

// //! TEMPORAL DEAD ZONE (TDZ)
// // let b1;
// // console.log(b1); //! ERROR
// let b1;
// console.log(b1);// ud
// b1 = 20
// console.log(b1); // 20

//! GEC
// debugger;
// console.log("Start");
// console.log(a);
// let b;
// console.log(b);
// b = 30;
// console.log(a);
// console.log(b);
// var a = 40;
// console.log(b, a);
// a = 100;
// console.log(a);
// console.log("End");

// console.log("Hello");
// const c = 100
// console.log(d1);
// var b
// let a1 = 300
// b = a1
// console.log(c);
// var d1 = 10
// console.log("Hi");
// console.log(c);
// b = 700
// console.log(b);
// console.log("Byyeee");

//! TYPES OF VARIABLES
/*
THERE ARE 2 TYPES:
1) GLOBAL VARIABLES :
- Variable which is present outside of loops, conditional statements or functions.
- It can be accessed anywhere throughout the code (GLOABLLY).

2) LOCAL VARIABLES :
- Variable which is present inside of loops, conditional statements or functions.  
- it can be accessed within a block.
*/

// debugger;
// var a1 = 10 //! GLOBAL VARIABLES - GLOBAL SCOPE (Due to Hoisting)
// let a2 = 20 //! GLOBAL VARIABLES - SCRIPT SCOPE (Due to TDZ)
// const a3 = 30 //! GLOBAL VARIABLES - SCRIPT SCOPE (Due to TDZ)

// if(5>2){
//    console.log(a1,a2,a3);
// }
// for(let i = 0 ; i < 5 ; i++){
//    console.log(a1,a2,a3);
// }
// function demo1(){
//    console.log(a1,a2,a3);
// }
// demo1()

//! CONDITIONAL / LOOPS
// if (10 > 2) {
//   var b1 = 100; // GLOBAL VARIABLE - GLOBAL SCOPE
//   let b2 = 200; // LOCAL VARIABLE - BLOCK SCOPE
//   const b3 = 300; // LOCAL VARIABLE - BLOCK SCOPE
//   console.log(b1, b2, b3);
// }
// console.log(b1); // 100
// console.log(b2);//! cannot acccess

//! FUNCTIONS
// function demo2() {
//   var c1 = 1000; // LOCAL VARIABLE - LOCAL SCOPE
//   let c2 = 2000; // LOCAL VARIABLE - LOCAL SCOPE
//   const c3 = 3000; // LOCAL VARIABLE - LOCAL SCOPE
//   console.log(c1,c2,c3);
// }
// demo2()
// console.log(c1);//! cannot acccess

//! FUNCTIONS

//! NAMED FUNCTION : function which has name
// NOTE: function hoisting only occurs in Named Function

// greet() // we can call, due to function hoisting

// function greet() {
//   console.log("Hello World");
//   console.log("Hello Universe");
//   console.log("Hello Galaxy");
// }

// greet()

//! GEC
// console.log("Start");
// console.log(a);
// demo1()
// console.log(demo1);
// var a = 10
// console.log(a);
// function demo1(){
//   console.log("I am Demo1");
// }
// console.log(demo1);
// console.log("ENd");

//! GEC
// debugger
// console.log("Start");
// console.log(demo2);
// function demo2(){
//   var a1 = "Hello"
//   console.log(a1);
// }
// demo2();
// console.log("End");

//! ANONYMOUS FUNCTION : function without name
/*
SYNTAX : function (){}
*/

//! FUNCTION EXPRESSION : used to call anonymous func by storing it into a variable

// console.log(fun); // ud

// // fun() //! error, function hoisting not possible

// var fun  = function(){
//   console.log("I am Anonymous, called using function exp");
// }

// fun()

//! RETURN TYPE FUNCTION
// debugger;
// function getFullName() {
//   let fname = "John";
//   let lname = "Doe";
//   let fullName = fname + " " + lname;
//   return fullName;
// }

// function displayName() {
//   // value variable is storing return value of getFullName func
//   let value = getFullName();
//   console.log(value);
//   document.writeln(value);
// }

// displayName();

//! PARAMETRIZED FUNCTION
// here, a and b are parameters used to store arguements
// function sum(a = 0, b = 0) {
//   let total = a + b;
//   return total;
// }

// let val1 = sum(5, 2); // <- arguements: data passed during func call
// console.log(val1); // 7

// console.log(sum(10,20)); // 30

// console.log(sum(10));

//! NESTED FUNCTION
// function parent() {
//   var money = 70000;
//   console.log(money);

//   function child() {
//     var savings = 500;
//     console.log(savings);
//   }

//   child();
// }

// parent();

//! EXAMPLE 2
// function parent() {
//   var money = 70000;
//   console.log(money);

//   function child() {
//     var savings = 500;
//     console.log(savings + money);
//   }

//   child();
// }

// parent();

//! EXAMPLE 3
// function parent() {
//   var money = 70000;
//   console.log(money);

//   function child() {
//     var savings = 500;
//     console.log(savings + money);
//   }

//   return child
// }

// let fun = parent();
// console.log(fun);
// fun()

//! EXAMPLE 4
// function parent() {
//   var money = 70000;
//   console.log(money);

//   function child() {
//     var savings = 500;
//     console.log(savings + money);
//   }
//   return child
// }

// parent()() // <-- JS CURRYING

//! HIGHER ORDER FUNCTION : A function which accepts another function as an arguement or return a function

//! CALLBACK FUNCTION :  A function which passes as an arguement to another function

// //----EXAMPLE 1
// function Student(callback) {
//   callback();
// }

// Student(function () {
//   console.log("I am Callback");
// });

// //----EXAMPLE 2
// function Parent() {
//   return function () {
//     console.log("I am Return value of Parent Func");
//   };
// }
// Parent()()

//! ARROW FUNCTION : shorter syntax of traditional function, introduced in ES6

// // WAY 1
// const a1 = () => {
//   console.log("I am Arrow Function 1");
// };

// console.log(a1); // ()=>{ console.log("I am Arrow Function 1");}
// a1();

// // WAY 2 : If no parameter needed, replace () with _
// const a2 = (_) => {
//   console.log("I am Arrow Function 2");
// };
// a2();

// // WAY 3 : If having only one parameter , ignore ()
// const a3 = (x) => {
//   console.log("I am Arrow Function 3 ", x);
// };
// a3("🚀");

// // WAY 4 : If having only one line of code , ignore {}
// const a4 = () => console.log("I am Arrow Function 4");
// a4();

// // WAY 5 : Explicit return , {}  and return keyword is mandatory
// const a5 = () => {
//   return "I am Arrow Function 5, Explicit return";
// };
// console.log(a5());

// // WAY 6 : Implicit return , {} and return keyword not required
// const a6 = () => "I am Arrow Function 6, Implicit return";
// console.log(a6());

//! IMMEDIATLY INVOKED FUNCTION EXPRESSION (IIFE)
// (function iife() {
//   console.log("IIFE 1");
// })();

// let x = (() => {
//   console.log("IIFE 2");
//   return "Hiii 🚀"
// })();
// console.log(x);

// function demo3(){
//   return "Hello 🩷"
// }
// let val = demo3()
// console.log(val);

//! STRINGS
// let str1 = "Hello"
// let str2 = 'World'

// // string interpolation ${}
// let str3 = `Hey !!! ${str1} ${str2}`

// console.log(str1);
// console.log(str2);
// console.log(str3);

//! STRING METHODS
// let str1 = "Hello World";
// console.log(str1.length);

// // charAt(indexPos) : returns char at particular index
// console.log(str1.charAt(0)); // H
// console.log(str1.charAt(12));

// // slice(startIndex, endIndex) : returns sliced part of string
// //! Note : lastIndex always get ingnored
// console.log(str1.slice(0, 4)); // Hell
// console.log(str1.slice(-11, -7)); // Hell
// console.log(str1.slice(0, -7)); // Hell

// // subString(startIndex, endIndex)
// //! Note : lastIndex always get ingnored
// console.log(str1.substring(0, 4)); // Hell
// console.log(str1.substring(-11, -7)); //! NOT POSSIBLE
// console.log(str1.substring(-5, 11)); // Hello World, here -5 converted to 0

// let description = "Javascript is a programming language";
// let val = `${description.slice(0, 7)}...`;
// console.log(val);

// // replace(searchValue , replaceValue) : replaces 1st occuring word and returns it
// let statement1 = "Hello everyone, Hello to javascript";
// let newStatement1 = statement1.replace("Hello", "Welcome");
// console.log(newStatement1);

// // replaceAll(searchValue , replaceValue) : replaces all occuring word and returns it
// let newStatement2 = statement1.replaceAll("Hello", "Welcome");
// console.log(newStatement2);

// let word = "JaVaScRiPt";
// // toLowerCase() : Converts all the alphabetic characters in a string to lowercase.
// console.log(word.toLowerCase()); // javascript

// // toUpperCase() : Converts all the alphabetic characters in a string to uppercase.
// console.log(word.toUpperCase()); // JAVASCRIPT

// // trim()
// let word2 = "            frontend               ";
// console.log(word2);
// console.log(word2.trimStart()); // Removes the leading white space
// console.log(word2.trimEnd()); // Removes the trailing white space
// console.log(word2.trim()); // Removes the leading and trailing white space

// let phoneNo = "7821567800";
// console.log(phoneNo.slice(0, 4).padEnd(10, "X")); // 7821XXXXXX
// console.log(phoneNo.slice(-4).padStart(10, "X")); // XXXXXX7800

// let word3 = "HTML";
// console.log(word3.split()); // ['HTML']
// console.log(word3.split("")); // ['H', 'T', 'M', 'L']
// console.log(word3.split("T")); // ['H', 'ML']

// let statement2 = "Javascript is a programming language";
// console.log(statement2.split(" ")); //  ['Javascript', 'is', 'a', 'programming', 'language']

// function checkPallindrome(str) {
//   let value = str.split("").reverse().join("");
//   if (str === value) {
//     console.log("Yes its Pallindrome");
//   } else {
//     console.log("Not a Pallindrome");
//   }
// }
// checkPallindrome("abc");
// checkPallindrome("racecar");

//! ARRAYS
// let arr1 = [10, 20, 30, 40, 50];

// console.log(arr1[0]);

// // for loop
// for (let i = 0; i < arr1.length; i++) {
//   console.log(arr1[i]);
// }

// // for in
// for (let i in arr1) {
//   console.log(i);
// }

// // for of
// for (let i of arr1) {
//   console.log(i);
// }

//! ARRAY METHODS
let arr1 = [10, 20, 30, 40, 50];
console.log(arr1);
console.log("Length is ", arr1.length); // 5 <--- property

//! pop() : Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

let poppedValue = arr1.pop();
console.log(arr1); // [10,20,30,40]
console.log("Popped Value is", poppedValue); // 50

//! push(newElements) : Appends new elements to the end of an array, and returns the new length of the array

let newLength = arr1.push(100, 200, 47, 80);
console.log(arr1); // [10, 20, 30, 40, 100, 200, 47, 80]
console.log("New Length is", newLength); // 8

//! shift() : Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

let returnVal = arr1.shift();
console.log(arr1); // [ 20, 30, 40, 100, 200, 47, 80]
console.log("First element is", returnVal); // 10

//! unshift(newElements) :  Inserts new elements at the start of an array, and returns the new length of the array.

let newLength2 = arr1.unshift("Hello", "JS", true, null, () => {});
console.log(arr1); // ['Hello', 'JS', true, null, ƒ, 20, 30, 40, 100, 200, 47, 80]
console.log("New Length is", newLength2);

//! splice( startIndex , deleteCount , newElements ) : Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements array.

let arr2 = [10, 20, 30, 40, 50];

//! ONLY DELETE
let deletedElements = arr2.splice(2, 1); // 30 removed
console.log(arr2); // [10, 20, 40, 50]
console.log("Deleted Elements",deletedElements); // [30]

//! ONLY ADD
arr2.splice(3,0,1200,1300)
console.log(arr2); // [10, 20, 40, 1200, 1300, 50]

//! ADD AND DELETE
arr2.splice(1,3,"Hello World")
console.log(arr2);// [10, 'Hello World', 1300, 50]


//! slice(startIndex,endIndex) : Returns a copy of a section of an array.
//Note :  it will not modify the original array

let arr3 = [100,200,300,400,500]
let newArr3 = arr3.slice(1,4)
console.log(arr3);// [100,200,300,400,500]
console.log(newArr3);// [200, 300, 400]

//! sort()
let arr4 = [4,5,1,3,6,2,9]
let sortedArr1 = arr4.sort()
console.log(sortedArr1); //[1, 2, 3, 4, 5, 6, 9]

// lexographical sorting
let arr5 = [90,6,10,2,70,3]
let sortedArr2 = arr5.sort()
console.log(sortedArr2); // [10, 2, 3, 6, 70, 90]

let arr6 = [40,1,68,55,2,9,12]
let sortedArr3 = arr6.sort((a,b)=> a-b) // Asc
console.log(sortedArr3);// [1, 2, 9, 12, 40, 55, 68]