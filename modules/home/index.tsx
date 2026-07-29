import Footer from '@/components/footer';
import Header from '@/components/header';
import { Home } from '@/components/home';

export default function HomeModule() {
  return (
    <main className="home-module font-inter">
      <Header />
      <Home />
      <Footer />
    </main>
  );
}
