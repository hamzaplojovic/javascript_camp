// var changed = document.getElementById("paragraph")
// changed.addEventListener("click",function(){
//     changed.innerText = "hi"
// })

// document.write(5+6)

// alert("Hello World!")

// console.log(5+6);
// console.log(window)
// console.log(document)

//================================================================================
//================================================================================

//  <==============================    LET    ===================================>

// let a = "John"           The let variables cannot be redaclared
// let a = 0;

// {
//     let a = 0
// }
// The a cannot be accesed from here because it's let variable

//  <==============================    VAR    ===================================>

// var a = 0;                       This can be done with var variables
// var a = 1;

// {
//     var a = 0;
// }
// The a can be accessed from here because it's var variable

//  <============================    CONST    ===================================>

// const PI = 3.14;
// PI = 3.15;    This is error!
// PI += 0.1     This is error!

// Const can't be changed in any shape or form!

// const PI;
// PI = 3.14;           This is error;

// Const also must be assigned!

//=============================================================================

//  <=====================    Functions    ===========================>

// function myFunc(){
//     console.log("Hello, World!")             // Example of function
// }
// myFunc();

// function NAME (parameter1, parameter2, paremeter3){
// code that is gonna be executed
//}

// function addition(a, b){
//     return console.log(a*b)
// }
// addition(7, 8)

//================================================================================

// INPUT
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("What is your name: ", (your_name)=>{  Example of Anonymous function
//     console.log("Hello, " + your_name);
//     rl.close()
// })

//==============================================================================
//                                OBJECTS

// const car = {type:"Fiat", model:500, color:"white"};
// console.log(car)

// ==============================================================================
//    STRINGS

// let my_name = "Hamza";
// console.log("String: "+my_name);
// console.log("String Length: "+my_name.length);

// let x = "John";
// let y = new String("John")     // Making object out of string
// console.log(y)

// let fruit = "banana";
// console.log(fruit.slice(2, 4)); // Output is the part of string that we selected
//                                 // these parameters are first index and second index

// let fruit2 = "Apple, Banana, Kiwi"
// console.log(fruit2.slice(4));   // The output is string from 4 th index to last index

// let text = "Please visit Microsoft!"
// let newText = text.replace("Microsoft", "W3Schools!")
// console.log(newText)

// let u = "Hamza";
// let upper = u.toUpperCase();
// let lower = u.toLowerCase();
// console.log(upper, lower);

// let text1 = "Hello"
// let text2 = "World"
// console.log(text1.concat(" ",text2))

// let string = "          Hello          "
// console.log(string.trim())

// let number = "5";
// let pad_start_number = number.padStart(4, 0)
// let pad_end_number = number.padEnd(4, 0)
// console.log(pad_start_number);
// console.log(pad_end_number);

// let word = "Hello World!"
// console.log(word[1]);
// console.log(word.charAt(1));

// let array_from_string = "Hamza"
// console.log(array_from_string.split(''))

//===============================================================================
//                                  Numbers

// let num1 = 123;
// console.log(num1.toString())
// console.log((123+32).toString())

// let z = 9.6645;
// console.log(z.toExponential(2));
// console.log(z.toFixed(2))
// console.log(z.toPrecision(2))
// console.log(z.valueOf())

// let string_to_int = "5";
// console.log(Number(string_to_int));
// console.log(parseInt(string_to_int));
// console.log(parseFloat(string_to_int));

// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(Number.POSITIVE_INFINITY)
// console.log(Number.NEGATIVE_INFINITY)
// console.log(Number.NaN)                   // Nan - Not a Number

// ===============================================================================
//                             Arrays

// const array = ["bmw", "audi", "mercedes"]
// console.log(array);

// console.log(array[1]);
// console.log(array[-1])

// const new_array = new Array("Bmw", "Audi", "Saab")
// console.log(new_array)

// const array2 = [1,2, 3, 4, 5,6];
// console.log(array2);
// array2[2] = 90;
// console.log(array2);

// const array3 = [5, 2, 3, 3, 4, 5, 6]
// console.log(array3.sort())

// const array4 = ["item1", "item2", "item3"]
// array4.push("item4")
// console.log(array4)
// console.log(array4.join(" * "))

// const popped = array4.pop()
// const shifted = array4.shift()
// const unshifted = array4.unshift("item9")
// console.log(popped);
// console.log(shifted);
// console.log(unshifted);

// const array5 = ["Kiwi", "Banana", "Cherry"]
// array5[0] = "Rasberry"
// console.log(array5);

// const array6 = ["Kiwi", "Banana", "Cherry"]
// array6.splice(0, 0, "Lemon", "Strawberry") // Adding 2 element on 0 index without deleting any of other elements
// console.log(array6);

// const array7 = ["Kiwi", "Banana", "Cherry"]
// array7.splice(0, 1);  // Using a splice method to delete first elements
// console.log(array7);

// const array8 = [1, 2, 3, 4, 5]
// const array9 = [6, 7, 7, 8, 9]
// const merged = array8.concat(array9)
// console.log(merged);

// const array1 = ["Banana", "Orange", "Apple", "Mango"]
// console.log(array1.sort());
// console.log(array1.reverse());

// const array11 = [45, 7, 8, 6, 7, 8]
// console.log(array11.forEach((value)=>{
//     console.log("io")
// }))

// // Makes array from strings
// console.log(Array.from("Wassup?"));

//============================================================================
//                         Boolean

// let bool_var = true             // This is variable with bool value

// console.log(10 > 9)             // Evetything with value is true

// let x = 0;
// console.log(Boolean(x));        // Everything without value is false

//=============================================================================
//                         FOR LOOP

// x = ["item1", "item2", "item3"]
// empty = []
// for (let index = 0; index < x.length; index++) {
//     element = x[index]
//     empty.push(element)
// }
// console.log(empty)

// for (stetament1, stetament2, stetament3) {
// }

// ===============================================================================
//                               IF STETAMENT

// const time = 17
// if (time < 10) {
//     greeting = "Good morning";
//     console.log(greeting);

// } else if (time < 20) {
//     greeting = "Good day";
//     console.log(greeting);
// } else {
//     greeting = "Good evening";
//     console.log(greeting);

// }
// ===============================================================================
//                               SWICTH

// switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
// }
// console.log(day);

//============================= Objects ====================================>

// let car = {
//     type: "Fiat",
//     model: 500,
//     color: "white"
// }
// console.log(car.type);

// console.log(car["type"])

// const person = {
//     firstName: "John",
//     lastName: "Smith",
//     id: 5566,
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// };
// console.log(person.fullName())

// Declare Objects as const

// ==============================================================================

//                     Iterators

// let array = [1, 2, 3, 4];
// for (let x of array) {
//     console.log(x);
// }

// const dictionary = {
//     model: "Fiat",
//     color: "white",
// };                                           // Error
//                                              // Dictinaries are not itterable
// for (let x of dictionary) {
//     console.log(x);
// }
// ===========================================================================
// let set = new Set(["a", "b", "c"]);

// let set = new Set();
// set.add("a");
// set.add("b");
// set.add("c");
// console.log(set);

// letters = new Set();
// const a = "d";
// const b = "e";
// const c = "f";
// letters.add(a);
// letters.add(b);
// letters.add(c);
// console.log(letters);

// const cars = new Set(["audi", "bmw", "mercedes"]);
// var text = "";
// cars.forEach(function (value) {
//     text += value;
// });
// console.log(text);
// console.log(cars.size);

// Set methods : new Set() - creates new set
//               add()     - add items to set
//               delete()  - removes item from set
//               has()     - returns boolean value if there is that value in set
//               forEach() - invokes a callback for each element of list
//               values()  - returns an itterator with all values from set
//               size      - returns a number of how many elements we have in set

// ============================================================================
//                           Maps
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["pears", 200],
// ]);

// fruits.set("apples", 600);
// console.log(fruits);
// console.log(fruits.get("bananas"));
// console.log(fruits.size);
// fruits.delete("pears");
// console.log(fruits);
// fruits.has("bananas");
// console.log(fruits.entries());
// let text = "";
// fruits.forEach(function (value, key) {
//     text += key + " = " + value + "  ";
// });
// console.log(text);

// =================================================================================
//                           Errors

// try {
//     addallert("Hello");
// } catch (error) {
//     console.log("The error occured: ", error.message);
// }

// finally {
//      program that is going to be executed regardless of try or catch
//}

// try {
//     num.toPrecision(500); // A number cannot have 500 significant digits
// } catch (err) {
//     console.log(err.name); // prints the name of error
// }

// throw()  creates custom errors
//  =============================================================================

//   Objects Exercises : https://www.w3resource.com/javascript-exercises/javascript-object-exercises.php

// const student = {
//     name: "George",
//     age: 12,
//     class: "VII",
//     rollno: 5,
// };

// 1) console.log(" " + student.name, "\n", student.age, "\n", student.class);

// 2) delete student.rollno;
// console.log(student);

// 3) Object.size = function (obj) {
//     var size = 0,
//         key;
//     for (key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             size++;
//         }
//     }
//     return size;
// };
// var size = Object.size(student);
// console.log(size);

// const person = {
//     fname: "Hamza",
//     lname: "Plojovic",
//     fullname: function () {
//         return this.fname + " " + this.lname;
//     },
// };
// console.log(person.fullname);
// console.log(person.fullname());

// x = new String("hamza");
// console.log(x);
// y = new Number(8);
// console.log(y);

// MAPS;

// const array = [45, 64, 90];
// let map = array.map(myFunc);                     // Map creates a new array from
// function myFunc(value, index, array) {           // old array performing a function
//     return value * 2;
// }
// console.log(map);
// ==============================================================================
// const array = [45, 9, 6, 10, 19, 28];
// const over18 = array.filter(myFunc);

// function myFunc(value, index, array) {   // value itself, index from value, array that we are working on
//     return value > 18;
// }

// console.log(over18);
// ==============================================================================
// const array = [1, 2, 3, 4, 5, 6];
// const array = ["Hamza ", "Plojovic"];
// let sum = array.reduce(myFunc); //reduce runs a function to produce(reduce) array to single value

// function myFunc(total, value, index, array) { // we are adding total argument(initial value / previously returned value)
//     return total + value;
// }

// console.log(sum);
// ==============================================================================
// const array = [1, 2, 3, 4, 5, 6];
// let sum = array.reduce(myFunc, 100); // in this case, we are adding inital value, that is going to be added on top of our array sum

// function myFunc(total, value, index, array) {
//     return total + value;
// }

// console.log(sum);
// ==============================================================================

// const array = [45, 191, 121, 19, 23];
// allover18 = array.every(myFunc);

// function myFunc(value, index, array) {
//     return value > 18;
// }

// console.log(allover18); // every return true or false and nothing else
// ==============================================================================
// const array = [45, 191, 121, 19, 23];
// someover18 = array.some(myFunc);

// function myFunc(value, index, array) {
//     return value > 18;
// }

// console.log(someover18); // some returns true if some of values pass the test or false and nothing else
// ==============================================================================
// const fruits = ["Kiwi", "Banana", "Apple", "Cherry"];
// fruits.includes("Mango"); // true or false
//    search(item)
// ==============================================================================
// const array = [1, 2, 5, 10, 15, 25];
// let first = array.find(myFunc);

// function myFunc(value, index, array) {
//     return value > 18;
// }

// console.log(first); // find searches for the FIRST, FIRST element that passes the test
// ==============================================================================
// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.findIndex(myFunction);

// function myFunction(value, index, array) {
//     return value > 18;
// }
// console.log(first);
// //this searches for the first element that passes the test and displays his index
//==================================================================================
// console.log(Array.from("Hamza")); // display array from this string
//==================================================================================

//               Errors
// try {
//     addallert("Welcome!");
// } catch (err) {
//     console.log(err.message);
// } finally {
// }

// n = 42;
// console.log(typeof String(n));

// string = "Hamza je Dobar";
// string.split(" ");
// for (let index of string) {
//     console.log(index[0]);
// }

// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
// }
// let myCar1 = new Car("Ford", 2014);
// console.log(myCar1.name);
// console.log(myCar1.year);
// let myCar2 = new Car("Bugatti", 2018);
// console.log(" ");
// console.log(myCar2.name);
// console.log(myCar2.year);

// class User {
//     constructor(name) {
//         this.name = name;
//     }
//     sayHi() {
//         console.log("Hi", this.name);
//     }
// }

// let user = new User("Hamza");
// user.sayHi();
// console.log(typeof User);

// let User = class {
//     sayHi(name) {
//         console.log("Hi,", name);
//     }
// };
// let greet = new User().sayHi("Hamza");
// console.log(greet);

// function createCar(brand) {
//     var car = {
//         brand: brand,
//         speed: 0,

//         accelerate: function (amount) {
//             this.speed += amount;
//         },

//         brake: function (amount) {
//             this.speed -= amount;
//         },

//         status: function () {
//             return this.brand + " running at " + this.speed + " km/h";
//         },
//     };

//     return car;
// }

// var car = createCar("Ford");

// console.log(car.status());
// car.accelerate(50);
// console.log(car.status());
// car.accelerate(100);
// console.log(car.status());
// car.brake(25);
// console.log(car.status());

// class User {
//     constructor(name) {
//         this.name = name;
//     }
//     get name() {
//         return this._name;
//     }
// }
// let user = new User("a");
// console.log(user.name);

// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present() {
//         return "I have a " + this.carname;
//     }
// }

// class Model extends Car {
//     constructor(brand, mod) {
//         super(brand);
//         this.model = mod;
//     }
//     show() {
//         return this.present() + ", it is a " + this.model;
//     }
// }

// let myCar = new Model("Ford", "Mustang");
// console.log(myCar.show());

// class Car {
//     constructor(brand) {
//         this._carname = brand;
//     }
//     get carname() {
//         return this._carname;
//     }
//     set carname(x) {
//         this._carname = x;
//     }
// }

// let mycar = new Car("Ford"); // we are running get function
// mycar.carname = "Volvo"; // we are running set function
// console.log(mycar.carname);

// ==========================================================================================

// {
//     const car = "Volvo";
// }
// console.log(car);

// ==========================================================================================

// function UserException(message) {
//     this.message = message;
//     this.name = "UserException";
// }
// function getMonthName(mo) {
//     mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
//     var months = [
//         "Jan",
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//         "Oct",
//         "Nov",
//         "Dec",
//     ];
//     if (months[mo] != undefined) {
//         return months[mo];
//     } else {
//         throw new UserException("NoMonthFoundError");
//     }
// }

// try {
//     // statements to try
//     var myMonth = 15; // 15 is out of bound to raise the exception
//     var monthName = getMonthName(myMonth);
// } catch (e) {
//     monthName = "unknown";
//     console.error(e.message, e.name); // pass exception object to err handler
// }

// const person = {
//     name: "Hamza",
//     lname: "Plojovic",
//     getName() {
//         console.log(this.name + " " + this.lname);
//     },
// };
// function registerUser(country, language) {
//     this.getName();
//     console.log(country);
//     console.log(language);
// }

// const register = registerUser.bind(person);
// register();

// registerUser.call(person, "Serbia", "Serbian");

// registerUser.apply(person, ["hungary", "en"]);

//======================================================================================
// function Todo(name, completed) {
//     this.name = name;
//     this.completed = completed;
//     this.getTodoName = function () {
//         return this.name;
//     };
// }

// const todo1 = new Todo("Buy milk", false);
// const todo2 = new Todo("Do homework", true);
// const todo3 = new Todo("You don't know JS", "never");

// console.log(todo1);
// console.log(todo2);
// console.log(todo3);

// todo1.getTodoName();
// todo2.getTodoName();
// todo3.getTodoName();

// let text =
//     '{ "employees" : [' +
//     '{ "firstName":"John" , "lastName":"Doe" },' +
//     '{ "firstName":"Anna" , "lastName":"Smith" },' +
//     '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// //=====================================================================================
// let obj = JSON.parse(text);
// console.log(obj.employees[0]);
// console.log(obj.employees[1]);
// console.log(obj.employees[2]);
// console.log(
//     "====================================================================================="
// );
// //=====================================================================================
// console.log(obj.employees[0].firstName);
// console.log(obj.employees[1].firstName);
// console.log(obj.employees[2].firstName);
// console.log(
//     "====================================================================================="
// );
// //=====================================================================================
// console.log(obj.employees[0].lastName);
// console.log(obj.employees[1].lastName);
// console.log(obj.employees[2].lastName);
// console.log(
//     "====================================================================================="
// );

// function init() {
//     var name = "John";
//     function displayName() {
//         console.log(name);
//     }
//     displayName();
// }
// init();

// IIFE

// (function () {
//     // some initiation code
//     let firstVariable;
//     let secondVariable;
// })();
// // firstVariable and secondVariable will be discarded after the function is executed.

// Deconstructing

// [a, b, ...rest] = [1, 2, 2, 3, 4, 5, 6, 7, 8];
// console.log(a + "\n" + b + "\n" + rest);

// lista = ["daris", "nesto", "hamza", "nesto2"];

// [ime, ...lista2] = lista;

// console.log(lista2[1]);

// Callback
// function greeting(name) {
//     alert("Hello " + name);
// }

// function processUserInput(callback) {
//     var name = prompt("Please enter your name.");
//     callback(name);
// }

// processUserInput(greeting);

// JS PROMISES
// let myPromise = new Promise(function (myResolve, myReject) {
//     // "Producing Code" (May take some time)

//     myResolve(); // when successful
//     myReject(); // when error
// });

// // "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//     function (value) {
//         /* code if successful */
//     },
//     function (error) {
//         /* code if some error */
//     }
// );

// function myDisplayer(some) {
//     alert(some);
// }

// let myPromise = new Promise(function (myResolve, myReject) {
//     let x = parseInt(prompt("Enter the number"));

//     if (x == 0) {
//         myResolve("OK");
//     } else {
//         myReject("Error");
//     }
// });

// myPromise.then(
//     function (value) {
//         myDisplayer(value);
//     },
//     function (error) {
//         myDisplayer(error);
//     }
// );
// Promise : pending, fullfiled, rejected
fetch("https://fakestoreapi.com/products/1")
    .then((response) => response.json())
    .then((data) => console.log(data.category));
