function prime()
{
    for ( i=2 ; i<=rev/2 ; i++ )
    {
         if(rev%i == 0 )
              console.log("Number is Not prime" +rev);
              
          
    }

   console.log("Number is Prime" +num);
}
function palindrome()
{
        //num=1
        rev=0
        //#original_num=$1
         temp=1
        while(num != 0 )
        {
            rem=( num%10 )
            rev=( rev*10 + rem )
            num=( num /10)
        }

        if(temp == rev )
        {
        
             console.log(temp+" Number is palindrome");
              //count++;
        }
        else
             console.log(temp+" Number is not palindrome");
        
}
num=19;
palindrome(num)
prime (rev)
 