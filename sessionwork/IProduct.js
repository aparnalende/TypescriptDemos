var Product = /** @class */ (function () {
    function Product() {
        this.ProductId = 1;
        this.Name = "TV";
    }
    Product.prototype.printDetails = function () {
        console.log("ProductId : " + this.ProductId + " having Name: " + this.Name);
    };
    return Product;
}());
var pobj = new Product();
pobj.printDetails();
