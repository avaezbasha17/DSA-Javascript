function binarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1)
}
function search(arr, target, lowValue, highValue) {
    if (lowValue > highValue) return -1;

    let midValue = Math.floor((lowValue + highValue) / 2)

    if (target === arr[midValue]) return midValue;

    // (target > arr[midValue]) ? (search(arr, target, midValue + 1, highValue)) : (search(arr, target, lowValue, midValue - 1))

    if (target > arr[midValue]) {
        return search(arr, target, midValue + 1, highValue);
    } else {
        return search(arr, target, lowValue, midValue - 1); // Corrected this line
    }
}

// Example usage:
let arr = [10, 4, 6, 2, -5];

// Step 1: Sort the array
arr.sort((a, b) => a - b);  // Array becomes [-5, 2, 4, 6, 10]
console.log(binarySearch(arr, 4));  // Output: 2
console.log(binarySearch(arr, 10)); // Output: 4
console.log(binarySearch(arr, -5)); // Output: 0
console.log(binarySearch(arr, 8));  // Output: -1 (8 is not in the array)



// Sorting the Array without sort() methods //

// let arr = [10, 4, 6, 2, -5];
// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             // Swap arr[j] and arr[j + 1]
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }
// console.log(arr);  // Output: [-5, 2, 4, 6, 10]

//Sorting the Array using destructuring

// let arr = [10, 4, 6, 2, -5];
// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap using destructuring
//         }
//     }
// }
// console.log(arr);  // Output: [-5, 2, 4, 6, 10]
