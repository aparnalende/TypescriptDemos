function greet(msg:string){
    console.log("Hello : "+msg)
}

greet("aparna");

//normal
function greet1(msg){
    console.log("Hello : "+msg)
}

greet1("aparna");


//rest arguments
function greetAll(...name:string[]){
    // for(var i of name){
    //     console.log(i)
    // }
    return "hello"+""+name.join(",")
}

console.log(greetAll("Aparna","Rupali","Neha","Shubha"))


//anonymous
