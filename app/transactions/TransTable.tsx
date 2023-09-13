import Image from "next/image";
import { prisma } from "../../lib/prisma";

const avatarLoader = ({ src }: { src: string }) => {
  return `https://api.dicebear.com/6.x/adventurer/svg?seed=${src}`;
};

export default async function TransTable() {
  let transactions = await prisma.transactions.findMany({});
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Reference</th>
            <th>💸Withdrawals</th>
            <th>💰Deposit</th>
            <th>💲Balance</th>
            <th>⌚Time & Date</th>
          </tr>
        </thead>
        <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.name}</td>
                <td>{transaction.reference}</td>
                <td>{transaction.withdrawal?.toFixed(2)}</td>
                <td>{transaction.deposit?.toFixed(2)}</td>
                <td>{transaction.balance?.toFixed(2)}</td>
                <td>{transaction.timestamp?.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Reference</th>
            <th>💸Withdrawls</th>
            <th>💰Deposit</th>
            <th>💲Balance</th>
            <th>⌚Time & Date</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
