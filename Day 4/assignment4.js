choice=prompt("Enter 1.Addition 2.Subtraction 3.Multiplication 4.Divison 5.Square root 6.percentage");
if (choice==6)
{
     sale3= prompt("Enter the total");
     sale4=prompt("Enter the number out of total")
}
else if(choice==5)
{
    sale3= prompt("Enter number to find square root");
    
}


else{
 sale1 =prompt("Enter first number");
 sale2= prompt("Enter second number");
}


 switch (true) {
        
        case choice==1:
            let n1=sale1+sale2;
           console.log("The sum is: "+n1);
          break;
        case choice==2:
            let n2=sale1-sale2;
          console.log("The difference is: "+n2);
          break;
        case choice==3:
            let n3=sale1*sale2;
          console.log("The product is: "+n3);
          break;
        case choice==4:
            let n4=sale1/sale2;
        console.log("The quotient is: "+n4);
          break;
        case choice==5:
            let n5=Math.sqrt(sale3);
         console.log("The square root is: "+n5);
          break;
        case choice==6:
            let n6=sale4*100/sale3;
          console.log("The percentaage is is: "+n6);
        
      }