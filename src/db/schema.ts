import { pgTable, serial, text, timestamp, integer, boolean, date, uuid } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name'),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const subscriptions = pgTable('subscriptions', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  name: text('name').notNull(),
  amount: integer('amount').notNull(), // stored in cents
  billingCycle: text('billing_cycle').notNull(), // 'monthly' | 'yearly'
  nextPaymentDate: date('next_payment_date').notNull(),
  category: text('category'),
  status: text('status').default('active'), // 'active' | 'cancelled'
  createdAt: timestamp('created_at').defaultNow(),
});

export const expenses = pgTable('expenses', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  name: text('name').notNull(),
  amount: integer('amount').notNull(), // stored in cents
  date: date('date').notNull(),
  category: text('category'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const goals = pgTable('goals', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  name: text('name').notNull(),
  targetAmount: integer('target_amount').notNull(), // stored in cents
  currentAmount: integer('current_amount').default(0),
  deadline: date('deadline'),
  createdAt: timestamp('created_at').defaultNow(),
});
