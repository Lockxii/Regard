import { auth } from '@/auth';
import { db } from '@/db';
import { expenses, subscriptions } from '@/db/schema';
import { eq, desc } from 'drizzle-orm';
import { BarChart3, TrendingUp, TrendingDown, PieChart } from 'lucide-react';

export default async function StatsPage() {
  const session = await auth();
  if (!session?.user?.id) return null;

  // Fetch data
  const userSubs = await db.query.subscriptions.findMany({
    where: eq(subscriptions.userId, session.user.id),
  });

  const userExpenses = await db.query.expenses.findMany({
    where: eq(expenses.userId, session.user.id),
  });

  // Calculate Stats
  const monthlySubCost = userSubs.reduce((acc, sub) => {
      // Crude approximation if yearly
      const amount = sub.amount;
      return acc + (sub.billingCycle === 'monthly' ? amount : amount / 12);
  }, 0);

  const totalExpenses = userExpenses.reduce((acc, e) => acc + e.amount, 0);

  // Group expenses by category
  const expensesByCategory: Record<string, number> = {};
  userExpenses.forEach(e => {
      const cat = e.category || 'Autres';
      expensesByCategory[cat] = (expensesByCategory[cat] || 0) + e.amount;
  });

  // Sort categories
  const sortedCategories = Object.entries(expensesByCategory)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5); // Top 5

  const maxCategoryAmount = sortedCategories.length > 0 ? sortedCategories[0][1] : 1;

  return (
    <div>
        <h1 className="text-3xl font-black uppercase tracking-tighter mb-8">Statistiques</h1>

        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            
            {/* Monthly Fixed */}
            <div className="brutal-card p-6 bg-white border-2 border-black shadow-[4px_4px_0px_0px_black] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 bg-blue-100 border-l-2 border-b-2 border-black">
                    <TrendingUp size={20} />
                </div>
                <h3 className="text-sm font-black uppercase opacity-60 mb-2">Charges Fixes (Est. Mensuel)</h3>
                <p className="text-4xl font-black text-blue-600">{(monthlySubCost / 100).toFixed(2)}€</p>
                <p className="text-xs font-bold mt-2">{userSubs.length} abonnements actifs</p>
            </div>

            {/* Total Expenses */}
            <div className="brutal-card p-6 bg-white border-2 border-black shadow-[4px_4px_0px_0px_black] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 bg-red-100 border-l-2 border-b-2 border-black">
                    <TrendingDown size={20} />
                </div>
                <h3 className="text-sm font-black uppercase opacity-60 mb-2">Total Dépenses (Global)</h3>
                <p className="text-4xl font-black text-red-600">{(totalExpenses / 100).toFixed(2)}€</p>
                <p className="text-xs font-bold mt-2">{userExpenses.length} transactions</p>
            </div>

            {/* Ratio */}
             <div className="p-6 bg-black text-white border-2 border-black shadow-[4px_4px_0px_0px_#fbbf24] relative overflow-hidden transition-transform hover:-translate-y-1">
                <div className="absolute top-0 right-0 p-2 bg-accent text-black border-l-2 border-b-2 border-white">
                    <PieChart size={20} />
                </div>
                <h3 className="text-sm font-black uppercase opacity-80 mb-2 text-white">Ratio Fixe / Variable</h3>
                <div className="text-4xl font-black text-white">
                    {totalExpenses > 0 ? ((monthlySubCost / totalExpenses) * 100).toFixed(0) : '0'}%
                </div>
                <p className="text-xs font-bold mt-2 opacity-60 text-white">Part des abonnements</p>
            </div>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Bar Chart - Categories */}
            <div className="brutal-card p-8 bg-white border-2 border-black shadow-[8px_8px_0px_0px_black]">
                <h2 className="text-xl font-black uppercase mb-6 flex items-center gap-2">
                    <BarChart3 size={24} />
                    Top Dépenses par Catégorie
                </h2>
                
                <div className="space-y-4">
                    {sortedCategories.length === 0 ? (
                        <p className="text-sm font-medium opacity-50 italic">Aucune donnée disponible.</p>
                    ) : (
                        sortedCategories.map(([cat, amount]) => (
                            <div key={cat} className="space-y-1">
                                <div className="flex justify-between text-xs font-bold uppercase">
                                    <span>{cat}</span>
                                    <span>{(amount / 100).toFixed(2)}€</span>
                                </div>
                                <div className="w-full h-4 border-2 border-black p-[2px]">
                                    <div 
                                        className="h-full bg-accent border-r-2 border-black" 
                                        style={{ width: `${(amount / maxCategoryAmount) * 100}%` }}
                                    />
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Subscriptions List (Detailed) */}
             <div className="brutal-card p-8 bg-white border-2 border-black shadow-[8px_8px_0px_0px_black]">
                <h2 className="text-xl font-black uppercase mb-6">Répartition Abonnements</h2>
                 <div className="space-y-3">
                    {userSubs.length === 0 ? (
                         <p className="text-sm font-medium opacity-50 italic">Aucun abonnement.</p>
                    ) : (
                        userSubs.slice(0, 5).map(sub => ( // Show only top 5 recent
                            <div key={sub.id} className="flex items-center justify-between p-3 border-2 border-black bg-gray-50 hover:bg-white hover:translate-x-1 transition-transform cursor-default">
                                <div className="font-bold text-sm truncate pr-4">{sub.name}</div>
                                <div className="font-mono font-bold text-sm">{(sub.amount / 100).toFixed(2)}€</div>
                            </div>
                        ))
                    )}
                    {userSubs.length > 5 && (
                        <p className="text-xs font-bold text-center mt-4 opacity-50 uppercase">Et {userSubs.length - 5} autres...</p>
                    )}
                 </div>
            </div>

        </div>
    </div>
  );
}
