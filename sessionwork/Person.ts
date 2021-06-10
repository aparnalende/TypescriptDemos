export class PersonDemo{
    firstName:string;
    gender:string;
    email:string;

    constructor(firstName:string,gender:string,email:string){
        this.firstName=firstName;
        this.gender=gender;
        this.email=email;
    }

    ListDetails():void{
        console.log(`Name : ${this.firstName} \n Gender :${this.gender} \n Email :${this.email}` )
    }
}

var perObj=new PersonDemo("Radhey","Male","radhey@gmail.com")
perObj.ListDetails();