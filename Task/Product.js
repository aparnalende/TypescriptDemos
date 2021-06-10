var Product = /** @class */ (function () {
    function Product(pid, pname, category, quantity, price, discount) {
        this.pid = pid;
        this.pname = pname;
        this.category = category;
        this.quantity = quantity;
        this.price = price;
        this.discount = discount;
    }
    Product.prototype.calculateBill = function () {
        var total = 0;
        total = this.price * this.quantity;
        total = total - (total / this.discount);
        console.log("Bill of the given product :\n");
        console.log("Product Id " + this.pid + "  :  Product Name " + this.pname + "  :  Category " + this.category + "  :  Price " + this.price + "  :  Discount " + this.discount + "  :Total Price : " + total);
    };
    return Product;
}());
var pObj = new Product(1, "Pen", "Stationary", 30, 100, 20);
pObj.calculateBill();
