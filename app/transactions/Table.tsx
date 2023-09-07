import { prisma } from "@/lib/prisma";

export default async function Table() {
  try {
    const transactions = await prisma.transactions.findMany();

    return (
      <>
        <h1 className="font-bold text-2xl">Transactions</h1>
        {transactions.map((transaction) => (
          <div key={transaction.id} className="bg-wh m-2 w-[300px]">
            <p>id: {transaction.id}</p>
            <p>name: {transaction.name}</p>
            <p>reference: {transaction.reference}</p>

          </div>
        ))}
      </>
    );
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return <p>Error fetching transactions</p>;
  }
}

