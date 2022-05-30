
//Selection Practice Problems with if & else


//4.Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.

random_num=Math.floor(Math.random() * 10)%2;
if (random_num==1) 
{
	console.log("Head="+random_num);
}
else
{
	console.log("Tail="+random_num);
}