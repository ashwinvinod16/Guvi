////Return all the prime numbers in an array
var num=[1,2,3,4,5,6,6,7,8,11,13,17,20]
var add=(arr)=>{
    for(var i=0;i<arr.length;i++){
        count=0;
       for(var j=2;j<=arr[i]/2;j++){
         if(arr[i]%j==0){
           count+=1;
         } 
      }
      if (count==0 && arr[i]!=1){
          console.log(arr[i]);
      }
    }
} 
add(num); 