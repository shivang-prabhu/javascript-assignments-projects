let arr= new Array();
let n=prompt("enter the number of positive integers you want to enter");
for(let i=0;i<n;i++)
{
    if(i==0)
    {
        arr[i]=prompt("enter the first number");
    
    }
    else{
        arr[i]=prompt("Enter next number");
    }
    
}


let arr2=arr.filter(el=>el%2==1).map(el=>{el**2});
console.log(arr2);


