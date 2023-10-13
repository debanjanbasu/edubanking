import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getLastBalance(): Promise<number> {
    try {
        const latestTransaction = await prisma.transactions.findFirst({
            orderBy: {
                timestamp: 'desc',
            },
            select: {
                balance: true,
            },
        });

        if (latestTransaction) {
            // Handle Decimal type or null value
            const balance = latestTransaction.balance ? parseFloat(latestTransaction.balance.toString()) : 0;
            return balance;
        } else {
            return 0;
        }
    } catch (error) {
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

(async () => {
    try {
        const lastBalance = await getLastBalance();
        console.log('Last Balance:', lastBalance);
    } catch (error) {
        console.error('Error:', error);
    }
})();
