## Javascript Fundamentals

## Arrays : 

Used for your basic array needs. 

```javascript
arr.push()    //  Append to the end of the array. 
arr.shift()   //  Get the first element of the array
arr.pop()     //  Get the final element of the array. 
arr.unshift() //  Append an item to the first position of the array. 
```

## Objects

```javascript
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
    //"bark": "woof"
};
```

Add a new property by doing  : myDog.bark = "woof
Delete a property by doing : delete myDog.tails


Conditional operators : 
-----------------------------------------------------------------
condition ? statement-if-true : statement-if-false;
return a > b ? "a is greater" : "b is greater";


return a == b ? true : false

Multiple conditional operators : 


return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";


ES6 : Arrow Functions : 
-----------------------------------------------------------------


Anonymous functiosn : used when you don't really need to name a function, 
commonly used when for example you are passing a function as a parameter for another function. You are not reusing them anywhere else. 


So you could do : 


const myFunction = function(){

  let myVariable = "test";
  return myVariable;
}

Alternative way to do this would be : (Arrow functions)


      Name of function, parameters
const myFunction = () => {

  let myVariable = "test";
  return myVariable;
}

if you just want to return one value, a more simplified, one line way is this : 


const myFunction = () => "test"
const myFunction = () => new Date()

Example for that could be : 

const doubler = (num) => num * 2;


Higher Order Arrow Functions : 

They work really well with higher order functions such as map, filter and reduce. 


for example : 



FBPosts.filter()

FBPosts is the array, filter is the predefined method.


So as a paramenter to filter, you need a function that returns only the posts that you want.
FBPosts.fitler(function(post){

  return post.thumbail !== null && post.shares > 100 && post.likes > 500;
})


Instead you can write something like this :



FBPosts.filter((post) => post.thumbail !== null && post.shares > 100 && post.likes > 500)

Arrow functions : 

const myFunction = () => "test", so you chop up the first part, and the last one remains. 

(PARAMETER TO PASS) => "RETURN_VALUE HERE"

(post) => post.thumbail !== null && post.shares > 100 && post.likes > 500);


Bigger example : 

Use arrow function syntax to compute the square of only the positive integers
(decimal numbers are not integers) in the array realNumberArray and store the
new array in the variable squaredIntegers.



// So you got a array of real numbers.
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

// square list function that its parameter is an array.
const squareList = (arr) => {
  "use strict";

  // Array squaredIntegers that is created by taking the passed array (the parameter of the function)
  const squaredIntegers = arr
  .filter((number) => number > 0 && number == Math.floor(number))  // We filter only the positive integers.
  .map((number) => number * number);  // And only to the numbers that we filtered, we get the square
  
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);



You could also add this after the map, to add it all up .

.reduce((accumulator , currentValue) => accumulator += currentValue);


ES6 : Rest Operator : 
-----------------------------------------------------------------

If you don't really know how many arguments you are going to pass to your function then fear no more, you can use this to input parameters dynamically.

The parameters are stored into an array and can be accessed through that.

This really helps if you want to do things such as filter / map / reduce, as the input is an array :) 


 


