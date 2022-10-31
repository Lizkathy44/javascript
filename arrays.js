// creating arrays
let students = []
students[0]='femidevs'
    console.log(students);

    // arrays can apply on strings
let colors = [`red`, `orange`, `yellow`];
console.log(colors);
 
// can also apply on numbers
let lottoNums = [19,22,56,12,51];
console.log(lottoNums);

// can also apply on mixed values i.e strings,numbers,booleans,null,undefined etc
let stuff = [true, 68, 'cat', null];
console.log(stuff);

let mixed = ['joy', 54, false, null,undefined]
 console.log(mixed);

 mixed.push("Kenya");
 

let fruits = ['oranges','apples',20, false,undefined];
console.log(fruits);

// JOIN-creates a string from an array
let items = [1,2,'fruits', false, true];
let includedValue = items.includes('fruits');
console.log(items.includes('fruits'));
console.log(items.join('-'));

let newItems = [1,2,'fruits', false, true];
console.log(items.join('.'));

let newItems2 = [1,2,'fruits', false, true];
console.log(items.join('#'));

let newItems3 = [1,2,'fruits', false, true];
console.log(items.join('@'));

let newItems4 = [1,2,'fruits', false, true];
console.log(items.join('!'));

// REVERSE-reverses an array
let reversed = items.reverse();
console.log(reversed);

// SLICE- copy portion of an array
// let newItems = [1,2,'fruits', false, true];
 let sliced = newItems.slice(1,4);
 console.log(sliced);

//  SPLICE-remove/replace elements
let splicer = ['orange', 'apples','watermelon','mangoes','guava'];

// REMOVING AN ITEM USING SPLICE
// splicer.splice(2,1);
splicer.splice(2,2);


// add items using splice
splicer.splice(0, 0, 'grapes');
splicer.splice(2, 0, 'banana', 'avocado', 'tomato', false);
// splicer.splice(0, 0, 'grapes');

// REPLACING ITEMS USING SPLICE
splicer.splice(0, 1, 'JACKFRUIT');
console.log(splicer);

// SORTING ARRAYS
let sorter = ['crocodile', 'lizard','chameleon','salamander','alligator'];
let sorted = sorter.sort();
console.log(sorted);
// in strings we use sort while in numbers we use functions.

// NESTED ARRAYS
const color = [
    ['red','crimson'],
    ['orange','dark orange'],
    ['yellow','golden rod'],
    ['green','olive'],
    ['blue','navy blue'],
    ['purple','orchid']
]
console.log(color[0]);
console.log(color[0][1]);
console.log(color[4][1]);
console.log(color[3][1]);
console.log(color[4][0]);
console.log(color[2][0]);
// console.log(color);
// color.push(['white','snow white']);
console.log(color);
// or
// color[6] = ['black', 'blackboard'];

// or
color.splice(6, 0, ['golden', 'mustard'])
console.log(color);

let concatenated = color[2].concat(color[4]).reverse();
console.log(concatenated.join('-'). toUpperCase().repeat(3));


// IN ARRAY
const details = [
    ['age', 20],
    ['city','Tulsa'],
    ['isAdmin',true],
    ['zip',91003]
]
// console.log (details.join(':'));

const age = details[0].join(':');
console.log(age);
const city = details[1].join(':');
console.log(city);
const isAdmin = details[2].join(':');
console.log(isAdmin);
const zip = details[3].join(':');
console.log(zip);

const newlyConcatenated = age.concat(city).concat(isAdmin).concat(zip);
console.log(newlyConcatenated);

// key is variable together with its value














