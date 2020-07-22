let pa=document.getElementsByClassName("p");
let n=prompt("enter the number");
let a=[1,2,3,4,5,6,7,8,9,10]
function table()
{
    a.forEach(e=>{document.write("<br>"+ n+"x"+e+"="+n*e );
});
}
table();