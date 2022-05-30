//Sequence Practice Problems

//Use Script & Debug – Write a program that reads 5 Random 2 Digit values , then find their sum and the average.


let a=(Math.floor(Math.random() *90 + 10));
let b=(Math.floor(Math.random() *90 + 10));
let c=(Math.floor(Math.random() *90 + 10));
let d=(Math.floor(Math.random() *90 + 10));
let e=(Math.floor(Math.random() *90 + 10));
sum=a+b+c+d+e;
console.log("Sum:"+sum);
avg=sum/5;
console.log("Average:"+avg);