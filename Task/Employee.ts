class Employee{
    id:number;
    EmpName:string;
    mobile:number;
    email:string;
    addr:string;

    constructor(id:number,EmpName:string,mobile:number,email:string,addr:string){
        this.id=id;
        this.EmpName=EmpName;
        this.mobile=mobile;
        this.email=email;
        this.addr=addr;
    }

    displayInfo():void{
        console.log(`Id : ${this.id} \n Name: ${this.EmpName} \n  Mobile:${this.mobile} \n Email:${this.email} \n Address : ${this.addr}`)
    }
}


const empObj=new Employee(100,"Satya Yagnik",9890768594,"satya@gmail.com","Pune");
empObj.displayInfo();