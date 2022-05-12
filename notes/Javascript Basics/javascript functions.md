

Functions can be defined with many different ways : 


const myFunction  = () => (5)

const myFunction = () => {return 5}

function myFunction() {return 5}

// this will return 5. 


x = myFunction()
console.log(x) // 5


const t  = {
  name : "Demetres" , 
  age : 23 , 
  education : "bach", 
  greet : function(){
    console.log("hello," + this.name)
    
  },
  growOlder : function () {
    this.age += 1
  }
}

// You can call the greet function like this : 

t.greet() // hello, Demetres

// You can save the reference of the function 

const ref = t.greet
ref() // undefined this

// To solve this, you either don't use stupid this statements, or 


const ref = t.greet.bind(t)
ref() // hello, Demetres.

Javascript defines this depending on how the function is called, so you might 
mess up big time. We don't really use this. 