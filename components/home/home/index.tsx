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
} from '..';

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#0a0a0b] text-white">
      <HeroSection />
      <InfiniteTicker />
      <CategoryOptions />
      <Designer />
      <Projects />
      <Finance />
      <ConcreteSection />
      <Review />
      <VideoGallery />
      <NeedToTalk />
      <Process />
      <Blogs />
    </main>
  );
}
