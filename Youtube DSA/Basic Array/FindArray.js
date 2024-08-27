function findArray(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        return arr[i] == n ? i : -1;
    }
}

let arr = [20,10,30,25,50]

console.log(findArray(arr,30));
console.log(findArray(arr,22));
console.log(findArray(arr,10));
