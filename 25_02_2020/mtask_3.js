//Sum of all numbers in an array
var num=[1,2,3,4,5,6,6,7,8]
console.log("*************using anonymous function********");
var add=function(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
       sum+=arr[i];
    }
  console.log(sum);
} 
add(num); 
  console.log("******************using IIFE Function*************");
(function(){
    var sum=0;
      for(var i=0;i<num.length;i++){
        sum+=num[i]; 
      }
     console.log(sum) ;
})() ;