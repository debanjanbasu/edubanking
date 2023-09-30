interface BankAccount {
  balance: number;
  deposit: (amount: number) => BankAccount;
  withdraw: (amount: number) => BankAccount;
}

const createBankAccount = (initialBalance: number): BankAccount => {
  let balance = initialBalance;

  const deposit = (amount: number): BankAccount => {
    balance += amount;
    console.log("deposited: $", amount);
    console.log("balance: $", balance);
    return { balance, deposit, withdraw };
  };
  const withdraw = (amount: number): BankAccount => {
    if (amount > balance) {
      throw new Error("Insufficient funds");
    }
    balance -= amount;
    console.log("withdre: $", amount);
    console.log("balance: $", balance);
    return { balance, deposit, withdraw };
  };

  return { balance, deposit, withdraw };
};

export default createBankAccount;