//write function
//pass arguments adjective precedence
//use return function instead of console log
//call 3 functions with different sentence

function madlib(adjective, noun, verb, adverb){
    return `The ${adjective} ${noun} ${verb}  was too ${adverb}`;
}
let madOne = madlib('unique', 'story', 'told', 'catchy');
console.log(madOne);

let madTwo = madlib('red', 'dress', 'sold', 'short');
console.log(madTwo);

let madThree = madlib('obvious', 'narrative', 'spoken', 'fun');
console.log(madThree);

let madFour = madlib( 'grey','cat', 'jump','higher');
let madFive = madlib( 'maroon','eagle', 'soar','high');
let madSix = madlib( 'angry','man', 'sniff','briskly');

console.log(madFour);
console.log(madFive);
console.log(madSix);