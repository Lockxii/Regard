import { auth } from '@/auth';
import { db } from '@/db';
import { subscriptions, goals, expenses } from '@/db/schema';
import { eq, desc } from 'drizzle-orm';
import Link from 'next/link';

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user?.id) return null;

  const userSubs = await db.query.subscriptions.findMany({
    where: eq(subscriptions.userId, session.user.id),
  });

  const userGoals = await db.query.goals.findMany({
    where: eq(goals.userId, session.user.id),
  });

  const recentExpenses = await db.query.expenses.findMany({
    where: eq(expenses.userId, session.user.id),
    orderBy: [desc(expenses.date)],
    limit: 5,
  });

  const totalMonthlySubs = userSubs.reduce((acc, sub) => {
    // Basic calculation assuming monthly billing for simplicity in overview
    // Convert yearly to monthly roughly
    const amount = sub.billingCycle === 'yearly' ? sub.amount / 12 : sub.amount;
    return acc + amount;
  }, 0) / 100;

  const totalSaved = userGoals.reduce((acc, goal) => acc + (goal.currentAmount || 0), 0) / 100;

  return (
    <div>
      <h1 className="text-3xl font-black uppercase tracking-tighter mb-8">Tableau de bord</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
         <div className="p-6 border-2 border-black bg-blue-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-bold text-xl mb-2">Abonnements Mensuels</h3>
            <p className="text-3xl font-black">{totalMonthlySubs.toFixed(2)}€</p>
            <p className="text-xs mt-2 text-gray-600">{userSubs.length} abonnements actifs</p>
         </div>
         <div className="p-6 border-2 border-black bg-green-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-bold text-xl mb-2">Total Épargné</h3>
            <p className="text-3xl font-black">{totalSaved.toFixed(2)}€</p>
            <p className="text-xs mt-2 text-gray-600">Sur {userGoals.length} objectifs</p>
         </div>
         <div className="p-6 border-2 border-black bg-yellow-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="font-bold text-xl mb-2">Dépenses Récentes</h3>
            <div className="mt-2 space-y-2">
                {recentExpenses.length === 0 ? <p className="text-sm">Aucune dépense récente</p> : 
                    recentExpenses.map(e => (
                        <div key={e.id} className="flex justify-between text-sm border-b border-black/10 pb-1">
                            <span>{e.name}</span>
                            <span className="font-bold">{(e.amount / 100).toFixed(2)}€</span>
                        </div>
                    ))
                }
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="brutal-card bg-white p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-xl font-bold uppercase mb-4">Actions Rapides</h2>
            <div className="grid grid-cols-2 gap-4">
                <Link href="/dashboard/expenses" className="p-4 border-2 border-black hover:bg-gray-50 flex flex-col items-center justify-center text-center">
                    <span className="font-bold">+ Dépense</span>
                </Link>
                <Link href="/dashboard/subscriptions" className="p-4 border-2 border-black hover:bg-gray-50 flex flex-col items-center justify-center text-center">
                    <span className="font-bold">+ Abonnement</span>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}