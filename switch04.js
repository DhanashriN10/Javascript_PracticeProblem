
/*4. Write a program that takes User Inputs and does Unit Conversion of

different Length units
1. Feet to Inch 3. Inch to Feet
2. Feet to Meter 4. Meter to Feet*/



ch=2;
console.log("1. Feet to Inch\n 2. Inch to Feet \n3. Feet to Meter\n 4. Meter to Feet");
switch(ch)
{
	case 1:feet=4;
	       inch=feet * 12 ;
           console.log("\n feet in inch " +inch);
           break;
    case 2:inch=9;
    	   feet=inch / 12;
           console.log("\n Inch to feet "+feet);
           break;
    case 3: feet=8;
    		meter=feet / 39.37;
            console.log("\nFeet to meter "+meter);
            break;
    case 4:meter=10;
           feet=meter * 3.281;
           console.log(" \nmeter to feet " +feet); 
           break;
    default:console.log("Invalid choice");

 }
