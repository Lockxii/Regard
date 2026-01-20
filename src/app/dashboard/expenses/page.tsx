import { auth } from '@/auth';
import { db } from '@/db';
import { expenses } from '@/db/schema';
import { eq, desc } from 'drizzle-orm';
import { AddExpenseForm } from '@/components/forms/AddExpenseForm';
import { DeleteButton } from '@/components/DeleteButton';
import { deleteExpense } from '@/app/actions';

export default async function ExpensesPage() {
  const session = await auth();
  if (!session?.user?.id) return null;

  const userExpenses = await db.query.expenses.findMany({
    where: eq(expenses.userId, session.user.id),
    orderBy: [desc(expenses.date)],
  });

  return (
    <div>
        <h1 className="text-3xl font-black uppercase tracking-tighter mb-6">Dépenses</h1>
        
        <div className="mb-8 brutal-card bg-white p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-xl font-bold uppercase mb-4">Ajouter une dépense</h2>
            <AddExpenseForm />
        </div>

        <div className="brutal-card bg-white p-0 border-2 border-black">
            <table className="w-full text-left">
                <thead className="bg-black text-white uppercase text-xs">
                    <tr>
                        <th className="p-4">Date</th>
                        <th className="p-4">Nom</th>
                        <th className="p-4">Catégorie</th>
                        <th className="p-4 text-right">Montant</th>
                        <th className="p-4 text-center">Action</th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {userExpenses.map(e => (
                        <tr key={e.id} className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="p-4">{e.date}</td>
                            <td className="p-4 font-bold">{e.name}</td>
                            <td className="p-4 text-gray-500">{e.category}</td>
                            <td className="p-4 text-right font-bold">{(e.amount / 100).toFixed(2)}€</td>
                            <td className="p-4 text-center">
                                <DeleteButton id={e.id} onDelete={deleteExpense} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
}
