import BankAccount from "../banking/bankAccount"

export default function BalanceCard() {

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 400px)' }}>
         <div className="stats bg-accent text-primary-content">
          <div className="stat">
            <div className="stat-title text-neutral">Current balance</div>
              <div className="stat-value text-neutral">${bankAccount.balance}</div>
                <div className="stat-actions">
                  <button className="btn btn-sm btn-primary" style={{ marginRight: '10px'}}>Withdrawal</button> 
                  <button className="btn btn-sm btn-success">Deposit</button>
                </div>
            </div>
         </div>
    </div>
  )
}
