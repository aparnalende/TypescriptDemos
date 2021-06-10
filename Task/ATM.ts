class BankAccount {
    accountNo:number=6789;
    _balance: number=10000;

    deposit(amount: number): number {
        return this._balance + amount;
    }
    withdraw(amount: number): number {
        if (amount < this._balance ){
            return this._balance - amount;
        }
        else {
            throw new Error("The withdraw amount must be less or equal than the balance.")
        }
    }
 }

 
class CurrentAccount extends BankAccount {
    // deposit(amount: number): number {
    //     return this._balance + amount;
    // }
    // withdraw(amount: number): number {
    //     if (amount < this._balance ){
    //         return this._balance - amount;
    //     }
    //     else {
    //         throw new Error("The withdraw amount must be less or equal than the balance.")
    //     }
    // }
    super:BankAccount;
}
class SavingsAccount extends BankAccount {
    // deposit(amount: number): number {
    //     return this._balance + amount;
    // }
    // withdraw(amount: number): number {
    //     if (amount < this._balance ){
    //         return this._balance - amount;
    //     }
    //     else {
    //         throw new Error("The withdraw amount must be less or equal than the balance.")
    //     }
    // }
    super:BankAccount;
}

let current = new CurrentAccount();
console.log(` Account No : ${current.accountNo} || Initial Balance is ${current._balance} || after depositing Balance : "${current.deposit(100)}`)

let savings = new SavingsAccount();
console.log(` Account No : ${savings.accountNo} || Initial Balance is ${savings._balance} || after depositing Balance : "${current.withdraw(100)}`)