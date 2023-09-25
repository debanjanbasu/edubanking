interface BankAccount {
  balance: number;
  deposit: (amount: number) => void;
  withdraw: (amount: number) => void;
}

const createBankAccount = (initialBalance: number): BankAccount => {
  let balance = initialBalance;

  const deposit = (amount: number): void => {
    balance += amount;
  };
  const withdraw = (amount: number): void => {
    if (amount > balance) {
      throw new Error("Insufficient funds");
    }
    balance -= amount;
  };

  return { balance, deposit, withdraw };
};

export default createBankAccount;

// const bankAccount = createBankAccount(400);

// console.log('Initial balance: ', bankAccount.balance);

// bankAccount.deposit(50);
// console.log('New balance after deposit: ', bankAccount.balance);

// bankAccount.withdraw(25);
// console.log('New balance after withdrawal: ', bankAccount.balance);
