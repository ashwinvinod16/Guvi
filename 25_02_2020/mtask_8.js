//Rotate an array by k times and return the rotated array

var num=[1,2,3,4,5,6,7,8,9];
k=3;
console.log("*************Anonymous function***********")
var rotate=function(arr,x){
  c=x%arr.length;
  for(var i=0;i<c;i++){
     var temp=arr[0];
     for(var j=0;j<arr.length-1;j++){
         arr[j]=arr[j+1];
     }
       arr[arr.length-1]=temp;
    } 
    console.log(arr);
} 
rotate(num,k); 


console.log("******************using IIFE Function*************");
var num=[1,2,3,4,5,6,7,8,9];
k=3;
(function(){
    c=k%num.length;
    for(var i=0;i<c;i++){
       var temp=num[0];
       for(var j=0;j<num.length-1;j++){
           num[j]=num[j+1];
       }
         num[num.length-1]=temp;
      } 
      console.log(num);
  })();