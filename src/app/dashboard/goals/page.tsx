import { auth } from '@/auth';
import { db } from '@/db';
import { goals } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { AddGoalForm } from '@/components/forms/AddGoalForm';

export default async function GoalsPage() {
  const session = await auth();
  if (!session?.user?.id) return null;

  const userGoals = await db.query.goals.findMany({
    where: eq(goals.userId, session.user.id),
  });

  return (
    <div>
        <h1 className="text-3xl font-black uppercase tracking-tighter mb-6">Objectifs</h1>
        
        <div className="mb-8 brutal-card bg-white p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-xl font-bold uppercase mb-4">Nouvel Objectif</h2>
            <AddGoalForm />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userGoals.map(g => {
                const progress = g.targetAmount > 0 ? (g.currentAmount || 0) / g.targetAmount * 100 : 0;
                return (
                    <div key={g.id} className="p-6 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="font-black text-xl">{g.name}</h3>
                            <span className="text-sm font-bold bg-black text-white px-2 py-1">
                                {((g.currentAmount || 0) / 100).toFixed(0)}€ / {(g.targetAmount / 100).toFixed(0)}€
                            </span>
                        </div>
                        
                        <div className="w-full h-4 border-2 border-black bg-gray-100 mb-2 relative">
                            <div 
                                className="h-full bg-green-400 border-r-2 border-black absolute top-0 left-0" 
                                style={{ width: `${Math.min(progress, 100)}%` }}
                            />
                        </div>
                        <div className="flex justify-between text-xs font-bold text-gray-500 uppercase">
                            <span>0%</span>
                            <span>{progress.toFixed(0)}%</span>
                            <span>100%</span>
                        </div>
                        {g.deadline && <p className="mt-4 text-xs font-bold">Deadline: {g.deadline}</p>}
                    </div>
                );
            })}
        </div>
    </div>
  );
}
