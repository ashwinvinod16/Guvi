//Return median of two sorted arrays of same size
var arr=[1,2,3,4,5,6,7,8,9];
var arr1=[10,20,30,40,50,60,70,80,90];
console.log("*************Anonymous function***********")
var median=function(arr,arr1){
  if(arr.length%2==0){
      console.log("medain of first array:",arr[(arr.length/2)-1],arr[arr.length/2]);
      console.log("medain of second array:",arr1[(arr1.length/2)-1],arr1[arr1.length/2]);

  }
  else{
    console.log("medain of first array:",arr[Math.floor(arr.length/2)]);
    console.log("medain of second array:",arr1[Math.floor(arr1.length/2)]);
  }
} 
median(arr,arr1); 
console.log("******************using IIFE Function*************");
(function(){
    if(arr.length%2==0){
        console.log("medain of first array:",arr[(arr.length/2)-1],arr[arr.length/2]);
        console.log("medain of second array:",arr1[(arr1.length/2)-1],arr1[arr1.length/2]);
  
    }
    else{
      console.log("medain of first array:",arr[Math.floor(arr.length/2)]);
      console.log("medain of second array:",arr1[Math.floor(arr.length/2)]);
    }
})(); 