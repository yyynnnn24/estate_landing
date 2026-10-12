// import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import IntroPartners from '@/components/IntroPartners';
import About from '@/components/About';
import Highlights from '@/components/Highlights';
import Speakers from '@/components/Speakers';
import Programme from '@/components/Programme';
import Venue from '@/components/Venue';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f4efe6] text-[#0f2b5b] antialiased">
      <main>
        <Hero />
        <IntroPartners />
        <About />
        <Highlights />
        <Speakers />
        <Programme />
        <Venue />
      </main>
      <Footer />
    </div>
  );
}

export default App;
