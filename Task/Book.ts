import { Author } from "./Author";
class Book {
  bid: number;
  bname: string;
  price: number;
  author: Author;

  constructor(bid: number, bname: string, price: number, author: Author){
      this.bid=bid;
      this.bname=bname;
      this.price=price;
      this.author=author;
  }

  displayDetails():void{
      console.log(`Book Id: ${this.bid} || Book Name:${this.bname} || Price : ${this.price} || Author Id: ${this.author.id} || Autor Name : ${this.author.name}`);
  }
}

var obj=new Book(1,"Mahanayak",500,new Author(11,"Vishwas Patil"));
obj.displayDetails();