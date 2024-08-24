// Single Number

/*
Brute force approach
Time : o(n)
Space: o(n)
*/
var singleNumber = function(nums) {
    let store = {};
    let result;

    for(let element of nums){
        if(store[element]){
            store[element]++
        } else {
            store[element] = 1;
        }
    }

    for(let element in store){
        if(store[element] < 2){
            result = element;
        }
    }

    return result;
};

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([1]));



/*
optimized way
*/
var singleNumber = function(nums) {
    let result = 0 ;

    for(let element of nums){
        result ^= element;
    }
    return result;
};
console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([1]));