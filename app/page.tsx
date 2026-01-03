// @ts-nocheck

import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { LandingHeaderMenuItem } from '@/components/landing';
import { LandingPrimaryImageCtaSection } from '@/components/landing';
import { LandingSocialProof } from '@/components/landing';
import { LandingFeatureList } from '@/components/landing';
import { LandingProductSteps } from '@/components/landing';
import { LandingProductFeature } from '@/components/landing';
import { LandingTestimonialReadMoreWrapper } from '@/components/landing';
import { LandingTestimonialGrid } from '@/components/landing';
import { LandingSaleCtaSection } from '@/components/landing';
import { LandingFaqCollapsibleSection } from '@/components/landing';
import { LandingFooter } from '@/components/landing';
import { LandingFooterColumn } from '@/components/landing';
import { LandingFooterLink } from '@/components/landing';
import Image from 'next/image';
import { Button } from '@/components/shared/ui/button';
import Link from 'next/link';
import { Calendar, CreditCard, GraduationCap, LineChart, Users, Shield } from 'lucide-react';

export default function Page() {
  return (
    <>
      <Header className="mb-4" />

      <LandingPrimaryImageCtaSection
        title="Manage Your Private Tutoring Business with Ease"
        description="Track students, plan lessons, monitor progress, and manage payments. Everything a private teacher needs in one dashboard."
        imageSrc="/static/images/1.jpg"
        imageAlt="Tutor Dashboard Preview"
        imagePosition="right"
        imageShadow="hard"
        textPosition="left"
        withBackground={false}
        variant="primary"
        minHeight={350}
      >
        <Button size="xl" asChild>
          <Link href="/dashboard">Go to Dashboard</Link>
        </Button>
        <Button size="xl" variant="outlinePrimary" asChild>
          <Link href="/pricing">View Plans</Link>
        </Button>
        <LandingSocialProof
          className="mt-6 w-full"
          avatarItems={[
            {
              imageSrc: '/static/images/people/1.webp',
              name: 'Sarah Johnson',
            },
            {
              imageSrc: '/static/images/people/2.webp',
              name: 'Michael Chen',
            },
            {
              imageSrc: '/static/images/people/3.webp',
              name: 'Emily Rodriguez',
            },
          ]}
          numberOfUsers={1100}
          suffixText="happy tutors"
        />
      </LandingPrimaryImageCtaSection>

      <div className="container-wide p-12 w-full flex flex-wrap items-center justify-center gap-6 dark:invert">
        <span className="w-full text-center text-sm opacity-70 dark:invert">
          Trusted by educators from
        </span>
        <div className="flex gap-8 opacity-50 grayscale items-center justify-center flex-wrap">
           <span className="text-xl font-bold">Udemy</span>
           <span className="text-xl font-bold">Coursera</span>
           <span className="text-xl font-bold">Skillshare</span>
           <span className="text-xl font-bold">Khan Academy</span>
        </div>
      </div>

      <LandingFeatureList
        id="features"
        title="Everything you need to manage your students"
        description="Simple, powerful tools to help you focus on teaching, not administration."
        featureItems={[
          {
            title: 'Student Management',
            description:
              'Keep all student details, contacts, and notes in one organized place. Never lose track of a parent\'s phone number again.',
            icon: <Users className="w-8 h-8" />,
          },
          {
            title: 'Smart Scheduling',
            description:
              'Plan lessons effortlessly. Avoid conflicts and keep your calendar organized with our intuitive scheduling tools.',
            icon: <Calendar className="w-8 h-8" />,
          },
          {
            title: 'Finance Tracking',
            description:
              'Track payments, outstanding balances, and revenue. Know exactly who has paid and who owes you money.',
            icon: <CreditCard className="w-8 h-8" />,
          },
          {
            title: 'Progress Monitoring',
            description:
              'Record lesson notes and track student progress over time. Share updates with parents easily.',
            icon: <LineChart className="w-8 h-8" />,
          },
          {
            title: 'Lesson Planning',
            description:
              'Create and store lesson plans. Reuse materials and keep your teaching structured and effective.',
            icon: <GraduationCap className="w-8 h-8" />,
          },
          {
            title: 'Secure Data',
            description:
              "Your student data is private and secure. We use industry-standard encryption to protect your information.",
            icon: <Shield className="w-8 h-8" />,
          },
        ]}
        withBackground
        withBackgroundGlow
        variant="primary"
        backgroundGlowVariant="primary"
      />

      <LandingProductSteps
        title="How it Works"
        description="Get started with TutorMate in three simple steps."
        display="grid"
        withBackground={false}
        variant="primary"
      >
        <LandingProductFeature
          title="1. Sign up & Set Profile"
          description="Create your account and set up your tutor profile. Define your subjects and hourly rates."
          imageSrc="/static/images/2.jpg"
          imageAlt="Sign up process"
          imagePosition="center"
          imageShadow="soft"
          zoomOnHover
          minHeight={350}
          withBackground={false}
          withBackgroundGlow={false}
          variant="primary"
          backgroundGlowVariant="primary"
        />
        <LandingProductFeature
          title="2. Add Your Students"
          description="Import or manually add your students. Input their contact details and current learning goals."
          imageSrc="/static/images/3.jpg"
          imageAlt="Add students"
          imagePosition="center"
          imageShadow="soft"
          zoomOnHover
          minHeight={350}
          withBackground={false}
          withBackgroundGlow={false}
          variant="primary"
          backgroundGlowVariant="primary"
        />
        <LandingProductFeature
          title="3. Schedule & Teach"
          description="Schedule lessons, track attendance, and manage payments. Focus on what you do best: teaching."
          imageSrc="/static/images/4.jpg"
          imageAlt="Schedule lessons"
          imagePosition="center"
          imageShadow="soft"
          zoomOnHover
          minHeight={350}
          withBackground={false}
          withBackgroundGlow={false}
          variant="primary"
          backgroundGlowVariant="primary"
        />
      </LandingProductSteps>

      <LandingProductFeature
        id="security"
        title="Focus on Teaching, Not Paperwork"
        descriptionComponent={
          <>
            <p className="mb-6">
              TutorMate handles the boring stuff so you can dedicate more time to your students.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Users className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Centralized Database: </strong>
                  All student info in one secure place.
                </span>
              </li>
              <li className="flex items-start">
                <CreditCard className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Automated Tracking: </strong>
                  Never miss a payment or forget a lesson count.
                </span>
              </li>
              <li className="flex items-start">
                <LineChart className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Performance Insights: </strong>
                  Visualize your business growth and student success.
                </span>
              </li>
            </ul>
          </>
        }
        imageSrc="/static/images/5.jpg"
        imageAlt="Tutor features"
        imagePosition="right"
        imageShadow="hard"
        textPosition="left"
        withBackground
        withBackgroundGlow
        variant="primary"
        backgroundGlowVariant="primary"
        imagePerspective="bottom"
        zoomOnHover
        minHeight={350}
      />

      <LandingTestimonialReadMoreWrapper>
        <LandingTestimonialGrid
          title="Loved by Tutors Everywhere"
          description="See what educators have to say about managing their business with TutorMate."
          testimonialItems={[
            {
              name: 'Sarah Anderson',
              text: 'TutorMate saved me hours of admin work every week. I can finally focus on my students instead of spreadsheets.',
              handle: '@sarah_tutor',
              imageSrc: '/static/images/people/4.webp',
              url: '#',
              verified: true,
            },
            {
              name: 'John Bennett',
              text: "I used to lose track of payments all the time. Since using TutorMate, my finances are perfectly organized.",
              handle: '@math_with_john',
              imageSrc: '/static/images/people/5.webp',
              url: '#',
              verified: true,
            },
            {
              name: 'Maria Garcia',
              text: "The scheduling feature is a lifesaver. It helps me avoid double-booking and keeps my day structured.",
              handle: '@maria_esl',
              imageSrc: '/static/images/people/6.webp',
              url: '#',
            },
            {
              name: 'David Kim',
              text: 'Simple, clean, and effective. Exactly what a private tutor needs.',
              handle: '@david_piano',
              imageSrc: '/static/images/people/7.webp',
              url: '#',
              verified: true,
            },
          ]}
          withBackground={false}
          variant="primary"
        />
      </LandingTestimonialReadMoreWrapper>

      <LandingSaleCtaSection
        id="pricing"
        title="Simple, fair pricing"
        description="Start for free, upgrade as you grow."
        withBackground
        withBackgroundGlow
        variant="primary"
        backgroundGlowVariant="primary"
      >
        <Button size="xl" asChild>
          <Link href="/pricing">See Plans</Link>
        </Button>
      </LandingSaleCtaSection>

      <LandingFaqCollapsibleSection
        id="faq"
        title="Frequently Asked Questions"
        description="Got questions? We've got answers."
        faqItems={[
          {
            question: 'Is TutorMate free to use?',
            answer:
              'Yes! TutorMate offers a free plan for tutors with a small number of students. We also have premium plans for full-time tutors with more advanced needs.',
          },
          {
            question: 'Can I track payments?',
            answer:
              'Absolutely. You can log payments, see outstanding balances, and generate simple reports to keep your finances in check.',
          },
          {
            question: 'Is my student data secure?',
            answer:
              'Your security is our top priority. We use industry-standard encryption to ensure your student data and personal information are safe.',
          },
          {
            question: 'Can I use it on mobile?',
            answer:
              'Yes, TutorMate is fully responsive and works great on smartphones and tablets, so you can manage your schedule on the go.',
          },
        ]}
        withBackground={false}
        withBackgroundGlow={false}
        variant="primary"
        backgroundGlowVariant="primary"
      />

      <LandingSaleCtaSection
        title="Ready to organize your tutoring business?"
        description="Join thousands of tutors who trust TutorMate."
        withBackground
        withBackgroundGlow
        variant="primary"
        backgroundGlowVariant="primary"
      >
        <Button size="xl" asChild>
          <Link href="/login">Get Started Free</Link>
        </Button>
      </LandingSaleCtaSection>

      <Footer className="mt-8" />
    </>
  );
}
