let arr = [10, 4, 6, 2, -5];

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
    }
}

console.log(arr);


// let arr = [10, 4, 6, 2, -5];
// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap using destructuring
//         }
//     }
// }
// console.log(arr);  // Output: [-5, 2, 4, 6, 10]
