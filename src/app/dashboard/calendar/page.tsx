import { auth } from '@/auth';
import { db } from '@/db';
import { subscriptions } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { startOfMonth, endOfMonth, eachDayOfInterval, format, getDay, isSameDay, parseISO, getDate } from 'date-fns';
import { fr } from 'date-fns/locale';

export default async function CalendarPage() {
  const session = await auth();
  if (!session?.user?.id) return null;

  const subs = await db.query.subscriptions.findMany({
    where: eq(subscriptions.userId, session.user.id),
  });

  const today = new Date();
  const start = startOfMonth(today);
  const end = endOfMonth(today);
  const days = eachDayOfInterval({ start, end });
  
  // Prepare events
  const events = days.map(day => {
      const dayEvents = subs.filter(sub => {
          const paymentDate = new Date(sub.nextPaymentDate);
          
          if (sub.billingCycle === 'monthly') {
              // Check if the day of month matches
              // Handle edge cases like 31st on a 30-day month later (simplified here)
              return getDate(paymentDate) === getDate(day); 
          } else {
             // Check exact date match (ignoring year if we assume recurring yearly from start date, but nextPaymentDate should be the actual next date)
             return isSameDay(paymentDate, day); 
          }
      });
      return { date: day, items: dayEvents };
  });

  const startDayIndex = getDay(start); // 0 = Sunday, 1 = Monday... 
  // Adjust for Monday start (French locale usually)
  const offset = startDayIndex === 0 ? 6 : startDayIndex - 1; 

  return (
    <div>
        <h1 className="text-3xl font-black uppercase tracking-tighter mb-6">Calendrier - {format(today, 'MMMM yyyy', { locale: fr })}</h1>
        
        <div className="brutal-card bg-white p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="grid grid-cols-7 gap-2 mb-2 font-bold uppercase text-center text-xs">
                {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map(d => (
                    <div key={d} className="p-2">{d}</div>
                ))}
            </div>
            
            <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: offset }).map((_, i) => (
                    <div key={`empty-${i}`} className="h-24 bg-gray-50 border border-transparent"></div>
                ))}
                
                {events.map(({ date, items }) => (
                    <div key={date.toISOString()} className="h-24 border-2 border-black p-1 relative hover:bg-gray-50 transition-colors overflow-hidden">
                        <span className="absolute top-1 right-1 text-xs font-bold">{getDate(date)}</span>
                        <div className="mt-4 space-y-1">
                            {items.map(sub => (
                                <div key={sub.id} className="text-[9px] bg-black text-white px-1 py-0.5 truncate rounded-sm">
                                    {sub.name}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}
