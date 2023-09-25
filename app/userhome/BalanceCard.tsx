"use client";
import { useState } from "react";
import createBankAccount from "../banking/bankaccount";

export default function BalanceCard() {
  // Create an object for BankAccount with balance of $400
  const [bankAccount, setBankAccount] = useState(createBankAccount(400));

  // Withdraw $50 from the account
  const withdrawFromAccount = () => {
    return setBankAccount(bankAccount.withdraw(50));
  };

  // Deposit $100 to the account
  const depositToAccount = () => {
    return setBankAccount(bankAccount.deposit(100));
  };

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
              onClick={() => withdrawFromAccount()}
            >
              Withdrawal
            </button>
            <button
              className="btn btn-sm btn-success"
              onClick={() => depositToAccount()}
            >
              Deposit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
