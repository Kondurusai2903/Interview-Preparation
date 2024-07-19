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
// // obj1["college"] = "MITS";
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

// obj1["clg"] = "MITS";
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
// let vari = "venkatsai";
// n = vari.length;
// console.log(vari.substr(2, 5));
// for (let v of vari) {

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
// student.changeName = "venkat";
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
const apidata = {
  data: {
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
  },
  support: {
    url: "https://reqres.in/#support-heading",
    text: "To keep ReqRes free, contributions towards server costs are appreciated!",
  },
};
const details = {
  method: "POST",
  headers: {
    "Content-Type": "application-json",
  },
  body: JSON.stringy(apidata),
};
const url = "https://reqres.in/api/users/2";
fetch(ulr, details)
  .then((data) => data.json())
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
