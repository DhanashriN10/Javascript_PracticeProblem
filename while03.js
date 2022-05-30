//Repetition Practice Problems with while loop

//3. Extend the Flip Coin problem till either Heads or Tails wins 11 times.
head=1
tail=0

while(head != 11 && tail != 11)
{
      RANDOM=Math.floor(Math.random() * 10)%2;
      if( RANDOM == 0 )
           head++;
      else
           tail++;
      
}

console.log("Head count:" +head+ "Tail count:"+tail);
