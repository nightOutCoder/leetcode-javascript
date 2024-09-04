/*
Brute Force
Time O(n2) | Space O(1)
*/

var containsDuplicate = function(nums) {

    for(let i = 0 ; i < nums.length;i++){
        for(let j = 0; j < i ; j++){
             let data = nums[i] == nums[j];
             if(data) return true;
        }
    }
    return false;
};

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));


/*
Optimized
Time O(n) | Space O(n)
*/

var containsDuplicate = function(nums) {

    let store= {};

    for(let element of nums){
        if(store[element]){
            store[element]++;
        } else {
            store[element] = 1;
        }
    }

    for(let data in store){
        if(store[data] >=2){
            return true;
        }
    }
    return false;
};

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
console.log(containsDuplicate([2,14,18,22,22]));



