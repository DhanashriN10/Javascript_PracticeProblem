//Selection Practice Problems with if & else

//2. Write a program that takes day and month from the command line and prints true if day of month is between March 20 and June 20, false otherwise.
/*const prompts=require("prompt-sync")();
const date=prompts("Enter a date:");
const month=prompts("Enter a month");*/

date=19;
month=7;


if (month<=6 && date<=20)
{
	console.log(month+date+"True");
}
if ((month>=3 && month<6) && (date<31))
{
	console.log(date+month+"True");
}
else
{
	console.log("False");
}