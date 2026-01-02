import { Student } from '@/types/tutor';

export const MOCK_STUDENTS: Student[] = [
  {
    id: '1',
    name: 'Ahmed Ali',
    grade: 'Grade 5',
    subjects: ['Maths', 'Science', 'English'],
    parentPhone: '+1234567890',
    status: 'active',
    balance: 50,
    lessons: [
      {
        id: 'l1',
        date: '2025-12-28',
        subject: 'Maths',
        topic: 'Fractions and Decimals',
        notes: 'Struggled a bit with converting fractions to decimals.',
        needsReinforcement: true,
        durationMinutes: 60
      },
      {
        id: 'l2',
        date: '2025-12-30',
        subject: 'Science',
        topic: 'Photosynthesis',
        notes: 'Understood the concept well.',
        needsReinforcement: false,
        durationMinutes: 60
      }
    ],
    payments: [
      {
        id: 'p1',
        amount: 100,
        date: '2025-12-01',
        status: 'paid',
        description: 'December Advance'
      }
    ]
  },
  {
    id: '2',
    name: 'Sarah Smith',
    grade: 'Grade 8',
    subjects: ['Physics', 'Chemistry', 'French'],
    parentPhone: '+0987654321',
    status: 'active',
    balance: 0,
    lessons: [
      {
        id: 'l3',
        date: '2026-01-01',
        subject: 'Physics',
        topic: 'Newton\'s Laws',
        notes: 'Excellent grasp of the 3rd law.',
        needsReinforcement: false,
        durationMinutes: 90
      }
    ],
    payments: [
      {
        id: 'p2',
        amount: 150,
        date: '2025-12-25',
        status: 'paid',
        description: 'Package payment'
      }
    ]
  },
  {
    id: '3',
    name: 'Omar Farooq',
    grade: 'Grade 3',
    subjects: ['Arabic', 'Maths'],
    parentPhone: '+1122334455',
    status: 'active',
    balance: -20, // Credit
    lessons: [],
    payments: []
  }
];
