function findSecondLargest(arr) {
    if (arr.length < 2) {
        return null; 
    }

    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

// Example usage
const numbers = [10, 5, 20, 180, 120];
console.log(findSecondLargest(numbers)); // Output: 12
