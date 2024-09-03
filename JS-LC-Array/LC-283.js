/*
* Bruteforce way
*/
var moveZeroes = function(nums) {

    zeroArray = [];
    nonZeroArray = [];

    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            zeroArray.push(0);
        } else {
            nonZeroArray.push(nums[i]);
        }
    }
    nonZeroArray.push(...zeroArray)
    return nonZeroArray;
};
console.log(moveZeroes([0,1,0,3,12]));




/*
* O(n) - Time
* O(1) - space 
*/
var moveZeroes = function(nums) {
    let counter = 0;
    for(let i = 0; i < nums.length; i++){
       if(nums[i] !==0){
        nums[counter] = nums[i];
        counter++;
       }
    }
    console.log(nums);

    while(counter < nums.length){
        nums[counter] = 0;
        counter++;
    }
    console.log(nums);
};
moveZeroes([0,1,0,3,12]);