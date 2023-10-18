"use client"
import React, { useState, useEffect } from "react";

type SavingsGoal = {
  goal: string;
  amount: number;
};

function SavingsGoals() {
  const gradientBackground = "bg-gradient-to-b from-white to-gray-300";

  const [newGoal, setNewGoal] = useState<SavingsGoal>({ goal: "", amount: 0 });
  const [savingsGoals, setSavingsGoals] = useState<SavingsGoal[]>([]);

  useEffect(() => {
    // Retrieve goals from localStorage when the component mounts
    const savedGoals = localStorage.getItem("savingsGoals");
    if (savedGoals) {
      setSavingsGoals(JSON.parse(savedGoals));
    }
  }, []);

  useEffect(() => {
    // Save goals to localStorage whenever the savingsGoals state changes
    localStorage.setItem("savingsGoals", JSON.stringify(savingsGoals));
  }, [savingsGoals]);

  const handleGoalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewGoal({ ...newGoal, [name]: name === "amount" ? parseFloat(value) : value });
  };

  const handleAddGoal = () => {
    if (newGoal.goal && newGoal.amount > 0) {
      setSavingsGoals([...savingsGoals, newGoal]);
      setNewGoal({ goal: "", amount: 0 });
    }
  };

  return (
    <div className={`min-h-screen flex ${gradientBackground}`}>
      <div className="w-full max-w-md p-4 text-secondary mx-auto">
        <h1 className="text-3xl font-semibold mb-4">My Savings Goals 💰</h1>
        <ul className="space-y-2">
          {savingsGoals.map((goal, index) => (
            <li key={index} className="flex justify-between items-center">
              <span className="font-medium text-xl">{goal.goal}</span>
              <span className="text-primary">${goal.amount}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <input
            type="text"
            name="goal"
            value={newGoal.goal}
            onChange={handleGoalChange}
            placeholder="Goal Name"
            className="mr-2 p-2"
          />
          <input
            type="number"
            name="amount"
            value={newGoal.amount}
            onChange={handleGoalChange}
            placeholder="Amount"
            className="mr-2 p-2"
          />
          <button className="btn btn-sm btn-primary" onClick={handleAddGoal}>
            Add Goal
          </button>
        </div>
      </div>
    </div>
  );
}

export default SavingsGoals;
