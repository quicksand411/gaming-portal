import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import GameGrid from './components/GameGrid';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black">
      {/* Header / Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section Banner */}
        <HeroSection />

        {/* Game Grid with mock data */}
        <GameGrid />
      </main>

      {/* Sci-Fi Footer */}
      <Footer />
    </div>
  );
}
