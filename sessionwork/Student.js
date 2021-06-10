"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Person_1 = require("./Person");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(qualification, firstName, gender, email) {
        var _this = _super.call(this, firstName, gender, email) || this;
        _this.qualification = qualification;
        return _this;
    }
    Student.prototype.ListAllDetails = function () {
        console.log("Name : " + this.firstName + " '\n' Gender : " + this.gender + " '\n' Email : " + this.email + " '\n' Qualification : " + this.qualification);
    };
    return Student;
}(Person_1.PersonDemo));
var sobj = new Student("MTACH", "Shubha", "Female", "shubha@gmail.com");
sobj.ListAllDetails();
