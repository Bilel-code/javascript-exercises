const sumAll = function(a,b) {
    if(a<0 || b<0 || typeof a !== 'number' || typeof b !== 'number'){
        return 'ERROR';
    }
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    let sum = 0;
        for (let i=min;i <=max ;i++){
            sum=sum+i;
        }
        return sum;
};

// Do not edit below this line
module.exports = sumAll;
