/*
* Two Sum : Brute force solution
* Time complexity : O(n2)
* Spce complexity : O(1)
*/

function getTwoSumBruteForce(inputArray,target){
    for(let i = 0; i<inputArray.length; i++){
        for(let j = i+1; j < inputArray.length;j++){
          if((inputArray[i] + inputArray[j]) === target){
            return [i,j];
          }
        }
      }
  }
  console.log(getTwoSumBruteForce([2,4,9,6,5],10));
  

  /*
  * 
  * Two Sum : Better solution
  * Time complexity : O(n)
  * Spce complexity : O(n)
  */
  function twoSumBetter(inputArray,target){
    store= {}; 
    for(let i = 0; i < inputArray.length; i++){
      secondElement = target-inputArray[i];
  
      if(secondElement in store){
        return [store[secondElement],i];
      } else {
         store[inputArray[i]] = i;
      }
    }
  
  }
  console.log(twoSumBetter([2,4,9,6,5],10));