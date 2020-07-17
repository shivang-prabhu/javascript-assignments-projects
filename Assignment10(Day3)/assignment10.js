str=prompt("Enter the name and version of OS separated by a space");
let n=str.length;
let i,j;
for(i=0;i<n;i++)
{
    if(str[i]==" ")
    {
        j=i;
    } 
}
str1= str.substring(0,j);
str2= str.substring(j,n);
console.log("The name of OS is :"+str1+"& version is `"+str2);
