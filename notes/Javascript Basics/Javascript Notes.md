Javascript Notes


0) Functions : 

you define functions like this : 

function <functioName> (parameteres1, parameter2, ...){ // No type needed ( functionName (name , age ))

}


1) Variables : 


- TL;DR : 

Var : is declared globally, if not decalred withing a function, works like normal variables in all languages.

Let : is block-scoped, it is limited to that block , statement or expression.

Const : Exact same with let, but you cannot change the value of the variable, they are immutable, just like individual characters of a string. 


- var : function scoped : if you declare them inside a for loop they will be available even outside it .
(for loop is block scope)


- let : block scoped : available only inside the block that they are defined.

That means that you can re-declare your variables inside the block 

let x = "global";


if (x === "global"){
  let x = "block-scoped";
  let y = "block-scoped";
  console.log(x)
  console.log(y)
}
console.log(x)
console.log(y)


This prints : 

'block-scoped' // X after changing the value
'block-scoped' // Y after assigning the value
'global'        // X outside the block, having the initial value
error: Uncaught ReferenceError: y is not defined    // Y is not defined outside the if statement, variable doesn't exist. 


- const : These variables cannot be reassigned new values. 

But they are objects, so their properties can change values. 


const person = {
  
  name : 'Dimitris',
  age : '21',
}

person.age = "35"
console.log(person.age) // Prints 35.



-- The temporal dead zone. 

var values can be accessed before we define them!! Like watafak 
But you shouldn't really do that with let and const.

console.log(i);
var i = "I am a variable";

Output : undefined
