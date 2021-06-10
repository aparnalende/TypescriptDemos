 export class MessageGreeting { 
   mygreet():void { 
      console.log("Hello World!!!") 
   } 

     Display():string { 
     return "Ola friends.....!!!!!";
     }
     Calculate(x:number,y:number):string { 
     return "Sum of " + x +" &" + " " + y + "is---"+ (x+y);
   }
} 

var obj = new MessageGreeting(); 
obj.mygreet();
console.log(obj.Display());
console.log(obj.Calculate(2,4));