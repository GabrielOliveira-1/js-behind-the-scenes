'use strict';

// // Scoping
// function calcAge(birthYear) {
//   const age = 2040 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     // const output = `You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1991 % birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'Victor';
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       output = 'New Output!!!';
//     }
//     console.log(str);
//     console.log(millenial);
//     console.log(add(2, 3));
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Gabriel';
// calcAge(1997);
// // console.log(age);
// // printAge();

////////////////////////////////////////

// Hoisting and TDZ

// // Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Gabriel';
// let job = 'Software Developer';
// const year = 1997;

// // Functions
// console.log(addDecl(2, 3));
// // console.log(addExpre(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// // var addExpre = function (a, b) {
// //   return a + b;
// // };

// var addArrow = (a, b) => a + b;

// //Example
// console.log(numProducts);
// if (!numProducts) delShopCart();

// var numProducts = 10;

// function delShopCart() {
//   console.log('All products deleted');
// }

// var x = 1;
// let y = 2;
// const z = 3;

///////////////////////////////

// this keyword

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2040 - birthYear);
//   //   console.log(this);
// };
// calcAge(1997);

// const calcAgeArrow = birthYear => {
//   console.log(2040 - birthYear);
//   //   console.log(this);
// };
// calcAgeArrow(1997);

// const gabriel = {
//   year: 1997,
//   calcAge: function () {
//     console.log(this);
//     console.log(2040 - this.year);
//   },
// };
// gabriel.calcAge();

// const test = {
//   year: 2012,
// };

// test.calcAge = gabriel.calcAge; //Method borrowing
// test.calcAge();
/* We can see that the 'this' keyword points to test, since it is the object that is calling the method. Although the 'this' keyword is inside gabriel object */

/////////////////////////////////

// // Regular and Arrow Functions
// var firstName = 'Test';

// const gabriel = {
//   firstName: 'Gabriel',
//   year: 1997,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2040 - this.year);

//     // Solution 1
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     // Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },

//   greet: function () {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// gabriel.greet();
// gabriel.calcAge();

// // Arguments keyword
// var addExpre = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpre(2, 5);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   a + b;
// };
// addArrow(5, 4);

/*

Inside arrow function will never be a this keyword the arrow function will use the this keyword from its surroundings, in this case, from the global scope 

When you try to access a property that doesn't exist from an object, it won't return an error, it will return undefined

As a best pratice, never use arrow function as a method, just use a normal function expression

Inside a regular function call, that this keyword must be undefined

Arguments keyword is only available in regular functions

*/

/////////////////////////////////

// Primitive and Reference Types

let age = 27;
let oldAge = age;
age = 28;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 23;
console.log('Friend', friend);
console.log('Me', me);

/*

Reference types are stored in memory heap, and primitive types are stored in the execution contexts in which they are declared (in the call stack).

A value at a certain memory address is immutable.

When we declare a variable as an object an identifier is created which points to a piece of memory in the stack, which in turn points to a piece of memory in the heap, and in the heap is where the object is stored. (they are stored in  the heap because they can be too large to the stack, which is like an almost unlimited memory pool) and the stack just keeps an reference to where the object is stored in the heap.

Const are immutable only for primitive values.

*/
