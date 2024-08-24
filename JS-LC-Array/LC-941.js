function validMountainArray(arr) {

    let left = 0;
    let right = arr.length-1;
    
    if(arr.length < 3){
        return false;
    }

    while(left < right && arr[left] < arr[left+1]){
        left++;
    }

    while(right > 0 && arr[right] < arr[right-1]){
        right--;
    }

    if(left > 0 && left == right && right < arr.length-1) return true;
    else return false;
}



console.log(validMountainArray([[0,1]]));
console.log(validMountainArray([0,3,2,1])); 
console.log(validMountainArray([3,5,5])); 
console.log(validMountainArray([0,1,2,3,4,5,6,7,8,9])); 
console.log(validMountainArray([9,8,7,6,5,4,3,2,1,0])); 
