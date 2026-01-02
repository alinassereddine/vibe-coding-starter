'use client';

import { MOCK_STUDENTS } from '@/data/tutor-data';
import { DollarSignIcon, TrendingUpIcon, CreditCardIcon, DownloadIcon, FilterIcon } from 'lucide-react';
import { format, parseISO } from 'date-fns';

export default function FinancePage() {
  // Calculate totals
  const totalRevenue = MOCK_STUDENTS.flatMap(s => s.payments).reduce((acc, p) => acc + p.amount, 0);
  const outstandingBalance = MOCK_STUDENTS.reduce((acc, s) => acc + s.balance, 0);
  
  // Flatten and sort transactions
  const transactions = MOCK_STUDENTS.flatMap((student) =>
    student.payments.map((payment) => ({
      ...payment,
      studentName: student.name,
      studentGrade: student.grade,
    }))
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <FinanceCard
          label="Total Revenue"
          value={`$${totalRevenue.toLocaleString()}`}
          subtext="All time earnings"
          icon={DollarSignIcon}
          color="green"
        />
        <FinanceCard
          label="Outstanding Balance"
          value={`$${outstandingBalance.toLocaleString()}`}
          subtext="Pending from students"
          icon={CreditCardIcon}
          color="red"
        />
        <FinanceCard
          label="Average Lesson Price"
          value="$50.00"
          subtext="Per hour estimate"
          icon={TrendingUpIcon}
          color="blue"
        />
      </div>

      {/* Transactions Table */}
      <div className="overflow-hidden bg-white border border-gray-200 shadow-sm dark:bg-gray-900 rounded-xl dark:border-gray-800">
        <div className="flex flex-col items-center justify-between gap-4 p-4 border-b border-gray-200 dark:border-gray-800 sm:flex-row">
          <h2 className="font-semibold text-gray-900 dark:text-white">Transaction History</h2>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <FilterIcon className="w-4 h-4" />
              Filter
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <DownloadIcon className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="border-b border-gray-200 bg-gray-50 dark:bg-gray-800/50 dark:border-gray-800">
              <tr>
                <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Date</th>
                <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Student</th>
                <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Description</th>
                <th className="px-6 py-4 font-medium text-gray-500 dark:text-gray-400">Status</th>
                <th className="px-6 py-4 font-medium text-right text-gray-500 dark:text-gray-400">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              {transactions.length > 0 ? (
                transactions.map((tx) => (
                  <tr key={tx.id} className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                      {format(parseISO(tx.date), 'MMM d, yyyy')}
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900 dark:text-white">{tx.studentName}</div>
                      <div className="text-xs text-gray-500">{tx.studentGrade}</div>
                    </td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{tx.description || 'Tuition Payment'}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                        ${tx.status === 'paid' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 
                          tx.status === 'pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' : 
                          'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'}`}>
                        {tx.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium text-right text-gray-900 dark:text-white">
                      +${tx.amount.toFixed(2)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                    No transactions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

interface FinanceCardProps {
  label: string;
  value: string;
  subtext: string;
  icon: React.ElementType;
  color: 'green' | 'red' | 'blue';
}

function FinanceCard({ label, value, subtext, icon: Icon, color }: FinanceCardProps) {
  const colorClasses = {
    green: 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400',
    red: 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400',
    blue: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
  };

  return (
    <div className="p-6 bg-white border border-gray-200 shadow-sm dark:bg-gray-900 rounded-xl dark:border-gray-800">
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-lg ${colorClasses[color as keyof typeof colorClasses]}`}>
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
