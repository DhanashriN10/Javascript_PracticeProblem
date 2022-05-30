
//Repetition Practice Problems with for loop

//4. Extend the program to take a range of number as input and output the Prime

Numbers in that range.

//var num=5;
for(n=1;n<=10;n++)
{
for (i=2;i<=n/2;i++)
{
	if (n%i==0)
	    console.log("Number is not prime "+n);
}
}
console.log("Number is Prime:"+n);