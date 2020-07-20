let ask= (question,yes,no)=>{
    if confirm((question)) yes()
    else no();
}
ask(
    "Do you agree?",
    
    ask(){alert("You agreed");}
    ask(){alert("You cancelled the execution");}

);