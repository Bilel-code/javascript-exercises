const repeatString = function(string1,num) {
    let string ='';
    if (num <0){
        return 'ERROR'
    }else{
for(let i=0;i<num;i++){
    string += string1;
    
}
   return string;
}
};

// Do not edit below this line
module.exports = repeatString;
