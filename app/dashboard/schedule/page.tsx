'use client';

import { MOCK_STUDENTS } from '@/data/tutor-data';
import { Lesson } from '@/types/tutor';
import { CalendarIcon, ClockIcon, PlusIcon, CheckCircleIcon, AlertCircleIcon } from 'lucide-react';
import { format, parseISO, isAfter, isBefore } from 'date-fns';

export default function SchedulePage() {
  // Flatten and sort lessons
  const allLessons = MOCK_STUDENTS.flatMap((student) =>
    student.lessons.map((lesson) => ({
      ...lesson,
      studentName: student.name,
      studentGrade: student.grade,
    }))
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const upcomingLessons = allLessons.filter((l) => isAfter(parseISO(l.date), new Date()));
  const pastLessons = allLessons.filter((l) => isBefore(parseISO(l.date), new Date()));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Class Schedule</h2>
        <button className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium text-white transition-colors rounded-lg bg-primary-600 hover:bg-primary-700 sm:w-auto">
          <PlusIcon className="w-4 h-4" />
          Schedule Lesson
        </button>
      </div>

      {/* Upcoming Lessons */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">Upcoming Classes</h3>
        {upcomingLessons.length > 0 ? (
          <div className="grid gap-4">
            {upcomingLessons.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} isUpcoming={true} />
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-gray-500 bg-white border border-gray-200 dark:bg-gray-900 rounded-xl dark:border-gray-800">
            No upcoming lessons scheduled.
          </div>
        )}
      </div>

      {/* Past Lessons */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">Past Classes</h3>
        <div className="grid gap-4">
          {pastLessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} isUpcoming={false} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface LessonCardProps {
  lesson: Lesson & { studentName: string; studentGrade: string };
  isUpcoming: boolean;
}

function LessonCard({ lesson, isUpcoming }: LessonCardProps) {
  return (
    <div className="flex flex-col items-start justify-between gap-4 p-4 transition-shadow bg-white border border-gray-200 shadow-sm dark:bg-gray-900 rounded-xl dark:border-gray-800 hover:shadow-md sm:flex-row sm:items-center">
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-lg ${isUpcoming ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400' : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400'}`}>
          <CalendarIcon className="w-6 h-6" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-gray-900 dark:text-white">{lesson.subject}</h4>
            <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
              {lesson.studentGrade}
            </span>
          </div>
          <p className="mb-1 text-sm text-gray-600 dark:text-gray-300">
            Topic: <span className="font-medium">{lesson.topic}</span>
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <ClockIcon className="w-3 h-3" />
              {lesson.durationMinutes} mins
            </span>
            <span>•</span>
            <span>Student: {lesson.studentName}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end w-full gap-2 sm:w-auto">
        <div className="text-sm font-medium text-gray-900 dark:text-white">
          {format(parseISO(lesson.date), 'EEEE, MMM d, yyyy')}
        </div>
        {lesson.needsReinforcement && (
          <div className="flex items-center gap-1 px-2 py-1 text-xs rounded text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20">
            <AlertCircleIcon className="w-3 h-3" />
            Needs Reinforcement
          </div>
        )}
        {!isUpcoming && !lesson.needsReinforcement && (
           <div className="flex items-center gap-1 px-2 py-1 text-xs text-green-600 rounded dark:text-green-400 bg-green-50 dark:bg-green-900/20">
           <CheckCircleIcon className="w-3 h-3" />
           Completed
         </div>
        )}
      </div>
    </div>
  );
}
