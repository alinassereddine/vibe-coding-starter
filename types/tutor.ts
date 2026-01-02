export type Grade = 'Grade 3' | 'Grade 4' | 'Grade 5' | 'Grade 6' | 'Grade 7' | 'Grade 8' | 'Grade 9';

export type Subject = 'English' | 'French' | 'Arabic' | 'Maths' | 'Physics' | 'Chemistry' | 'Science';

export interface Payment {
  id: string;
  amount: number;
  date: string;
  status: 'paid' | 'pending' | 'overdue';
  description?: string;
}

export interface Lesson {
  id: string;
  date: string;
  subject: Subject;
  topic: string;
  notes: string;
  needsReinforcement: boolean;
  durationMinutes: number;
}

export interface Student {
  id: string;
  name: string;
  grade: Grade;
  subjects: Subject[];
  email?: string;
  parentPhone?: string;
  lessons: Lesson[];
  payments: Payment[];
  balance: number; // Positive means they owe you, negative means they overpaid/credit
  status: 'active' | 'inactive';
}
