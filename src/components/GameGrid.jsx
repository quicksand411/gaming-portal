import { useState, useMemo } from 'react';
import GameCard from './GameCard';
import { GAMES_DATA, CATEGORIES } from '../data/games';
import { Filter, Layers, Flame, Search, CheckCircle2, X } from 'lucide-react';

export default function GameGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchFilter, setSearchFilter] = useState('');
  const [activeModalGame, setActiveModalGame] = useState(null);

  const filteredGames = useMemo(() => {
    return GAMES_DATA.filter((game) => {
      const matchesCat = selectedCategory === 'all' || game.category === selectedCategory;
      const matchesSearch = 
        game.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
        game.genre.toLowerCase().includes(searchFilter.toLowerCase()) ||
        game.tags.some(t => t.toLowerCase().includes(searchFilter.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchFilter]);

  return (
    <section id="games" className="py-16 relative">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-widest uppercase">
              <Layers className="w-4 h-4" />
              <span>QUANTUM REPOSITORY // SECTOR 04</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-['Orbitron'] text-white tracking-wide">
              FEATURED <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">TITLES</span>
            </h2>
            <p className="text-sm text-slate-400 font-sans max-w-xl">
              High-fidelity neural combat simulations, space operas, and cyberpunk dystopias ready for instant deployment.
            </p>
          </div>

          {/* Quick Filter Search */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Filter by title or tag..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-900/90 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto py-6 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl font-['Rajdhani'] font-bold text-sm tracking-wider uppercase whitespace-nowrap transition-all duration-300 border ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Game Cards Grid */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredGames.map((game) => (
              <GameCard 
                key={game.id} 
                game={game} 
                onSelect={(selected) => setActiveModalGame(selected)} 
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center rounded-2xl border border-dashed border-slate-800 bg-slate-900/30">
            <p className="font-['Orbitron'] text-slate-400 text-lg">NO QUANTUM ENTRIES DETECTED</p>
            <p className="text-xs font-mono text-slate-500 mt-1">Try refining your sector query or search filters</p>
          </div>
        )}

      </div>

      {/* Interactive Launch Modal */}
      {activeModalGame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#0a0d17] border border-cyan-500/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(6,182,212,0.3)] overflow-hidden">
            {/* Modal close */}
            <button 
              onClick={() => setActiveModalGame(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-cyan-400 font-mono text-xs mb-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>NEURAL LINK ESTABLISHED // READY FOR LAUNCH</span>
            </div>

            <h3 className="text-2xl font-['Orbitron'] font-bold text-white mb-2">
              {activeModalGame.title}
            </h3>
            
            <p className="text-xs font-mono text-purple-400 mb-4">
              STATUS: {activeModalGame.status} | PROTOCOL: QUANTUM SYNC
            </p>

            <div className="rounded-xl overflow-hidden mb-6 h-48 border border-slate-800">
              <img 
                src={activeModalGame.coverImage} 
                alt={activeModalGame.title} 
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              {activeModalGame.description}
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => {
                  alert(`Connecting to ${activeModalGame.title} quantum server... Enjoy your session!`);
                  setActiveModalGame(null);
                }}
                className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-['Orbitron'] font-bold text-sm tracking-wider uppercase text-slate-950 glow-cyan shadow-[0_0_25px_rgba(6,182,212,0.5)]"
              >
                DEPLOY SESSION NOW
              </button>
              <button
                onClick={() => setActiveModalGame(null)}
                className="px-5 py-3.5 rounded-xl bg-slate-900 border border-slate-800 font-['Rajdhani'] font-bold text-slate-400 hover:text-white text-sm"
              >
                DISMISS
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
