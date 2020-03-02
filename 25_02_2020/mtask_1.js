//print the odd number using anonymous and IIFE function
var num=[1,2,3,4,5,6,7,8,9];
console.log("*************Anonymous function***********")
var odd=function(arr){
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
     console.log(arr[i])
    } 
  }
} 
odd(num); 
console.log("******************using IIFE Function*************");
(function(){
    for(var i=0;i<num.length;i++){
      if(num[i]%2!=0){
       console.log(num[i])
      } 
    }
})() ;