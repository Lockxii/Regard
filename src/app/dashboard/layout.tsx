import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { handleSignOut } from '@/app/actions';
import { LayoutDashboard, CreditCard, PiggyBank, CalendarDays, Wallet } from 'lucide-react';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col md:flex-row">
      {/* Sidebar Mobile / Desktop */}
      <aside className="w-full md:w-64 bg-white border-r-2 border-black flex flex-col fixed md:relative z-20 h-16 md:h-screen">
        <div className="p-4 border-b-2 border-black flex items-center justify-between md:justify-start gap-3 h-16">
            <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-black flex items-center justify-center rotate-3 shadow-[2px_2px_0px_0px_rgba(37,99,235,1)]">
                   <div className="w-4 h-4 border-2 border-white rounded-sm" />
                </div>
                <span className="text-xl font-black uppercase tracking-tighter">Regard</span>
            </Link>
        </div>
        
        <nav className="flex-1 p-4 flex md:flex-col gap-2 overflow-x-auto md:overflow-visible items-center md:items-stretch">
            <Link href="/dashboard" className="flex items-center gap-3 p-2 font-bold hover:bg-gray-100 border-2 border-transparent hover:border-black transition-all">
                <LayoutDashboard size={20} />
                <span className="hidden md:inline">Vue d'ensemble</span>
            </Link>
            <Link href="/dashboard/subscriptions" className="flex items-center gap-3 p-2 font-bold hover:bg-gray-100 border-2 border-transparent hover:border-black transition-all">
                <CreditCard size={20} />
                <span className="hidden md:inline">Abonnements</span>
            </Link>
            <Link href="/dashboard/expenses" className="flex items-center gap-3 p-2 font-bold hover:bg-gray-100 border-2 border-transparent hover:border-black transition-all">
                <Wallet size={20} />
                <span className="hidden md:inline">Dépenses</span>
            </Link>
            <Link href="/dashboard/goals" className="flex items-center gap-3 p-2 font-bold hover:bg-gray-100 border-2 border-transparent hover:border-black transition-all">
                <PiggyBank size={20} />
                <span className="hidden md:inline">Objectifs</span>
            </Link>
            <Link href="/dashboard/calendar" className="flex items-center gap-3 p-2 font-bold hover:bg-gray-100 border-2 border-transparent hover:border-black transition-all">
                <CalendarDays size={20} />
                <span className="hidden md:inline">Calendrier</span>
            </Link>
        </nav>

        <div className="p-4 border-t-2 border-black hidden md:block">
            <div className="mb-4 text-xs font-bold truncate">
                {session.user?.email}
            </div>
            <form action={handleSignOut}>
                <Button variant="ghost" size="sm" className="w-full justify-start text-red-600 hover:text-red-700 hover:border-red-700">Déconnexion</Button>
            </form>
        </div>
      </aside>

      <main className="flex-1 p-4 md:p-8 pt-20 md:pt-8 overflow-y-auto">
        <div className="container mx-auto max-w-5xl">
            {children}
        </div>
      </main>
    </div>
  );
}
