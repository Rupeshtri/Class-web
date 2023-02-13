/* var name = "hari";

// console.log(typeof name);

var age = 2.3;

//  console.log(typeof age);

var isMarried = 1;

// console.log(typeof isMarried);
var person{
    surname: "Bhusal", name ="Hari", age = "23"

}
console.log(person); */

//Boolean 
//console.log(typeof true);
//console.log(typeof false);

/* let isAProgrammer = true;
let learningToCode = false;

console.log(isAProgrammer);
console.log(learningToCode); */


// NULL

/* var firstValue = null;
console.log(firstValue);
console.log(typeof firstValue); */

// OBJECT

/* const userDetails = {
    firstName : 'Rupesh' ,
    lastName  : 'Tripathi' ,
    age       : '22' ,
    tel       : '11-111-1111' 
};

console.log(userDetails); */

// BigInt generally it is not used in practically
// let num1 = BigInt(1);
// console.log( num1);

/* let a = 10n;
let b = 20n;

console.log( a+b); */

//console.log(1+2n);  not allowed to add number and alzebric expression.



//OBJECT
/* let mobile = {
    color: "blue" ,
    price: "150000",
    brand: "Apple",
    OS:     "macOS"
}
console.log(mobile);
console.log(typeof mobile);
 */
/* let rupesh = {
    myFullName : "Rupesh Tripathi",
    age        : 22,
    myDetails  : function(){
        console.log('It\'s fun to learn js');
    }
} 
console.log(rupesh.myFullName);
//console.log(rupesh.myDetails()); or you cando like below
rupesh.myDetails(); */


/* let fullName = prompt("Enter a Full Name");
alert(fullName);

let firstNum = parseInt(prompt("Enter First Number"));
let secondNum = parseInt(prompt("Enter Second Number"));
let thirdNum = parseInt(prompt("Enter Third Number"));

alert(firstNum + secondNum + thirdNum);
 */
// OR YOU CAN DO LIKE BELOW 
let firstNum = prompt("Enter first number");
firstNum = parseInt(firstNum);
let secondNum = prompt("enter second number");
secondNum = parseInt(secondNum);
let thirdNum = prompt("enter third numbrer");
thirdNum = parseInt(thirdNum);

alert(firstNum + secondNum + thirdNum);