// start at 1  //stop at 10  //add 1 each time
for (let i=1;    i<=10;       i++){
    console.log(i);
}


for (let n=0; n<=20; n++){
    console.log(n);
}

for (let k=20; k>=10; k--){
    console.log(k);
}

for (let w=0; w<=50; w +=10){
    console.log(w);
}  
const animals = ['lions', 'tigers', 'bears']
for (let i = 0; i < animals.length; i++){
    console.log(i, animals[i]);
}
// animal at index of 0 is lion

const animal = ['lion', 'tiger','bears'];
for(let i = 0; i <animal.length; i++){
    console.log(`animal at index of ${i} : ${animal[i]}`);
}

// NESTED LOOPS
let str = 'LOL';
for(let i = 0; i<=4; i++){
    console.log("Outer:", i);
    for( let j = 0; j<str.length; j++){
        console.log('Inner:', str[j]);
    }
}

// WHILE LOOPS-continues to run as long as it test condition is true
let num = 0;
while (num < 10){
    console.log(num);
    num++;
}

// A COMMON PATTERN
// Math.round
// Math.floor gives numbers as an integer
// Math.ceil
// Math.pow
// Math.random gives numbers between 0 and 1
// Math.sign
// Math.sqrt
// Math.max
// Math.min

let targetNum = Math.floor(Math.random()*10);  //generate numbers between 0 and 10 an cut off the decimal part
let guess = Math.floor(Math.random()*10);      //generate numbers between 0 and 10 an cut off the decimal part

while (guess !== targetNum ){
    console.log(`Guessed ${guess}...Incorrect!`);
    guess = Math.floor(Math.random()* 10);
}
console.log(`CORRECT! Guessed: ${guess} & target was: ${targetNum}`);



let targetNum1 = Math.floor(Math.random()*10);  //generate numbers between 0 and 10 an cut off the decimal part
let guesses = Math.floor(Math.random()*10);      //generate numbers between 0 and 10 an cut off the decimal part

while (guesses !== targetNum1 ){
    console.log(`Guessed ${guesses}...Incorrect!`);
    guesses = Math.floor(Math.random()* 10);
}
console.log(`CORRECT! Guessed: ${guesses} & target was: ${targetNum1}`);