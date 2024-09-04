/*
* Brute force approach in which we have to do the multiplication which is not good 
*/
var arraySign = function(nums) {
    let product = 1;
    for(let i = 0 ; i < nums.length; i++){
        product *=nums[i];
    }
    if(product == 0)
        return 0;
    else if(product < 1)
        return -1;
    else return 1;
}
console.log(arraySign([-1,-2,-3,-4,3,2,1]));
console.log(arraySign([1,5,0,2,-3]));
console.log(arraySign([-1,1,-1,1,-1]));





/*
* For elegent solution no need to do multiplication
* convert arry to -1 and 1
* count the sign and kept condition
*/
var arraySign = function(nums) {
    let negSignCount = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 0){
            return 0;
        } else if(nums[i] < 0){
            negSignCount++;
        }
    }
    if(negSignCount % 2 == 0){
        return 1;
    } else {
        return -1;
    }
};

console.log(arraySign([-1,-2,-3,-4,3,2,1]));
console.log(arraySign([1,5,0,2,-3]));
console.log(arraySign([-1,1,-1,1,-1]));