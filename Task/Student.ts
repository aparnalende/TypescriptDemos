class Student {
  sid: number;
  sname: string;
  marks: number[];

  constructor(sid: number, sname: string, marks: number[]) {
    this.sid = sid;
    this.sname = sname;
    this.marks = marks;
  }

  // findPercentage():number{
  //     // var percentage:number=0;
  //     var total:number=this.marks.reduce((a,b)=>a+b,0);
  //     return this.percentage=total/this.marks.length;
  // }

  // findGrade():string{
  //     var per:number=this.findPercentage();
  //     if(per>=70){
  //         return "A";
  //     }
  //     else
  //     if(per<70 && per>=60){
  //         return "B";
  //     }
  //     else
  //     if(per<60 && per>=40){
  //         return "C";
  //     }
  //     else
  //     return "D";
  // }

  result(): void {
    var per: number = 0;
    var total: number = this.marks.reduce((a, b) => a + b, 0);
    per = total / this.marks.length;
    var grade: string;

    if (per >= 70) {
      grade = "A";
    } else if (per < 70 && per >= 60) {
      grade = "B";
    } else if (per < 60 && per >= 40) {
      grade = "C";
    } else grade = "D";

    console.log("The Final Result of the student :");
    console.log(
      "\n**********************************************************************\n"
    );
    console.log(
      `Student Id : ${this.sid}  || Student Name : ${this.sname}  || Total Marks : ${total}  || Percentage : ${per} || Grade : ${grade}`
    );
  }
}

var StudObj = new Student(1, "Seeta", [80, 90, 70, 60, 80, 90]);
StudObj.result();
