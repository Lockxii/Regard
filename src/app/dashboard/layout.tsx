import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { handleSignOut } from '@/app/actions';
import { LayoutDashboard, CreditCard, PiggyBank, CalendarDays, Wallet, LogOut, User, BarChart3 } from 'lucide-react';

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
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col md:flex-row pb-16 md:pb-0">
      
      {/* Mobile Top Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b-2 border-black z-30 flex items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-black flex items-center justify-center rotate-3 shadow-[2px_2px_0px_0px_rgba(37,99,235,1)]">
                <div className="w-3 h-3 border border-white rounded-sm" />
            </div>
            <span className="text-lg font-black uppercase tracking-tighter">Regard</span>
          </Link>
          <div className="flex items-center gap-3">
             <span className="text-xs font-bold truncate max-w-[100px]">{session.user?.name || session.user?.email?.split('@')[0]}</span>
             <form action={handleSignOut}>
                <button type="submit" className="p-2 hover:bg-gray-100 rounded-full">
                    <LogOut size={18} className="text-red-600" />
                </button>
             </form>
          </div>
      </header>

      {/* Sidebar Desktop */}
      <aside className="hidden md:flex w-64 bg-white border-r-2 border-black flex-col fixed z-20 h-screen">
        <div className="p-6 border-b-2 border-black h-20 flex items-center">
            <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-black flex items-center justify-center rotate-3 shadow-[2px_2px_0px_0px_rgba(37,99,235,1)]">
                   <div className="w-4 h-4 border-2 border-white rounded-sm" />
                </div>
                <span className="text-xl font-black uppercase tracking-tighter">Regard</span>
            </Link>
        </div>
        
        <nav className="flex-1 p-4 flex flex-col gap-2">
            <NavLinks />
        </nav>

        <div className="p-4 border-t-2 border-black bg-gray-50">
            <div className="mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white border border-black">
                    <User size={16} />
                </div>
                <div className="text-xs font-bold truncate flex-1">
                    {session.user?.email}
                </div>
            </div>
            <form action={handleSignOut}>
                <Button variant="ghost" size="sm" className="w-full justify-start text-red-600 hover:text-red-700 hover:border-red-700 border border-transparent hover:bg-white">
                    <LogOut size={16} className="mr-2" /> Déconnexion
                </Button>
            </form>
        </div>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-4 md:p-8 pt-20 md:pt-8 md:pl-72 overflow-y-auto min-h-screen">
        <div className="container mx-auto max-w-5xl">
            {children}
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-black z-30 h-16 flex items-center justify-around px-2 pb-safe">
        <MobileNavLink href="/dashboard" icon={LayoutDashboard} label="Vue" />
        <MobileNavLink href="/dashboard/subscriptions" icon={CreditCard} label="Abos" />
        <MobileNavLink href="/dashboard/stats" icon={BarChart3} label="Stats" />
        <MobileNavLink href="/dashboard/expenses" icon={Wallet} label="Dépenses" />
        <MobileNavLink href="/dashboard/goals" icon={PiggyBank} label="Buts" />
      </nav>
    </div>
  );
}

function NavLinks() {
    return (
        <>
            <DesktopNavLink href="/dashboard" icon={LayoutDashboard} label="Vue d'ensemble" />
            <DesktopNavLink href="/dashboard/subscriptions" icon={CreditCard} label="Abonnements" />
            <DesktopNavLink href="/dashboard/stats" icon={BarChart3} label="Statistiques" />
            <DesktopNavLink href="/dashboard/expenses" icon={Wallet} label="Dépenses" />
            <DesktopNavLink href="/dashboard/goals" icon={PiggyBank} label="Objectifs" />
            <DesktopNavLink href="/dashboard/calendar" icon={CalendarDays} label="Calendrier" />
        </>
    )
}

function DesktopNavLink({ href, icon: Icon, label }: { href: string, icon: any, label: string }) {
    return (
        <Link href={href} className="flex items-center gap-3 p-3 font-bold text-sm hover:bg-accent border-2 border-transparent hover:border-black transition-all hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_black]">
            <Icon size={20} />
            <span>{label}</span>
        </Link>
    )
}

function MobileNavLink({ href, icon: Icon, label }: { href: string, icon: any, label: string }) {
    return (
        <Link href={href} className="flex flex-col items-center justify-center w-full h-full gap-1 text-[10px] font-black uppercase text-gray-500 hover:text-primary active:text-primary transition-colors">
            <Icon size={20} />
            <span>{label}</span>
        </Link>
    )
}
