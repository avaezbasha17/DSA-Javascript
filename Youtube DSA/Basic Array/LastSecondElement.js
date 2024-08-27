const arr = [10,40,90,38,29]

function lastSecondElement(arr){
    for(let i=0;i<arr.length;i++){
        if(i==arr.length-2) return arr[i]
    }
}

console.log(lastSecondElement(arr));
