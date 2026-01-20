'use client';

import { useActionState } from 'react';
import { authenticate } from '@/app/actions';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function LoginPage() {
  const [errorMessage, formAction, isPending] = useActionState(
    async (_prevState: string | undefined, formData: FormData) => {
      const result = await authenticate(formData);
        if (result) return result;
        return undefined;
    },
    undefined
  );

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center p-4">
      <div className="brutal-card bg-white p-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full max-w-md">
        <h1 className="text-3xl font-black uppercase tracking-tighter mb-6 text-center">Connexion</h1>
        <form action={formAction} className="space-y-4">
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
          {errorMessage && (
            <div className="p-3 bg-red-100 border-2 border-red-500 text-red-700 font-bold text-sm">
              {errorMessage}
            </div>
          )}
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? 'Connexion...' : 'Se connecter'}
          </Button>
        </form>
        <div className="mt-6 text-center text-sm">
          Pas encore de compte ?{' '}
          <Link href="/register" className="font-bold underline hover:text-primary">
            S'inscrire
          </Link>
        </div>
      </div>
    </div>
  );
}
