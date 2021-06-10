class Product{
    pid:number;
    pname:string;
    category:string;
    quantity:number;
    price:number;
    discount:number;
    
    
    constructor(pid:number,pname:string,category:string,quantity:number,price:number,discount:number){
        
            this.pid=pid;
            this.pname=pname;
            this.category=category;
            this.quantity=quantity;
            this.price=price;
            this.discount=discount;
        
    }

    calculateBill():void{
        var total:number=0;
        total=this.price*this.quantity;
        total=total-(total/this.discount);
        console.log("Bill of the given product :\n")
        console.log(`Product Id ${this.pid}  :  Product Name ${this.pname}  :  Category ${this.category}  :  Price ${this.price}  :  Discount ${this.discount}  :Total Price : ${total}`)
    }
}

var pObj=new Product(1,"Pen","Stationary",30,100,20);
pObj.calculateBill();