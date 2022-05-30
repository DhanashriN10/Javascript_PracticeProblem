//Repetition Practice Problems with for loop

//3. Write a program that takes a input and determines if the number is a prime.




var num=5;
for (i=2;i<=num/2;i++)
{
	if (num%i==0)
	    console.log("Number is not prime "+num);
}

console.log("Number is Prime:"+num);