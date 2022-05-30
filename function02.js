 num=123;

function checkPalindrome()
{
       // num=1
        rev=0
         temp=num;
        while(num > 0 )
        {
            rem=num%10;
            rev=rev*10 + rem; 
            num=num /10;
        }
      

        if( temp == rev )
       
             console.log("Number is palindrome");
            
        else
             console.log("Number is not palindrome");
       
}
checkPalindrome (num)
