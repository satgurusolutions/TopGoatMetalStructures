import {
  Blogs,
  CategoryOptions,
  ConcreteSection,
  Designer,
  Finance,
  HeroSection,
  InfiniteTicker,
  NeedToTalk,
  Process,
  Projects,
  Review,
  VideoGallery,
} from '@/components/home';

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#0a0a0b] text-white">
      <HeroSection />

      <InfiniteTicker />

      <section className="py-20 lg:py-28">
        <CategoryOptions />
      </section>

      <section className="py-20 lg:py-28">
        <Designer />
      </section>

      <section className="py-20 lg:py-28">
        <Projects />
      </section>

      <section className="py-20 lg:py-28">
        <Finance />
      </section>

      <section className="py-20 lg:py-28">
        <ConcreteSection />
      </section>

      <section className="py-20 lg:py-28">
        <Review />
      </section>

      <section className="py-20 lg:py-28">
        <VideoGallery />
      </section>

      <section className="py-20 lg:py-28">
        <NeedToTalk />
      </section>

      <section className="py-20 lg:py-28">
        <Process />
      </section>

      <section className="py-20 lg:py-28">
        <Blogs />
      </section>
    </main>
  );
}
