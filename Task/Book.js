"use strict";
exports.__esModule = true;
var Author_1 = require("./Author");
var Book = /** @class */ (function () {
    function Book(bid, bname, price, author) {
        this.bid = bid;
        this.bname = bname;
        this.price = price;
        this.author = author;
    }
    Book.prototype.displayDetails = function () {
        console.log("Book Id: " + this.bid + " || Book Name:" + this.bname + " || Price : " + this.price + " || Author Id: " + this.author.id + " || Autor Name : " + this.author.name);
    };
    return Book;
}());
var obj = new Book(1, "Mahanayak", 500, new Author_1.Author(11, "Vishwas Patil"));
obj.displayDetails();
