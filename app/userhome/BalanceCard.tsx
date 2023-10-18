"use client"

import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import createBankAccount from "../banking/bankaccount";

interface AccountOption {
  label: string;
  value: number;
}

interface BalanceCardProps {
  lastBalance: number;
}

const accountOptions: AccountOption[] = [
  { label: "Savings", value: 1 },
  { label: "Everyday", value: 2 },
  { label: "Goals", value: 3 },
];

const BalanceCard: React.FC<BalanceCardProps> = ({ lastBalance }) => {
  const [bankAccount, setBankAccount] = useState(createBankAccount(lastBalance));
  const [withdrawAmount, setWithdrawAmount] = useState<number>(0);
  const [depositAmount, setDepositAmount] = useState<number>(0);
  const [transferAmount, setTransferAmount] = useState<number>(0);
  const [sourceAccount, setSourceAccount] = useState<number>(accountOptions[0].value);
  const [targetAccount, setTargetAccount] = useState<number>(accountOptions[0].value);

  useEffect(() => {
    // Update bank account when lastBalance prop changes
    setBankAccount(createBankAccount(lastBalance));
  }, [lastBalance]);

  // Modal state
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState<boolean>(false);
  const [isDepositModalOpen, setIsDepositModalOpen] = useState<boolean>(false);
  const [isTransferModalOpen, setIsTransferModalOpen] = useState<boolean>(false);

  const openWithdrawModal = () => setIsWithdrawModalOpen(true);
  const closeWithdrawModal = () => setIsWithdrawModalOpen(false);

  const openDepositModal = () => setIsDepositModalOpen(true);
  const closeDepositModal = () => setIsDepositModalOpen(false);

  const openTransferModal = () => setIsTransferModalOpen(true);
  const closeTransferModal = () => setIsTransferModalOpen(false);

  // Withdrawal Function
  const handleWithdrawal = () => {
    if (withdrawAmount > 0) {
      const updatedAccount = bankAccount.withdraw(withdrawAmount);
      setBankAccount(updatedAccount);
      setWithdrawAmount(0); // Reset the withdrawal amount input
      closeWithdrawModal();
      saveBalance(updatedAccount.balance);
    }
  };

  // Deposit Function
  const handleDeposit = () => {
    if (depositAmount > 0) {
      const updatedAccount = bankAccount.deposit(depositAmount);
      setBankAccount(updatedAccount);
      setDepositAmount(0);
      closeDepositModal();
      saveBalance(updatedAccount.balance);
    }
  };

  // Transfer Function
  const handleTransfer = () => {
    if (transferAmount > 0) {
      let updatedSourceAccount = bankAccount;
      let updatedTargetAccount = bankAccount;

      if (sourceAccount === 1) {
        updatedSourceAccount = bankAccount.withdraw(transferAmount);
      }
      if (targetAccount === 1) {
        updatedTargetAccount = bankAccount.deposit(transferAmount);
      }

      // Update both source and target accounts
      setBankAccount(updatedSourceAccount);
      setBankAccount(updatedTargetAccount);

      setTransferAmount(0);
      closeTransferModal();

      // Save the updated balance
      saveBalance(updatedSourceAccount.balance);
    }
  };

  // Function to save the balance to local storage
  const saveBalance = (balance: number) => {
    localStorage.setItem("bankAccountBalance", balance.toString());
  };

  // Retrieve the initial balance from local storage
  useEffect(() => {
    const savedBalance = localStorage.getItem("bankAccountBalance");
    if (savedBalance) {
      setBankAccount(createBankAccount(parseFloat(savedBalance)));
    }
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
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
              className="btn btn-sm btn-success mr-2"
              onClick={openDepositModal}
            >
              Deposit
            </button>
            <button
              className="btn btn-sm btn-primary mr-2"
              onClick={openTransferModal}
            >
              Transfer
            </button>
          </div>
        </div>
      </div>

      {/* Withdraw */}
      <Modal
        isOpen={isWithdrawModalOpen}
        onRequestClose={closeWithdrawModal}
        contentLabel="Withdraw Modal"
        className={
          "w-5/6 h-1/2 flex flex-col bg-red-200 rounded-lg p-4 shadow-lg items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        }
      >
        <h2 className="stat-title text-neutral">Withdraw</h2>
        <select
          value={targetAccount}
          onChange={(e) => setTargetAccount(parseInt(e.target.value))}
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
          <button
            className="btn btn-sm btn-success mr-2"
            onClick={handleWithdrawal}
          >
            Withdraw
          </button>
          <button
            className="btn btn-sm btn-primary mr-2"
            onClick={closeWithdrawModal}
            style={{ marginLeft: "20px" }}
          >
            Cancel
          </button>
        </div>
      </Modal>

      {/* Deposit */}
      <Modal
        isOpen={isDepositModalOpen}
        onRequestClose={closeDepositModal}
        contentLabel="Deposit Modal"
        className={
          "w-5/6 h-1/2 flex flex-col bg-teal-50 rounded-lg p-4 shadow-lg items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        }
      >
        <h2 className="stat-title text-neutral">Deposit</h2>
        <select
          value={targetAccount}
          onChange={(e) => setTargetAccount(parseInt(e.target.value))}
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
          <button
            className="btn btn-sm btn-success mr-2"
            onClick={handleDeposit}
          >
            Deposit
          </button>
          <button
            className="btn btn-sm btn-primary mr-2"
            onClick={closeDepositModal}
            style={{ marginLeft: "20px" }}
          >
            Cancel
          </button>
        </div>
      </Modal>

      {/* Transfer */}
      <Modal
        isOpen={isTransferModalOpen}
        onRequestClose={closeTransferModal}
        contentLabel="Transfer Modal"
        className={
          "w-5/6 h-1/2 flex flex-col bg-sky-100 rounded-lg p-4 shadow-lg items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        }
      >
        <h2 className="stat-title text-neutral">Transfer Funds</h2>
        <select
          value={sourceAccount}
          onChange={(e) => setSourceAccount(parseInt(e.target.value))}
        >
          {accountOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          value={targetAccount}
          onChange={(e) => setTargetAccount(parseInt(e.target.value))}
        >
          {accountOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Enter amount to transfer"
          value={transferAmount}
          onChange={(e) => setTransferAmount(parseInt(e.target.value))}
        />
        <div style={{ marginTop: "10px" }}>
          <button
            className="btn btn-sm btn-success mr-2"
            onClick={handleTransfer}
          >
            Transfer
          </button>
          <button
            className="btn btn-sm btn-primary"
            onClick={closeTransferModal}
            style={{ marginLeft: "20px" }}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default BalanceCard;
