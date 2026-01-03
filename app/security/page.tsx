import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';

export default function Security() {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-between fancy-overlay">
      <Header />

      <div className="w-full flex flex-col items-center my-12">
        <section className="w-full p-6 container-narrow">
          <h1 className="text-4xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-6xl fancy-heading">
            Your Data Security is Our Priority
          </h1>

          <p className="mt-6 md:text-xl">
            At TutorMate, we understand that managing student data requires
            trust. That’s why we employ industry-leading security measures to
            protect your personal information and student records. From encrypted
            databases to secure backups, your safety is our top concern.
          </p>

          <p className="mt-6 md:text-xl">
            Our platform is designed with privacy in mind, ensuring that
            your lesson plans and student details are always safeguarded. Focus on teaching
            and growing your business with
            confidence—knowing that security is built into every detail of our
            service.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
