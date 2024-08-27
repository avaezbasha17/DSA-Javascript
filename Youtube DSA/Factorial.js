// function factorial(n){
//     return (n === 1) ? 1 : n * factorial(n - 1);
// }

function factorial(n){
    let result=1;
    while(n>1)result *= n--;
    return result
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(3));
console.log(factorial(2));

