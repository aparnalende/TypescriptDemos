import { PersonDemo } from "./Person";
// import { PersonDemo as Person} from "./Person"

class Student extends PersonDemo { 
    qualification:string;

    constructor(fullName:string,gender:string,email:string, qual:string)
    {   //invoke base class constructor
            super(fullName,gender,email);
            this.qualification=qual;

    }
ListDetails():void { 
  super.ListDetails();
  // console.log("Name -  :   "+this.fullName);
  // console.log("Gender -  :   "+this.gender);
  // console.log("Email -  :   "+this.email);
  console.log("qualification -  :   "+this.qualification);
  } 
}

var stuObj = new Student("Sasha","female","sara@hi.com","Mtech"); 
stuObj.ListDetails();

