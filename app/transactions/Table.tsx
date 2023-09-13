import { prisma } from "@/lib/prisma";

export default async function TransactionTable() {
  try {
    const transactions = await prisma.transactions.findMany();

    return (
      <>
        <h1 className="font-bold text-2xl">Transactions</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Reference</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.name}</td>
                <td>{transaction.reference}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return <p>Error fetching transactions</p>;
  }
}
