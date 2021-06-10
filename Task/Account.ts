type AccountType = 'current' | 'savings';

type TransactionType = 'deposit' | 'withdrawal';

interface Transaction {
  type: TransactionType;
  amount: number;
  balance: number;
}

class Atm {
  private type: AccountType;
  private money: number;
  private transactionHistory: Transaction[];

  constructor(type: AccountType) {
    this.type = type;
    this.money = 0;

    this.transactionHistory = [];
  }

  private logTransaction(type: TransactionType, amount: number) {
    this.transactionHistory.push({
      type,
      amount,
      balance: this.money,
    })
  }

  public deposit(amount: number) {
    this.money += amount;
    this.logTransaction('deposit', amount);
  }

  public withdrawal(amount: number) {
    this.money -= amount;
    this.logTransaction('withdrawal', amount);
  }

  public checkBalance() {
    console.log(this.money);
  }
}
