import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Features from '../src/components/Features';
import Preview from '../src/components/Preview';
import Download from '../src/components/Download';
import Footer from '../src/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <Preview />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
