class Employee{
    firstName:string;
    hra:number=0.2;
    da:number=0.5;
    pf:number=0.11;

    grossSalary(salary:number):void{
        var grossSalary:number;
        this.hra=this.hra*salary;
        
    }
}