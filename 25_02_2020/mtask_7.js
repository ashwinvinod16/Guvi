//Remove duplicates from an array


var num=[1,1,3,4,5,6,6,7,8,11,11,13,17,17,20]
console.log("*************using anonymous function********");
var duplicate=function(arr){
    for(var i=0;i<arr.length;i++){
      var j=i+1
       for(j;j<arr.length;j++){
         if(arr[i]==arr[j]){
           arr.splice(j,1);
         } 
      }
    }
    console.log(arr);
} 
duplicate(num); 


console.log("******************using IIFE Function*************");
(function(){
    for(var i=0;i<num.length;i++){
      var j=i+1
       for(j;j<num.length;j++){
         if(num[i]==num[j]){
           num.splice(j,1);
         } 
      }
    }
    console.log(num);
})();