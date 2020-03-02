//Return all the palindromes in an array

var num=[1,2,3,4,5,6,6,7,8,11,13,17,20,22,212,131]
console.log("*************using anonymous function********");
var palin=function(arr){
    for(var i=0;i<arr.length;i++){
         var rev=0;
         dup=arr[i];
         while (dup!=0){
             rev=(rev*10)+(dup%10);
             dup=Math.floor(dup/10);
         }
         if( rev==arr[i]){
             console.log(arr[i]);
         }
      
    }
} 
palin(num); 


console.log("******************using IIFE Function*************");
(function(){
    for(var i=0;i<num.length;i++){
         var rev=0;
         dup=num[i];
         while (dup!=0){
             rev=(rev*10)+(dup%10);
             dup=Math.floor(dup/10);
         }
         if( rev==num[i]){
             console.log(num[i]);
         }
      
    }
})(); 