var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this.accountNo = 6789;
        this._balance = 10000;
    }
    BankAccount.prototype.deposit = function (amount) {
        return this._balance + amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount < this._balance) {
            return this._balance - amount;
        }
        else {
            throw new Error("The withdraw amount must be less or equal than the balance.");
        }
    };
    return BankAccount;
}());
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CurrentAccount;
}(BankAccount));
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SavingsAccount;
}(BankAccount));
var current = new CurrentAccount();
console.log(" Account No : " + current.accountNo + " || Initial Balance is " + current._balance + " || after depositing Balance : \"" + current.deposit(100));
var savings = new SavingsAccount();
console.log(" Account No : " + savings.accountNo + " || Initial Balance is " + savings._balance + " || after depositing Balance : \"" + current.withdraw(100));
