import { PersonDemo } from "./Person";

class Student extends PersonDemo {
  qualification: string;

  constructor(
    qualification: string,
    firstName: string,
    gender: string,
    email: string
  ) {
    super(firstName, gender, email);
    this.qualification = qualification;
  }

  ListAllDetails(): void {
    console.log(
      `Name : ${this.firstName} '\n' Gender : ${this.gender} '\n' Email : ${this.email} '\n' Qualification : ${this.qualification}`
    );
  }
}

var sobj = new Student("MTACH", "Shubha", "Female", "shubha@gmail.com");
sobj.ListAllDetails();
