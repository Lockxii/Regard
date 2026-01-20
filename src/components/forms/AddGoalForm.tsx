'use client';

import { addGoal } from '@/app/actions';
import { Button } from '@/components/ui/Button';
import { useActionState } from 'react';

export function AddGoalForm() {
    const [state, formAction, isPending] = useActionState(async (_prev: any, formData: FormData) => {
        const res = await addGoal(formData);
        if (res?.error) return { error: res.error };
        return { success: true };
    }, null);

  return (
    <form action={formAction} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label className="font-bold uppercase text-xs mb-1 block">Nom de l'objectif</label>
            <input name="name" required className="w-full p-2 border-2 border-black" placeholder="Voyage, Voiture..." />
        </div>
        <div>
            <label className="font-bold uppercase text-xs mb-1 block">Montant Cible (€)</label>
            <input name="targetAmount" type="number" step="0.01" required className="w-full p-2 border-2 border-black" placeholder="1000" />
        </div>
        <div>
            <label className="font-bold uppercase text-xs mb-1 block">Date Limite</label>
            <input name="deadline" type="date" className="w-full p-2 border-2 border-black" />
        </div>
      </div>
      {state?.error && <p className="text-red-500 font-bold text-xs">{state.error}</p>}
      <Button type="submit" size="sm" disabled={isPending}>
          {isPending ? 'Créer...' : "Créer l'objectif"}
      </Button>
    </form>
  );
}
