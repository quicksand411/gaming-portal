import { Star, Users, Flame, ExternalLink, Play, Sparkles } from 'lucide-react';

export default function GameCard({ game, onSelect }) {
  const accentBorderMap = {
    cyan: 'hover:border-cyan-400 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]',
    purple: 'hover:border-purple-400 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]',
    emerald: 'hover:border-emerald-400 group-hover:shadow-[0_0_30px_rgba(52,211,153,0.3)]',
    rose: 'hover:border-rose-400 group-hover:shadow-[0_0_30px_rgba(251,113,133,0.3)]',
    amber: 'hover:border-amber-400 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]',
  };

  const badgeColorMap = {
    cyan: 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40',
    purple: 'bg-purple-950/80 text-purple-300 border-purple-500/40',
    emerald: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40',
    rose: 'bg-rose-950/80 text-rose-300 border-rose-500/40',
    amber: 'bg-amber-950/80 text-amber-300 border-amber-500/40',
  };

  const accentBorder = accentBorderMap[game.accentColor] || accentBorderMap.cyan;
  const badgeColor = badgeColorMap[game.accentColor] || badgeColorMap.cyan;

  return (
    <div 
      className={`group relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#07090e]/95 border border-slate-800 transition-all duration-500 hover:-translate-y-2 overflow-hidden ${accentBorder}`}
    >
      {/* Top Corner Cyber Accent */}
      <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden pointer-events-none z-20">
        <div className="absolute transform rotate-45 bg-cyan-500/20 text-[9px] font-mono text-cyan-300 py-0.5 right-[-35px] top-[18px] w-[120px] text-center border-t border-b border-cyan-500/40 shadow-sm">
          {game.releaseYear}
        </div>
      </div>

      <div>
        {/* Cover Image Container */}
        <div className="relative h-56 w-full overflow-hidden">
          <img
            src={game.coverImage}
            alt={game.title}
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/40 to-transparent"></div>

          {/* Top Badges */}
          <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2 z-10">
            <span className={`px-2.5 py-1 rounded-md text-[11px] font-['Orbitron'] font-bold border backdrop-blur-md ${badgeColor}`}>
              {game.badge}
            </span>
          </div>

          {/* Bottom Overlay Info (Genre & Active Players) */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300 z-10">
            <span className="text-cyan-400 font-semibold">{game.genre}</span>
            <div className="flex items-center gap-1.5 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700/60">
              <Users className="w-3.5 h-3.5 text-cyan-400" />
              <span>{game.activePlayers}</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 space-y-4">
          {/* Title & Rating */}
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold font-['Orbitron'] text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
                {game.title}
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-0.5">
                DEV: {game.developer}
              </p>
            </div>
            
            {/* Rating badge */}
            <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-amber-300 text-xs font-mono font-bold shrink-0">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{game.rating}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed font-sans">
            {game.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {game.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700/50 text-[11px] font-mono text-slate-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-5 pt-0">
        <button
          type="button"
          onClick={() => onSelect(game)}
          className="w-full py-3 px-4 rounded-xl bg-slate-800/80 hover:bg-cyan-500 text-slate-200 hover:text-slate-950 border border-cyan-500/30 hover:border-cyan-400 font-['Orbitron'] font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group-hover:glow-cyan shadow-sm"
        >
          <Play className="w-4 h-4 fill-current transition-transform group-hover:scale-110" />
          <span>INITIALIZE PLAY</span>
        </button>
      </div>
    </div>
  );
}
