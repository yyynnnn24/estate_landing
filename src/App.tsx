import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Highlights from '@/components/Highlights';
import Speakers from '@/components/Speakers';
import Programme from '@/components/Programme';
import RegisterCTA from '@/components/RegisterCTA';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg-base font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Highlights />
        <Speakers />
        <Programme />
        <RegisterCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
