let num= prompt("Enter your marks(using ifelse)"); //using if else statements


if (num>=75)
{
    console.log("Marks are:"+num+" and Grade :O");


}
else if(num>=60 && num<75) {
    console.log("Marks are:"+num+" and Grade :A");

}
else if(num>=50 && num<60){
    console.log("Marks are:"+num+" and Grade :B");

}
else if(num>=40 && num<50){
    console.log("Marks are:"+num+" and Grade is :C");

}
else if(num<40 ){
    console.log("Marks are:"+num+" and Grade is :D(fail)");

}

//using switch case
let num1= prompt("Enter your marks(using switch case)");
switch(true)
{
        case num1>=17:
          console.log("Marks are:"+num+" and Grade :O");
          break;
          
        case num1>=60 && num1<75:
          console.log("Marks are:"+num+" and Grade :A");

          break;
        case num1>=50 && num1<60:
          console.log("Marks are:"+num+" and Grade :B");

          break;
        case num1 >=40 && num1<50:
          console.log("Marks are:"+num+" and Grade :C");
          break;
        case num1<40:
          console.log("Marks are:"+num+" and Grade :D(fail)");

         
      }




