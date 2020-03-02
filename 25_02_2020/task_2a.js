//find sum of all elements in array
var arr=[1,2,3,4,5,6,7,8,9,10];
console.log("***********using reduce*********")
function addition(total,num){
    return total+num;
}
var out=arr.reduce(addition);
console.log(out);

console.log("************using loop**********");
var sum=0;
for(var i=0;i<arr.length;i++){
   sum+=arr[i];
}
console.log(sum);