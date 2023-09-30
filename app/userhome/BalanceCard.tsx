'use client'
import { useState } from "react";
import Modal from "react-modal";
import createBankAccount from "../banking/bankaccount";

const accountOptions = [
  { label: "Savings", value: 1 },
  { label: "Everyday", value: 2 },
];

export default function BalanceCard() {
  const [bankAccount, setBankAccount] = useState(createBankAccount(400));
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [depositAmount, setDepositAmount] = useState(0);
  const [selectedAccount, setSelectedAccount] = useState(accountOptions[0].value);

  // Modal state
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);

  const openWithdrawModal = () => setIsWithdrawModalOpen(true);
  const closeWithdrawModal = () => setIsWithdrawModalOpen(false);

  const openDepositModal = () => setIsDepositModalOpen(true);
  const closeDepositModal = () => setIsDepositModalOpen(false);

  // Withdrawal Function
  const handleWithdrawal = () => {
    if (withdrawAmount > 0) {
      setBankAccount(bankAccount.withdraw(withdrawAmount));
      setWithdrawAmount(0); // Reset the withdrawal amount input
      closeWithdrawModal();
    }
  };

  // Deposit Function 
  const handleDeposit = () => {
    if (depositAmount > 0) {
      setBankAccount(bankAccount.deposit(depositAmount));
      setDepositAmount(0);
      closeDepositModal();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 300px)",
      }}
    >
      <div className="stats bg-accent text-primary-content">
        <div className="stat">
          <div className="stat-title text-neutral">Current balance</div>
          <div className="stat-value text-neutral">${bankAccount.balance}</div>
          <div className="stat-actions">
            <button
              className="btn btn-sm btn-primary mr-2"
              onClick={openWithdrawModal}
            >
              Withdraw
            </button>
            <button
              className="btn btn-sm btn-success"
              onClick={openDepositModal}
            >
              Deposit
            </button>
          </div>
        </div>
      </div>

      {/* Withdraw Modal */}
      <Modal
        isOpen={isWithdrawModalOpen}
        onRequestClose={closeWithdrawModal}
        contentLabel="Withdraw Modal"
        className={"w-5/6 h-1/2 flex flex-col bg-red-200 rounded-lg p-4 shadow-lg items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"}
      >
        <h2 className="stat-title text-neutral">Withdraw</h2>
        <select
          value={selectedAccount}
          onChange={(e) => setSelectedAccount(parseInt(e.target.value))}
        >
          {accountOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Enter amount"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(parseInt(e.target.value))}
        />
        <div style={{ marginTop: "10px" }}>
          <button className="btn btn-sm btn-success mr-2" onClick={handleWithdrawal}>Withdraw</button>
          <button className="btn btn-sm btn-primary mr-2" onClick={closeWithdrawModal} style={{ marginLeft: "20px" }}>Cancel</button>
        </div>
      </Modal>

      {/* Deposit Modal */}
      <Modal
        isOpen={isDepositModalOpen}
        onRequestClose={closeDepositModal}
        contentLabel="Deposit Modal"
        className={"w-5/6 h-1/2 flex flex-col bg-teal-50 rounded-lg p-4 shadow-lg items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"}
      >
        <h2 className="stat-title text-neutral">Deposit</h2>
        <select
          value={selectedAccount}
          onChange={(e) => setSelectedAccount(parseInt(e.target.value))}
        >
          {accountOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Enter amount"
          value={depositAmount}
          onChange={(e) => setDepositAmount(parseInt(e.target.value))}
        />
        <div style={{ marginTop: "10px" }}>
          <button className="btn btn-sm btn-success mr-2" onClick={handleDeposit}>Deposit</button>
          <button className="btn btn-sm btn-primary mr-2" onClick={closeDepositModal} style={{ marginLeft: "20px" }}>Cancel</button>
        </div>
      </Modal>
    </div>
  );
}
