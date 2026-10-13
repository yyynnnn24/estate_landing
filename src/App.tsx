// import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import IntroPartners from '@/components/IntroPartners';
import Highlights from '@/components/Highlights';
import Speakers from '@/components/Speakers';
import Programme from '@/components/Programme';
import Registration from '@/components/Registration';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f4efe6] text-[#0f2b5b] antialiased">
      <main>
        <Hero />
        <IntroPartners />
        <Highlights />
        <Speakers />
        <Programme />
        <Registration />
      </main>
      <Footer />
    </div>
  );
}

export default App;
