'use client';

import {
  UsersIcon,
  BookOpenIcon,
  DollarSignIcon,
  TrendingUpIcon,
  AlertCircleIcon,
} from 'lucide-react';
import { MOCK_STUDENTS } from '@/data/tutor-data';
import Link from 'next/link';

export default function DashboardPage() {
  // Calculate stats
  const totalStudents = MOCK_STUDENTS.length;
  const totalLessons = MOCK_STUDENTS.reduce((acc, s) => acc + s.lessons.length, 0);
  const totalBalance = MOCK_STUDENTS.reduce((acc, s) => acc + s.balance, 0);
  
  // Get recent lessons (flatten and sort)
  const recentLessons = MOCK_STUDENTS.flatMap(s => 
    s.lessons.map(l => ({ ...l, studentName: s.name, studentId: s.id }))
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
   .slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <SummaryCard
          icon={UsersIcon}
          label="Total Students"
          value={totalStudents.toString()}
          subtext="Active learners"
          color="blue"
        />
        <SummaryCard
          icon={BookOpenIcon}
          label="Lessons Taught"
          value={totalLessons.toString()}
          subtext="Total sessions"
          color="green"
        />
        <SummaryCard
          icon={DollarSignIcon}
          label="Outstanding Balance"
          value={`$${totalBalance}`}
          subtext="Pending payments"
          color={totalBalance > 0 ? 'red' : 'gray'}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Lessons */}
        <div className="overflow-hidden bg-white border border-gray-200 dark:bg-gray-900 rounded-xl dark:border-gray-800">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
            <h2 className="font-semibold text-gray-900 dark:text-white">Recent Lessons</h2>
            <Link href="/dashboard/schedule" className="text-sm text-primary-600 hover:underline">View all</Link>
          </div>
          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {recentLessons.length > 0 ? (
              recentLessons.map((lesson) => (
                <div key={lesson.id} className="p-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{lesson.subject}: {lesson.topic}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Student: {lesson.studentName}</p>
                    </div>
                    <span className="px-2 py-1 text-xs text-gray-500 bg-gray-100 rounded dark:bg-gray-800">
                      {lesson.date}
                    </span>
                  </div>
                  {lesson.needsReinforcement && (
                    <div className="flex items-center gap-1 px-2 py-1 mt-2 text-xs rounded text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 w-fit">
                      <AlertCircleIcon className="w-3 h-3" />
                      Needs Reinforcement
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-gray-500">No lessons recorded yet.</div>
            )}
          </div>
        </div>

        {/* Quick Actions / Students Owing Money */}
        <div className="space-y-6">
          <div className="overflow-hidden bg-white border border-gray-200 dark:bg-gray-900 rounded-xl dark:border-gray-800">
            <div className="p-4 border-b border-gray-200 dark:border-gray-800">
              <h2 className="font-semibold text-gray-900 dark:text-white">Pending Payments</h2>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-800">
              {MOCK_STUDENTS.filter(s => s.balance > 0).map(student => (
                <div key={student.id} className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 text-xs font-bold text-red-600 bg-red-100 rounded-full dark:bg-red-900/30 dark:text-red-400">
                      {student.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{student.name}</p>
                      <p className="text-xs text-gray-500">{student.grade}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-red-600 dark:text-red-400">${student.balance}</p>
                    <button className="text-xs text-primary-600 hover:underline">Record Payment</button>
                  </div>
                </div>
              ))}
              {MOCK_STUDENTS.filter(s => s.balance > 0).length === 0 && (
                <div className="p-8 text-center text-gray-500">No pending payments!</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface SummaryCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  subtext: string;
  color: 'blue' | 'green' | 'red' | 'gray';
}

function SummaryCard({ icon: Icon, label, value, subtext, color }: SummaryCardProps) {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
    green: 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400',
    red: 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400',
    gray: 'bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
  };

  return (
    <div className="p-6 bg-white border border-gray-200 shadow-sm dark:bg-gray-900 rounded-xl dark:border-gray-800">
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-lg ${colorClasses[color as keyof typeof colorClasses] || colorClasses.gray}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</p>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{value}</h3>
          <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">{subtext}</p>
        </div>
      </div>
    </div>
  );
}
