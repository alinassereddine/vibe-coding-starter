import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

export default function Features() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-between fancy-overlay">
      <Header />

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">
          <h1 className="text-4xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-6xl fancy-heading">
            Powerful Features to Simplify Your Tutoring Business
          </h1>

          <p className="mt-6 md:text-xl">
            Discover how TutorMate makes managing your students and lessons effortless. From
            scheduling classes to tracking payments, our features are designed to
            help you stay in control of your teaching business with ease.
          </p>

          <p className="mt-6 md:text-xl">
            Whether you're planning lessons or communicating with parents, our
            platform offers a seamless and secure experience. Sign up for free
            today and start simplifying your teaching journey.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
