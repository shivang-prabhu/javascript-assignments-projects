let i=prompt("enter a number to check whether it is prime or not");
  
  
    let j;
   let flag=true;
    for( j=2;j<i;j++)
    { 
      if(i%j==0)
     {console.log("the number is not prime");
     flag=false;
    break;}
    
    }
    
   
  
    if(flag==true)
    {
        console.log("the number is prime")
    }  