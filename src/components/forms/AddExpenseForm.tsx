'use client';

import { addExpense } from '@/app/actions';
import { Button } from '@/components/ui/Button';
import { useActionState } from 'react';

export function AddExpenseForm() {
  const [state, formAction, isPending] = useActionState(async (_prev: any, formData: FormData) => {
    const res = await addExpense(formData);
    if (res?.error) return { error: res.error };
    return { success: true };
  }, null);

  return (
    <form action={formAction} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label className="font-bold uppercase text-xs mb-1 block">Nom</label>
            <input name="name" required className="w-full p-2 border-2 border-black" placeholder="Courses, Resto..." />
        </div>
        <div>
            <label className="font-bold uppercase text-xs mb-1 block">Montant (€)</label>
            <input name="amount" type="number" step="0.01" required className="w-full p-2 border-2 border-black" placeholder="25.50" />
        </div>
        <div>
            <label className="font-bold uppercase text-xs mb-1 block">Date</label>
            <input name="date" type="date" required className="w-full p-2 border-2 border-black" defaultValue={new Date().toISOString().split('T')[0]} />
        </div>
         <div>
            <label className="font-bold uppercase text-xs mb-1 block">Catégorie</label>
            <input name="category" className="w-full p-2 border-2 border-black" placeholder="Alimentation..." />
        </div>
      </div>
      {state?.error && <p className="text-red-500 font-bold text-xs">{state.error}</p>}
      <Button type="submit" size="sm" disabled={isPending}>
          {isPending ? 'Ajout...' : 'Ajouter'}
      </Button>
    </form>
  );
}
