function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(3));


// function isPowerOfTwo(n){
//     if(n<1) return false;
//     while(n>1){
//         if(n%2!==0) return false;
//         n=n/2;
//     }
//     return true;
// }