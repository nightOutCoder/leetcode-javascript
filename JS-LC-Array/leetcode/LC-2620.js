var createCounter = function(n) {
        return function() {
            return n++;
        };
};


let data = createCounter(10);
console.log(data());
console.log(data());
console.log(data());
