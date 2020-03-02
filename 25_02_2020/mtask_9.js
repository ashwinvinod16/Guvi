//Print odd numbers in an array
var num=[1,2,3,4,5,6,7,8,9];
var odd=(num)=>{
  for(var i=0;i<num.length;i++){
    if(num[i]%2!=0){
     console.log(num[i])
    } 
  }
} 
odd(num);