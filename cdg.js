console.log('hello');

const b = 'smoothie';
console.log(b);

const someNumber = 45;
console.log(someNumber);

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
function func() {
    console.log('this is a function');
}

// Call
func();

/* Let`s create a function that take in a name
and says hello followed by your name

For example

Name: 'Aksige'
Return: 'Hello Aksige'
*/

function greeting(yourName) {
    let result = `Hello ${yourName}`;
    console.log(result);
}

const name = prompt('What is your name?');

greeting(name);

// How do arguments work in functions?
// How do we add 2 numbers together in a function?

function sumNumbers(num1, num2) {
    let result = num1 + num2;
    console.log(num1 + num2);
}

sumNumbers(10, 10);