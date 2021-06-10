interface IProduct{
    ProductId:number;
    Name:string;
    printDetails():void;
}

class Product implements IProduct{
    public ProductId:number=1;
    public Name:string="TV";

    public printDetails():void{
        console.log(`ProductId : ${this.ProductId} having Name: ${this.Name}`)
    }
}

var pobj=new Product();
pobj.printDetails();