//Convert all the strings to title caps in a string array
var stringarr=["ashwin","ashiq","bilal","tiger"]
console.log("*************using anonymous function********")
var change=function(arr){
    for(var i=0;i<arr.length;i++){
        console.log(arr[i].charAt(0).toUpperCase()+arr[i].substr(1));
      
    }
} 
change(stringarr); 
console.log("************using IIFE ***********");
(function(){
    for(var i=0;i<stringarr.length;i++){
        console.log(stringarr[i].charAt(0).toUpperCase()+stringarr[i].substr(1));
      
    }
})();