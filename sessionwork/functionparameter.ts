function add(num1: number, num2: number): number {
  return num1 + num2;
}

// console.log(add(10,20));

function calculateBill(qty: number, rate: number, discount?: number) {
   var price:number;
    if (discount == undefined) {
        price=qty*rate;
        return price;
  }
  else{
      price=(qty*rate)-((qty*rate)/discount);
      return price;
  }
}

console.log(calculateBill(12, 3000));
console.log(calculateBill(12, 3000, 20));
