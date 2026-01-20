'use server';

import { db } from '@/db';
import { users, expenses, goals, subscriptions } from '@/db/schema';
import { hash } from 'bcryptjs';
import { eq } from 'drizzle-orm';
import { auth, signIn, signOut } from '@/auth';
import { revalidatePath } from 'next/cache';
import { AuthError } from 'next-auth';

export async function authenticate(formData: FormData) {
  try {
    const email = formData.get('email');
    const password = formData.get('password');
    
    await signIn('credentials', { 
        email, 
        password, 
        redirectTo: '/dashboard' 
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Identifiants incorrects.';
        default:
          return 'Une erreur est survenue.';
      }
    }
    throw error;
  }
}

export async function register(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const name = formData.get('name') as string;

  if (!email || !password || !name) {
    return { error: 'Tous les champs sont requis.' };
  }

  const existingUser = await db.query.users.findFirst({
    where: eq(users.email, email),
  });

  if (existingUser) {
    return { error: 'Cet email est déjà utilisé.' };
  }

  const hashedPassword = await hash(password, 10);

  await db.insert(users).values({
    email,
    password: hashedPassword,
    name,
  });

  // Automatically sign in? Or redirect to login.
  // Redirecting to login is safer/easier for Credentials flow initially.
  // Or we can try to call signIn.
}

export async function addExpense(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) return { error: 'Non authentifié' };

  const name = formData.get('name') as string;
  const amount = parseFloat(formData.get('amount') as string);
  const dateStr = formData.get('date') as string;
  const category = formData.get('category') as string;

  if (!name || isNaN(amount) || !dateStr) {
      return { error: 'Données invalides' };
  }

  await db.insert(expenses).values({
      userId: session.user.id,
      name,
      amount: Math.round(amount * 100), // cents
      date: dateStr, // string YYYY-MM-DD works for date column usually, or new Date(dateStr)
      category
  });

  revalidatePath('/dashboard');
}

export async function addSubscription(formData: FormData) {
    const session = await auth();
    if (!session?.user?.id) return { error: 'Non authentifié' };
  
    const name = formData.get('name') as string;
    const amount = parseFloat(formData.get('amount') as string);
    const billingCycle = formData.get('billingCycle') as string;
    const nextPaymentDate = formData.get('nextPaymentDate') as string;
    const category = formData.get('category') as string;
  
    await db.insert(subscriptions).values({
        userId: session.user.id,
        name,
        amount: Math.round(amount * 100),
        billingCycle,
        nextPaymentDate,
        category,
        status: 'active'
    });
  
    revalidatePath('/dashboard');
}

export async function addGoal(formData: FormData) {
    const session = await auth();
    if (!session?.user?.id) return { error: 'Non authentifié' };
  
    const name = formData.get('name') as string;
    const targetAmount = parseFloat(formData.get('targetAmount') as string);
    const deadline = formData.get('deadline') as string;
  
    await db.insert(goals).values({
        userId: session.user.id,
        name,
        targetAmount: Math.round(targetAmount * 100),
        currentAmount: 0,
        deadline
    });
  
    revalidatePath('/dashboard');
}

export async function handleSignOut() {
    await signOut();
}
