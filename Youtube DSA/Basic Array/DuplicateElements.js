const arr = [10,20,20,30,40,40]

function duplicateElement(arr){
    let value = arr[0]
    let duplicate;

    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                console.log(arr[i]);
            }
        }
    }
    return "Duplicate value printed successfully done"
}

console.log(duplicateElement(arr));
