// program to check if the number is even or odd
function even(){
    let nums = 10;
    if (nums % 2===0){
        console.log('is even');
    }
    else {
        console.log('is odd')
    }
}
even()

function odd(){
    let numbs = 11;
    if (numbs % 2===0){
        console.log('is even');
    }
    else {
        console.log('is odd')
    }
}
odd()

//CONVERTING CURRENCY
function currency(){
    let usDollar = 145;
    let kenyaShillings = 1000;

    let tokenyaShillings = usDollar * kenyaShillings
    console.log(`The conversion is ${tokenyaShillings} usd`)
}

currency()


