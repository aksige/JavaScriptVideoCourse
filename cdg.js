// console.log('hello');

// const b = 'smoothie';
// console.log(b);

// const someNumber = 45;
// console.log(someNumber);

// ====DOM=====

// const age = prompt('What is your age?')

// document.getElementById('someText').innerHTML = age;

// ====Numbers=====

// let num1 = 10;
// num1++;
// num1--;
// console.log(num1);
// console.log(num1 % 6);

// num1 += 20;
// console.log(num1)

/* ====Functions=====
    1.Create a function
    2.Call the function
*/
// function func() {
//     console.log('this is a function');
// }

// Call
// func();

/* Let`s create a function that take in a name
and says hello followed by your name

For example

Name: 'Aksige'
Return: 'Hello Aksige'
*/

// function greeting(yourName) {
//     let result = `Hello ${yourName}`;
//     console.log(result);
// }

// const name = prompt('What is your name?');

// greeting(name);

// // How do arguments work in functions?
// // How do we add 2 numbers together in a function?

// function sumNumbers(num1, num2) {
//     let result = num1 + num2;
//     console.log(num1 + num2);
// }

// sumNumbers(10, 10);

/*
While loops

let num = 0;

while (num < 100) {
    num += 1;
    console.log(num)
}

// For loop
for (let num = 0; num <= 100; num++) {
    console.log(num);
}


// Data types
let yourAge = 21; //number
let yourName = 'Aksige'; //string
let name = {first: 'Joe', last: 'Doe'}; //object
let truth = false; //boolean
let groceries = ['apple', 'banana', 'oranges']; //array
let random; //undefined
let nothing = null; //value null



// Strings in JavaScript (common methods)
let fruit = 'banana';
let fruitArr = 'banana,apple,orange,blackberry';
let moreFruits = 'banana\napple';   // \n - new line
// console.log(moreFruits);
console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(5));
console.log(fruit[2]);
console.log(fruit.split('')); //split by characters
console.log(fruitArr.split(',')); //split by a comma



// Array

let fruits = ['banana', 'apple', 'orange', 'blackberry'];
fruits = new Array('banana', 'apple', 'orange', 'blackberry');

console.log(fruits[2]); //access value at inex 2nd

fruits[0] = 'pear';
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Array common methods

console.log('to string', fruits.toString());
console.log(fruits.join(' - '))
console.log(fruits.pop(), fruits) // removes las item and return value 
console.log(fruits.push('pineapples'), fruits); //appends
console.log(fruits[4]);
fruits[fruits.length] = 'new fruit'; // same as push
console.log(fruits);
fruits.shift(); // remove first element from a list
console.log(fruits);
fruits.unshift('kiwi'); // add first element from a list
console.log(fruits);
let vegetables = ['asparagus', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort())

let someNumbers = [5, 10, 23, 45, 8, 534, 123, 56, 8, 45, 7];
console.log(someNumbers.sort(function (a, b) { return a - b }));
console.log(someNumbers.sort(function (a, b) { return b - a }));

let emptyArray = new Array();
for (let num = 0; num <= 10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray);

*/

let student = {
    first: 'Yuri',
    last: 'Raskin',
    age: 32,
    height: 185,
    studentInfo: function () {
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};
/*
console.log(student.first);
console.log(student.last);
student.first = 'notYuri'; //change value
console.log(student.first);
*/
student.age++;
// console.log(student.age);
console.log(student.studentInfo());

// Conditionals, Control flows (if else)
// 18-35 is my target demographic
// && AND
// || OR
let age = prompt('what is your age?');

if ((age >= 18) && (age <= 35)) {
    status = 'target demo';
    console.log(status);
} else {
    status = 'not my audience';
    console.log(status);
}

// Switch statements

switch (2) {
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';

}
console.log(text);