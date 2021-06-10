var Employee = /** @class */ (function () {
    function Employee(id, EmpName, mobile, email, addr) {
        this.id = id;
        this.EmpName = EmpName;
        this.mobile = mobile;
        this.email = email;
        this.addr = addr;
    }
    Employee.prototype.displayInfo = function () {
        console.log("Id : " + this.id + " \n Name: " + this.EmpName + " \n  Mobile:" + this.mobile + " \n Email:" + this.email + " \n Address : " + this.addr);
    };
    return Employee;
}());
var empObj = new Employee(100, "Satya Yagnik", 9890768594, "satya@gmail.com", "Pune");
empObj.displayInfo();
