let sale=prompt("enter the amount of your sales");

      if(sale>=0 &&sale<=5000)
      {   let n1=sale*0.02;
          console.log("Commission is:" +n1 );
        
      }

      else if(sale>=5001 &&sale<=10000)
      {   let n2=sale*0.05;
          console.log("Commission is:" +n2);
        
      }
      else if(sale>=10001 &&sale<=20000)
      {   let n3=sale*0.07;
          console.log("Commission is:" +n3 );
        
      }
      else if(sale>20000)
      {   let n4=sale*0.1;
          console.log("Commission is:" +n4 );
        
      }