
let num12:number=4;
let fName:String = 'Sandra'; 
let lName:string = 'Frank'; 
console.log("You name is ----"+ fName +" "+ lName) 
var score1:number = 50;
var score2 = 42.50;
var sum = score1 + score2;
console.log("Sum="+ sum);

const cname:string="Contoso Private Ltd";
let flag:boolean=true;
console.log(" I work in " + cname);
if (flag) {
    console.log("staisfied");
}

//define function
function HiMessage(nm:string,lnm:string)
{
    console.log('Welcome---' + nm + " " + lnm);
}

//invoke function
HiMessage("Sandra","Parker");

let sports:string[]=['Hockey','cricket','badminton'];
function display(sp:string[]) {
     for(var i = 0;i<sp.length;i++) { 
   console.log( sports[i]) 
 }
  
}
display(sports);

var nums:number[] = [1001,1002,1003,1004] 
var j:any;
  for(j in nums) { 
    console.log(nums[j]) 
 } 

 let pets = ["Cat", "Dog", "Parrots"];
 for (let pet of pets) {
    console.log(pet); // "Cat", "Dog", "Hamster"
}
