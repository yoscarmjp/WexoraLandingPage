import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Features from '../src/components/Features';
import Preview from '../src/components/Preview';
import Download from '../src/components/Download';
import Footer from '../src/components/Footer';
import CountdownTimer from '../src/components/CountdownTimer';
import { CountdownProvider } from '../src/contexts/CountdownContext';

function App() {
  return (
    <CountdownProvider>
      <div className="min-h-screen bg-slate-950">
        <Navbar />
        <CountdownTimer />
        <Hero />
        <Features />
        <Preview />
        <Download />
        <Footer />
      </div>
    </CountdownProvider>
  );
}

export default App;
