 export class PersonDemo { 
   //field 
   fullName:string;
   gender:string;
   email:string; 
 
   //constructor 
   constructor(nm:string,gender:string,email:string)
   { 
      this.fullName = nm; 
      this.gender=gender;
      this.email=email;
   }  

   //function 
   ListDetails():void { 
      console.log("Name -  :   "+this.fullName);
      console.log("Gender -  :   "+this.gender);
      console.log("Email -  :   "+this.email);
   } 
}

var perObj = new PersonDemo("Sasha","female","sara@hi.com"); 
perObj.ListDetails();

   

