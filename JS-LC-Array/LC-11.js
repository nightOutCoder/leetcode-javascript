/**
 * Brute force approach
 ***/

/** 
var maxArea = function(height) {
    let maxArea = 0;
    for(let i = 0; i < height.length; i++){
        for(let j = i + 1; j < height.length; j++){
            area = (j-i) * Math.min(height[i], height[j]);
            console.log('i :',i,' J :',j,' area : ',area,' maxArea :',maxArea);
            maxArea = Math.max(maxArea,area);
            console.log('maxArea ', maxArea);
          
        }
        console.log('--loop change--')
    }
    return maxArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,1]));
*/




/**
 * O(n)
 ***/

var maxArea = function(height) {
    let i  = 0;
    let j = height.length -1;
    let maxArea = 0;

    while(i < j){
        let area = (j-i) * Math.min(height[i], height[j]);
        maxArea = Math.max(area, maxArea);

        if(height[i] < height[j]){
            i++;
        } else {
            j--;
        }
    }
    return maxArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,1]));