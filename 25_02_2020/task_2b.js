//find sum of all odd elements in the array

var arr=[1,2,3,4,5,6,7,8,9,10];
console.log("***********using reduce*********")
function addition(total,num){
   if(num%2!=0){ 
    return total+num;
   }
   else{
       return total;
   }
}
var out=arr.reduce(addition);
console.log(out);

console.log("************using loop**********");
var sum=0;
for(var i=0;i<arr.length;i++){
  if(arr[i]%2!=0) { 
   sum+=arr[i];
  }
}
console.log(sum);