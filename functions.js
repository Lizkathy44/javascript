// function is two step function
// define
//syntax 
// function funcName(){
//     //do something
// }
function grumpus(){
    console.log(' ugh..you again...');
    console.log( 'for the last time..');
    console.log|( 'leave me alone!!!');
}

// running/calling/executing
grumpus(); //you must call a function

// No input/argument
function greet(){
    console.log('hi')
};
greet();
// argument/with input
function greet(name){
    // name is the argument
    console.log(`hi, ${name}`);
}
greet( 'kathy');   //kathy is the argument

// multiply two numbers
     //define function     //parameters
function multiply(x,y){
     console.log(x*y);
};
  function multiply(num1,num2){
    console.log(num1*num2)
  };
    // multiply(5,15);
    // multiply(5,10);
    // multiply(20,10);
// calling outside the curly brackets
multiply(2,3);  //(2,3)are arguments

// finding the average of numbers using function
// function avg(arr){
    //let total = 0
//}

// divison
function division (x,y){
    console.log(x/y);
};
division(20,2);

//addition
function add (x,y){
    console.log(x+y)
}
add(20,2);

//square
function square(x){
    console.log(x*x)
};
square(20);

function greet(world){
    console.log(`hello ${world}`.toUpperCase());
};

function avg(arr){
      let sum = 0;
    for(let r of arr){
        sum += r;
        console.log(sum);
    }
    const average = sum / arr.length;
    console.log(average);
}
avg([1,2,3,4,5]);
avg([5,10,15,20,25]);
avg([12,20,30,20,68]);


function findLargest (x,y){
    if (x>y){
    console.log(`${x} is larger!`);
    }
    else if(x<y){
    console.log(`${y}is larger1`);
    }
    else{
        console.log(`${x} and ${y} are equal!`);
    }
}
findLargest(6,9);
findLargest(2,2);

function add(x,y){
    return x+y; //returning only 1 value
}
const total = add(2,3);
console.log(total);
// return [x,y] returns multiple values

function isPurple(color){
    if (color =='purple'){
        return true;
    }
    else{
        return false
    }
};
const colorr = isPurple('purple'); //declaring a new variable to store value
console.log(colorr);

//write a isValidPassword
//it accepts 2 parameters: password and username
//password must:
//  -be atleast 8 characters
//   -cannot contain spaces
//   -cannot contain username
//if all requirements are met return true
//otherwise false

function isValidPassword(password, username){
    if (password.length <8){
        return false
    }
    if (password.indexOf(' ') !== -1){//user1   //user1password
        return false
    }
    if( password.indexOf(username) !== -1){
        return false
    }
    else{
        return true
    }

};
const nPassword = isValidPassword('kathy123','liz');
console.log(nPassword);

//METHOD 2 USING OR
// function isValidPassword(password, username){
//     if (password.length <8 ||
//         password.indexOf(' ') !== -1||  //user1   //user1password 
//         password.indexOf(username) !== -1)
//        { 
//         return false
//        }
//     else{
//         return true
//     }

// };
// const fPassword = isValidPassword('eliza123','kathy');
// console.log(fPassword);

// //METHOD 3
// function isValidPassword(password, username){
//     const tooShort = password.length < 8;
//     const hasSpace = password.indexOf('') !== -1;
//     const containsUsername = password.indexOf(username) !== -1

//apply a condition
// if(tooShort || hasSpace || containsUsername) return false
// return true;
// }; 
// const fPassword = isValidPassword('eliza123','kathy)
// if(!tooShort && !hasSpace && !containsUsername) return true;
// return false;

// //even simpler method
// return !tooShort && !hasSpace && !containsUsername;)
// console.log(fPassword);

//METHOD 4

// a pangram is a sentence that contains every letter of the alphabet
//'The quick brown fox jumps over the lazy dog'
//write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet
//make sure you ignore string casing!

// function isPangram(sentence){
//     let lowerCased = sentence.toLowerCase();
//     for (let char of 'abcdefghijklmnopqrstuvwxyz'){
//         if (lowerCased.indexOf(char) ===-1){
//             return false;
//         }
//     }
//     return true
// }
// const panGram = isPangram('Pack my box with five dozen liquor jugs');
// console.log(panGram);

//How quickly daft jumping zebras vex, Pack my box with five dozen liquor jugs, The quick brown fox jumps over the lazy dog

function isPangram(sentence){
    let lowerCased = sentence.toLowerCase();
    for (let char of 'abcdefghijklmnopqrstuvwxyz'){
        if (!lowerCased.includes(char)){
            return false;
        }
    }
    return true
}
const panGram = isPangram('How uickly daft jumping zebras vex');
console.log(panGram);


let bird = 'mandarin duck'
function birdWatch(){
    let bird = 'golden pheasant';
    console.log(bird) //golden pheasant;
};
console.log(bird)       //bird is scoped to birdWatch function
birdWatch();

//High Order functions
function callTwice (func){
    func();
    func();
};
function laugh(){
    console.log('KICHEKOOOOOO');
};
callTwice(laugh);



function makeBetweenFunc (min, max){
    return function(val){
        return val >=min && val <=max;
    }
}
const inAgeRange = makeBetweenFunc(18, 100);

      inAgeRange(17);
      inAgeRange(68);

      console.log(inAgeRange(17));
      console.log(inAgeRange(68));

   //Callback functions is a function passed into another function as an argument, which is then invoked inside the outer function.

   

   //automatically repeat function a certain number of times
   function rage(){
console.log("I LOVE MYSELF");
   };
   function repeatNTimes (action,num){
    for(let i = 0; i<num; i++){
        action();
    }
   }

   repeatNTimes(rage, 5);

//Reasons why we store functions in variables
//1. In JavaScript, functions are objects
//-this means we can  put them in a variable
//-we can store alot of them in an array
//- we can pass them around as arguments
//use console.dir in the browser to prove that functions are objects

function add(x,y){
    return x + y;
};

function substract(x,y){
    return x - y;
};

function multiply(x,y){
    return x * y;
};

function divide(x,y){
    return x / y;
};

const learner = {
    math: add,
    
};
// console.log(student);
console.log(learner.math(25,65));

const studnt = [add,substract, multiply, divide];

for (let name of studnt){
    let students= name(25,10)
        console.log(students);   
};



