arr=["'yellow'","'blue'","'green'","'orange'","'red'"];
       
       function chnagcolourarray()
       {  arr.forEach(e=>{setTimeout(document.body.style.backgroundColor=e,1000)})
    }
          
          
       
       chnagcolourarray();