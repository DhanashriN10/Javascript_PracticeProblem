
//Repetition Practice Problems with for loop

/*6. Write a program to compute Factors of a number N using prime factorization method.

Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
O/P -> Print the prime factors of number N.*/


var num=8;
var count=0;
for(i=2;i<=num/2;i++)
{
	if(num%i==0)
	{
	     console.log(i);
	     count++;
	}
}

console.log("Number of Factors:"+count);