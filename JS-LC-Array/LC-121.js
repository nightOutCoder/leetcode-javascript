console.log('Best Time to Buy and Sell Stock');

var maxProfit = function(prices) {
let i = 0 ; 
let j = 1;
let maxProfit = 0;

while(j < prices.length) {
    if(prices[i] < prices[j]) { 
    let profit = prices[j]-prices[i];
    maxProfit = Math.max(maxProfit, profit);
    } else {
        i = j;
    }
    j++;
}

return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));
