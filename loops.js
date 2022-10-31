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

// NESTED LOOPS in every iteration of the outer loop the inner loop completes its cycle
let str = 'LOL';
for(let i = 0; i<=4; i++){
    console.log("Outer:", i);
    for( let j = 0; j<str.length; j++){
        console.log('Inner:', str[j]);
    }
}

for (let i = 0; i<=4; i++){
    console.log(`Outer: ${i}`);
    for (let j = 0; j <4; j++){
        console.log(`${j}`);
    }
};
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
// Math.pow (x to the power of y)
// Math.random generates numbers between 0 and 1
// Math.sign
// Math.sqrt
// Math.max
// Math.min

let targetNum = Math.floor(Math.random()*10);  //generate numbers between 0 and 10 an cut off the decimal part
let guess = Math.floor(Math.random()*6);      //generate numbers between 0 and 6 an cut off the decimal part

// as long as guess is not equal to targetNum it will result to incorrect until when guess is equal to targetNum it will result to correct
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

// for..of loop
for (let s of 'yell'){
    console.log(s);
}
// or
let str2 = 'yell';
for (let i = 0; i<str.length; i++){
    console.log(str2[i]);
}

let subreddits = ['soccer', 'popheads', 'cringe', 'books'];
for(let sub of subreddits){
    // Do this for every item in subreddits array:
    console.log(`${sub} - www.reddit.com/r/${sub}`);
}

const magicSquare = [
    [2,7,6],
    [9,5,1],
    [4,3,8]
];

// ACCESSING ELEMENTS WITHIN A NESTED ARRAYS
// console.log(magicSquare[0]);
// console.log(magicSquare[0][1]);

for (let row of magicSquare){
    // console.log(row);
    let sum = 0;//sum will start at 0
    for (let num of row){
        console.log(num);
        sum += num;
    }
    console.log(`Row of ${row} sums to ${sum}`);
}