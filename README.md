#Question-1 
## 1) What is the difference between null and undefined?
null is developers defined object which is reffers that developer is intentionally don't assign any value. on the other hend undefined is by defult behavior of javaScript. when it's find no value is assign it's return undefined it means absentce of value.

#Question-2
## 2) What is the use of the map() function in JavaScript? How is it different from forEach()?
In javaScript map() function is an array method whict is return a new array with modification that you want. it's not changing the origenal array. it's create a new one and return it as final output. and the difference between map() and forEach() is map() returns a new array but the forEach is not.

#Question-3
## 3) What is the difference between == and ===?
In the js `==` is used for compering only values. on the other hend `===` check both value and dataTypes

#Question-4
## 4) What is the significance of async/await in fetching API data?
To fetch data from API async/await play more significant role then `.then`. Bz it's make code asyncronus and let javaScript to read code syncronusly. moreover it's make code more professional , clean and more readable.

#Question-5
## 5) Explain the concept of Scope in JavaScript (Global, Function, Block).
Scope is stands for where a variable can be accessed in js. there are main 3 scope in js ( `blocl` , `function` , `Global`). 
1. Block Scope
   when a variable decleard in `{}` like (`for` , `while`). in this case that variable only accessable in the block. `const` `let` grand permmision to declear variable. `var` has no block scope
2. Function Scope
   In this case variable is decleared in the function body. it can't be access outside of function. `const` `var` `let` allow the developer to declear a variable in function scope.
3. Global Scope
   Last but not least is Global Scope. there are variable is decleard globally. this variable can be accessed from the anywhere of program. Sometimes it's create problems.
