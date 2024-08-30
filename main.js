// console.log("hello js");
// // let b = Symbol("sai");
// // let a = Symbol("sai");
// // console.log(a === b);

// let student = {
//   name: "sai",
//   age: 23,
// };
// console.log(student);

// let a = Symbol(student);
// let b = Symbol(student);
// console.log(a === b);

// ---------------------IN-javascript there are two types of comments
// ---one is of // and another is of multiline comment /* */
// let i = 5;
// switch (i) {
//   case 1:
//     console.log("it's the first number in natural numbers");
//     break;
//   case 2:
//     console.log("entered number is two");
//     break;
//   default:
//     console.log("the program ended using switch case");
// }

// function greet(name) {
//   console.log(`hello ${name}`);
// }
// greet("sai");
// let greet = (name) => {
//   console.log(`hello ${name}`);
// };
// greet("sai");
// var first = 10; //--------now it's a global scope variable
// function sum() {
//   var second = 20; //-------now it's a function scope or block scope variable;
//   console.log(first + second);
// }
// // sum();
// console.log(first);
// sum();

// let a = "hello";
// function f() {
//   a = 3;
// }
// console.log(a);
// f();
// console.log(a);

// function g() {
//   let a = "hello";
//   if (a) {
//     let b = "sai";
//     console.log(`My name is,${a}`);
//   }
// }
// // g();
// console.log(result);
// var result = 3;
// result = 3;

// greeting();
// function greeting() {
//   console.log("hello sai");
// }

// function f(n) {
//   if (n <= 1) {
//     return 1;
//   }
//   return f(n - 1) + f(n - 2);
// }
// console.log(f(2));

// let obj1 = {
//   name: "sai",
//   age: function () {
//     return 2024 - 2003;
//   },
// };
// console.log(typeof obj1.name);

// console.log(obj1, "this is the declaration of the function ");

// const obj2 = JSON.parse(JSON.stringify(obj1));
// console.log(obj2, "this is using json format");
// const obj3 = { ...obj1 };
// console.log(
//   (obj3.age = function () {
//     return 2024 - 2001;
//   })
// );
// console.log(obj3);
// console.log(obj3.age());
// console.log(obj1.age());
// console.log(obj1["clg"]);
// console.log(obj1);

// console.log(obj1);

// const employee = {
//   name: "sai",
//   age: 21,
//   salary: 30000,
//   position: "officer",
// };
// console.log(employee);
// delete employee.position;
// console.log(employee);

// function constructor(name, age) {
//   this.name = name;
//   this.age = age;
//   this.age = function () {
//     return 2024 - 2003;
//   };
// }
// let obj2 = new constructor("sai", 23);
// console.log(obj2.age());

// let obj = {
//   name: "sai",
//   age: 21,
//   details: function () {
//     return `my name is ${this.name} and age is ${this.age}`;
//   },
// };
// console.log(obj.details());

// console.log((5.12345).toFixed(2));
// console.log(Math.floor(5.6));
// console.log("SAI".charCodeAt(1));
// console.log("sai".substring(1, "sai".length));

// console.log(v);
// }

// const student = {
//   firstName: "Monica",

//   //accessor property(setter)
//   set changeName(newName) {
//     this.firstName = newName;
//   },
// };

// console.log(student.firstName); // Monica

// // change(set) object property using a setter
// student.changeName = "Sarah";

// console.log(student.firstName); // Sarah

// const student = {
//   name: "sai",
//   set changeName(newname) {
//     this.name = newname;
//   },
//   get getName() {
//     return this.name;
//   },
// };
// console.log(student.name);
// console.log(student.getName);
// console.log(student.name);
// console.log(student.getName);

// function Car(name) {
//   this.name = name;
// }
// // console.log(Car.name);
// Car.prototype.color = "Blue";
// console.log(Car.prototype.color);
// const c1 = new Car("BMW");
// const c2 = new Car("Audi");
// console.log(c1.color);
// console.log(c2.color);

// try {
//   //   setTimeout(() => {
//   console.log("i am sai");
//   //   }, 3000);
// } catch (err) {
//   console.log(err);
// }

// import data from "./data.json";
// console.log(JSON.parse(data));

// const apiUrl = "https://api.example.com/data";
// const data = {
//   name: "John Doe",
//   email: "johndoe@example.com",
// };
// const requestOptions = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body:JSON.stringify(data),
// };
// const options = fetch(apiUrl, requestOptions);

// const data = {
//   name: "sai",
//   email: "kondurusai863@gmail.com",
// };
// const requestOptions = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application-json",
//   },
//   body: JSON.stringify(data),
// };

// fetch(apiUrl, requestOptions)
//   .then((data) => console.log(data.json()))
//   .catch((error) => console.log(error));

// const details = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application-json",
//   },
// };
// const url = "https://reqres.in/api/users/2";
// fetch(ulr, details)
//   .then((data) => data.json())
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// a promise
// let promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("Promise resolved");
//   }, 4000);
// });

// // async function
// async function asyncFunc() {
//   // wait until the promise resolves
//   let result = await promise;

//   console.log(result);
//   console.log("hello");
// }

// // calling the async function
// asyncFunc();

// ------------------------------------------promise--------------------------------

// const promise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("I am resolved");
//   }, 2000);
// });

// async function data() {
//   let result = await promise;
//   console.log(result);
//   console.log("Hello");
// }
// data();
// let count = 1;
// function counts() {
//   console.log(count);
//   count += 1;
// }
// let interval = setInterval(counts, 1000);
// for (let i = 0; i < 1000000000; i++) {
//   console.log(i);
//   if (i === 100000000) {
//     clearInterval(interval);
//     console.log("Interval cleared");
//     break;
//   }
// }
// clearInterval(interval);

// let date = new Date();
// console.log(date.toLocaleString().split(",")[0].split("/"));

// ---------------------------------------------data and time in javascript---------------------
// const date = new Date();
// console.log(date.toLocaleTimeString());

// -------------toLocalDateString----------like this 19/7/2024
// -------------toLocaleTimeString----------like this 12:00:00 AM
// -------------toTimeString---------------like this 21:15:29 GMT+0530 (India Standard Time)

// const date = new Date(0);
// console.log(date);

// const time2 = new Date(100000000000);
// console.log(time2.toTimeString());

//
// const time1 = new Date(2020, 1, 20, 4, 12, 11, 0);
// console.log(time1);

// const date = Date.now();
// console.log(date);

// const time = new Date();
// const data = time.getDate();
// console.log(data);

// const month = time.getMonth();
// console.log(month);

// const yea = time.getFullYear();
// console.log(yea);

// const a = this;
// console.log(a);

// function greet() {
//   console.log(this);
// }
// // greet();

// function person() {
//   this.name = "sai";
//   console.log(this);
// }
// const person1 = new person();
// console.log(person1);

// const person = {
//   name: "Jack",
//   age: 25,

//   // this inside method
//   // this refers to the object itself
//   greet: function () {
//     console.log(this);
//     console.log(this.name);
//   },
// };

// person.greet();

// const person = {
//   name: "Jack",
//   age: 25,

//   // this inside method
//   // this refers to the object itself
//   greet() {
//     console.log(this); // {name: "Jack", age ...}
//     console.log(this.age); // 25

//     // inner function
//     function innerFunc() {
//       // this refers to the global object
//       console.log(this); // Window { ... }
//       console.log(this.age); // undefined
//     }

//     innerFunc();
//   },
// };

// person.greet();

// function* greet() {
//   console.log("I am the first person");
//   console.log("I am the second person");
//   yield 100;
//   console.log("I am the third person");
// }
// const gen = greet();
// console.log(gen.next());
// console.log(gen.next());
// gen.next();
// console.log(gen.next());
// let a = 6;
// let b = 9;
// let c = a * b;

// // stops the execution
// debugger;

// console.log(c);

// function rec(n) {
//   if (n <= 1) {
//     return 1;
//   }
//   debugger;
//   return rec(n - 1) + rec(n - 2);
// }
// console.log(rec(5));
