function factorial(n){
    if (n==0){
        return 1;
    }
    else{
        return factorial(n-1) * n;
    }
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(6));
console.log(factorial(8));
