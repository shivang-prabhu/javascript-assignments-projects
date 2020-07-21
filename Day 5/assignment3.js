

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>response.json())
.then(data=>console.log(data))

let obj = {
    userId:254,
    title:"Hello world",
    body:'Good morning',
}


fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    body: JSON.stringify(obj)
}).then(response=>response.json())
.then(data=>console.log(data))

async function fetch1(){
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();

    console.log(data);
}

fetch1();


let obj1 = {
    name:'Shivang',
    age:21,
    canDrive:true,
}

console.log(obj1);
let str = JSON.stringify(obj1);
console.log(str)

let strobj = JSON.parse(str);
console.log(strobj);

