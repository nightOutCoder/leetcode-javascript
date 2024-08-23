function validMountainArray(arr) {

    let left = 0;
    let right = arr.length-1;
    
    if(arr.length < 3){
        return false;
    }

    while(arr[left] < arr[left+1]){
        left++;
    }

    while(right > 0 && arr[right] < arr[right-1]){
        right--;
    }

    if(left == right)
        return true;
}

console.log(validMountainArray([[0,1]]));
console.log(validMountainArray([0,3,2,1]));


