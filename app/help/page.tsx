import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

export default function Help() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-between fancy-overlay">
      <Header />

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">
          <h1 className="text-4xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-6xl fancy-heading">
            How Can We Help You Manage Your Tutoring?
          </h1>

          <p className="mt-6 md:text-xl">
            Welcome to TutorMate's Help Center! We're here to assist you in making
            the most of your teaching business. Whether you're new to our
            platform or looking to optimize your workflow, you've come to the
            right place.
          </p>

          <p className="mt-6 md:text-xl">
            Managing your students has never been easier. With TutorMate, you can
            effortlessly track lessons, manage payments, and monitor progress—all from a simple, easy-to-use app. Our goal is to provide a
            straightforward way to handle your administration so you can focus
            on teaching.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
