//Selection Practice Problems with if & else

//1. Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value

let a=(Math.floor( Math.random()*999 ) + 100);
let b=(Math.floor( Math.random()*999 ) + 100);
console.log("a:"+a);
console.log("b:"+b);
if(a>b)
{
	console.log("a is maximum"+a);
}
else
{
	console.log("b is maximum:"+b);
}
