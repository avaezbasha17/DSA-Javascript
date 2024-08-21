function linearSearch(n) {
    for (const [i, num] of [-5, 2, 4, 6, 10].entries()) {
        if (num === n) return i;
    }
    return -1;
}

console.log(linearSearch(-5));
console.log(linearSearch(2));
console.log(linearSearch(4));
console.log(linearSearch(6));
console.log(linearSearch(10));
