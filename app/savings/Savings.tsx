
const savingsGoals = [
  { goal: 'Online Games', amount: 20 },
  { goal: 'PS5', amount: 850 },
  { goal: 'Long Term Savings', amount: 500 },
];

function SavingsGoals() {
  const gradientBackground = "linear-gradient(to bottom, #ffffff,#dedee1)";

  return (
    <div style={{ background: gradientBackground, minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="w-full max-w-md p-4 text-secondary">
        <h1 className="text-3xl font-semibold mb-4">My Savings Goals 💰</h1>
        <ul className="space-y-2">
          {savingsGoals.map((goal, index) => (
            <li key={index} className="flex justify-between items-center">
              <span className="font-medium text-xl">{goal.goal}</span>
              <span className="text-primary">${goal.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SavingsGoals;

