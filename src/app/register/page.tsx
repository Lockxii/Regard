'use client';

import { register } from '@/app/actions';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { useActionState } from 'react';

export default function RegisterPage() {
    const [state, formAction, isPending] = useActionState(async (_prev: any, formData: FormData) => {
        const res = await register(formData);
        if (res?.error) return { error: res.error };
        // Redirect is handled in action or we can redirect here manually if action returns success
        window.location.href = '/login'; 
        return { success: true };
    }, null);

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center p-4">
      <div className="brutal-card bg-white p-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full max-w-md">
        <h1 className="text-3xl font-black uppercase tracking-tighter mb-6 text-center">Inscription</h1>
        <form action={formAction} className="space-y-4">
          <div>
            <label className="font-bold uppercase text-xs mb-1 block">Nom</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 border-2 border-black focus:outline-none focus:shadow-[2px_2px_0px_0px_rgba(37,99,235,1)] transition-shadow"
            />
          </div>
          <div>
            <label className="font-bold uppercase text-xs mb-1 block">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 border-2 border-black focus:outline-none focus:shadow-[2px_2px_0px_0px_rgba(37,99,235,1)] transition-shadow"
            />
          </div>
          <div>
            <label className="font-bold uppercase text-xs mb-1 block">Mot de passe</label>
            <input
              type="password"
              name="password"
              required
              minLength={6}
              className="w-full p-3 border-2 border-black focus:outline-none focus:shadow-[2px_2px_0px_0px_rgba(37,99,235,1)] transition-shadow"
            />
          </div>
          {state?.error && (
            <div className="p-3 bg-red-100 border-2 border-red-500 text-red-700 font-bold text-sm">
              {state.error}
            </div>
          )}
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? 'Inscription...' : "S'inscrire"}
          </Button>
        </form>
        <div className="mt-6 text-center text-sm">
          Déjà un compte ?{' '}
          <Link href="/login" className="font-bold underline hover:text-primary">
            Se connecter
          </Link>
        </div>
      </div>
    </div>
  );
}
