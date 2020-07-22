let name=prompt("enter your name");

document.write("Welcome "+ name);

let today= new Date();
let h,m,y;

h=today.getHours();
m=today.getMinutes();
s=today.getSeconds();

document.write("<br> Time:" +h+""+":"+m+":"+s);
const c=getElementById('d');
c.onClick=function bl(){
  
document.body.style.background="black"
document.body.style.color="white"

}


