// variable => name of the variable
// value => value of the variable
// type => data type of the variable
// scope => where the variable is accessible

// variable

// var
// let
// const

// var a = 10
// console.log(a)

// let b = 20
// console.log(b)

// const c = 30
// console.log(c)

// var => functional Scope or Global Scope
// let => block Scope
// const => block Scope 


// var a
// console.log(a)  // undefined

// let b
// console.log(b)  // undefined

// const c = 10
// console.log(c)  // 10



// const => declare variable with value
// let => declare variable without value
// var => declare variable without value

// conditional statement (if, else)

// if (condition) {
//     // code to be executed if condition is true
// } else {
//     // code to be executed if condition is false
// }


// eligiblity for vote (age >= 18)

// var age = prompt("Enter your age :")

// if (age >= 18) {
//     console.log("You are eligible to vote")
// } else {
//     console.log("You are not eligible to vote")
// }


// function => block of code that can be reused


// function Function_name(param1, param2) {
//     // code to be executed
// }

// calculator app



// function add(a,b) {
//     console.log(a + b)
// }

// function sub(a,b) {
//     console.log(a - b)
// }

// function mul(a,b) {
//     console.log(a * b)
// }

// function div(a,b) {
//     console.log(a / b)
// }

// let op = prompt("Enter the operation (+, -, *, /)") 
// let num1 = Number(prompt("Enter the first number"))
// let num2 = Number(prompt("Enter the second number"))

// if(op == "+") {
//     add(num1, num2)
// } else if(op == "-") {
//     sub(num1, num2)
// } else if(op == "*") {
//     mul(num1, num2)
// } else if(op == "/") {
//     div(num1, num2)
// } else{
//     alert("Invalid operation")
// }


// DOM => Document Object Model
// 1. getElementById()
// 2. getElementByClassName()
// 3. getElementByTagName()

// var anchor = document.getElementsByTagName("a")
// console.log(anchor)

// var box1 = document.getElementById("box1")
// console.log(box1)

// var box = document.getElementsByClassName("box")
// console.log(box)


// add new tag in List class


var list = document.getElementsByClassName("list")

var newLi = document.createElement("li")
newLi.textContent = "Hello World"
list[0].appendChild(newLi)



// Todo app

// Event
