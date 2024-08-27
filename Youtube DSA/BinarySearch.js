function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return -1; // Target not found
}

// Example usage:
let arr = [10, 4, 6, 2, -5];

// Step 1: Sort the array
arr.sort((a, b) => a - b);  // Array becomes [-5, 2, 4, 6, 10]
console.log(binarySearch(arr, 4));  // Output: 2
console.log(binarySearch(arr, 10)); // Output: 4
console.log(binarySearch(arr, -5)); // Output: 0
console.log(binarySearch(arr, 8));  // Output: -1 (8 is not in the array)
