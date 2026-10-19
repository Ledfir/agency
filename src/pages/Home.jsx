import Navbar from '@/components/site/Navbar';
import Hero from '@/components/site/Hero';
import Marquee from '@/components/site/Marquee';
import Services from '@/components/site/Services';
import Portfolio from '@/components/site/Portfolio';
import Process from '@/components/site/Process';
import Contact from '@/components/site/Contact';
import Footer from '@/components/site/Footer';
import WhatsAppButton from '@/components/site/WhatsAppButton';

export default function Home() {
  return (
    <div className="relative bg-background">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Portfolio />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}