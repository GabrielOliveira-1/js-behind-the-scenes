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

const calcAge = function (birthYear) {
  console.log(2040 - birthYear);
  //   console.log(this);
};
calcAge(1997);

const calcAgeArrow = birthYear => {
  console.log(2040 - birthYear);
  //   console.log(this);
};
calcAgeArrow(1997);

const gabriel = {
  year: 1997,
  calcAge: function () {
    console.log(this);
    console.log(2040 - this.year);
  },
};
gabriel.calcAge();

const test = {
  year: 2012,
};

test.calcAge = gabriel.calcAge; //Method borrowing
test.calcAge();
/* We can see that the 'this' keyword points to test, since it is the object that is calling the method. Althouth the 'this' keyword is inside gabriel object */
