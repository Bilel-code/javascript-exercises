const removeFromArray = function(arr, ...values ) {
    
    values.forEach(function(value) {
        while (arr.indexOf(value) > -1) {
          arr.splice(arr.indexOf(value), 1);
        }
      });
      return arr;
     
};

// Do not edit below this line
module.exports = removeFromArray;
