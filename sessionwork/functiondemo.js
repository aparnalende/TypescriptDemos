function greet(msg) {
    console.log("Hello : " + msg);
}
greet("aparna");
//normal
function greet1(msg) {
    console.log("Hello : " + msg);
}
greet1("aparna");
//rest arguments
function greetAll() {
    var name = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        name[_i] = arguments[_i];
    }
    // for(var i of name){
    //     console.log(i)
    // }
    return "hello" + "" + name.join(",");
}
console.log(greetAll("Aparna", "Rupali", "Neha", "Shubha"));
