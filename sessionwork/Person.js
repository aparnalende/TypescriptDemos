"use strict";
exports.__esModule = true;
exports.PersonDemo = void 0;
var PersonDemo = /** @class */ (function () {
    function PersonDemo(firstName, gender, email) {
        this.firstName = firstName;
        this.gender = gender;
        this.email = email;
    }
    PersonDemo.prototype.ListDetails = function () {
        console.log("Name : " + this.firstName + " \n Gender :" + this.gender + " \n Email :" + this.email);
    };
    return PersonDemo;
}());
exports.PersonDemo = PersonDemo;
var perObj = new PersonDemo("Radhey", "Male", "radhey@gmail.com");
perObj.ListDetails();
