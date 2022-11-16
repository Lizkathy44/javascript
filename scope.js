//SCOPE
//function scope
let bird = 'mandarin duck'
function birdWatch(){
    let bird = 'golden pheasant';
    console.log(bird) //golden pheasant;
};
console.log(bird)       //bird is scoped to birdWatch function
birdWatch();

//Block scope
let radius = 8
if(radius > 0){
    const PI = 3.14;
    let circ = 2 * PI * radius;
    console.log(circ)
};
    console.log(radius);  //8
    console.log(PI);
    console.log(circ);

//Lexical scope- refers to the fact that nested functions are bound to their parent functions. They are only available in their parent function.
function outer(){
    let movie = "Accident Man"; //available across the whole function
          console.log(movie);
    function inner(){
        let movie = 'Shoot em up'; //available only inside the nested function
        console.log(movie.toUpperCase());

        //more nesting
        function extras (){
            console.log(movie.toUpperCase()); //looks for the nearest movie value and prints it out
        }
        extras();
    }
    inner();
}
outer();

// FUNCTIONS DECLARATION
//syntax
// function funcName(){
//     //something
// };

//FUNCTIONS EXPRESSIONS
//syntax 
//const square = function (){
    // return;
// };
    const square = function (num){
    return num * num;
};
square(6);
console.log(square(6));