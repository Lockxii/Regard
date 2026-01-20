import { auth } from '@/auth';
import { db } from '@/db';
import { subscriptions } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { AddSubscriptionForm } from '@/components/forms/AddSubscriptionForm';

export default async function SubscriptionsPage() {
  const session = await auth();
  if (!session?.user?.id) return null;

  const subs = await db.query.subscriptions.findMany({
    where: eq(subscriptions.userId, session.user.id),
  });

  return (
    <div>
        <h1 className="text-3xl font-black uppercase tracking-tighter mb-6">Abonnements</h1>
        
        <div className="mb-8 brutal-card bg-white p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-xl font-bold uppercase mb-4">Ajouter un abonnement</h2>
            <AddSubscriptionForm />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subs.map(sub => (
                <div key={sub.id} className="p-6 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative">
                    <div className="absolute top-2 right-2 text-xs font-bold bg-yellow-200 px-2 py-1 border border-black uppercase">
                        {sub.billingCycle === 'monthly' ? 'Mensuel' : 'Annuel'}
                    </div>
                    <h3 className="font-black text-xl mb-1">{sub.name}</h3>
                    <p className="text-2xl font-bold mb-4">{(sub.amount / 100).toFixed(2)}€</p>
                    <div className="text-xs space-y-1 text-gray-600">
                        <p>Prochain: {sub.nextPaymentDate}</p>
                        <p>Catégorie: {sub.category || 'N/A'}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}
