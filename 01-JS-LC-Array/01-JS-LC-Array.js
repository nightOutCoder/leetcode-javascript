console.log('LC JS : 941. Valid Mountain Array');

const input = [0,2,3,4,5,2,1,0];
var validMountainArray = function(arr) {
    let left = 0, right = arr.length-1;

    if(arr.length < 3 ){
        return false;
    }

    while(left + 1  < arr.length-1 && arr[left] < arr[left+1]){
        left++;
    }

    while(right-1 > 0 && arr[right] < arr[right-1]){
        right--;
    }
    return left == right ;
};

console.log(`is input array is a valid mountain array : ${validMountainArray(input)}`);