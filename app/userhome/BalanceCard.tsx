import createBankAccount from "../banking/bankaccount";

export default function BalanceCard() {
  // Create an object for BankAccount with balance of $400
  const bankAccount = createBankAccount(400);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 400px)",
      }}
    >
      <div className="stats bg-accent text-primary-content">
        <div className="stat">
          <div className="stat-title text-neutral">Current balance</div>
          <div className="stat-value text-neutral">${bankAccount.balance}</div>
          <div className="stat-actions">
            <button
              className="btn btn-sm btn-primary mr-2"
              onClick={() => bankAccount.withdraw(50)}
            >
              Withdrawal
            </button>
            <button
              className="btn btn-sm btn-success"
              onClick={() => bankAccount.deposit(50)}
            >
              Deposit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
