import { Play, Zap, ShieldCheck, Activity, Radio, Cpu, Sparkles, ChevronRight } from 'lucide-react';
import { HERO_FEATURED } from '../data/games';

export default function HeroSection() {
  return (
    <section id="featured" className="relative pt-8 pb-16 lg:py-24 overflow-hidden">
      {/* Background Cyber Glow & Radial Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[350px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none -z-10"></div>
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Card with sci-fi frame */}
        <div className="relative rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-slate-900/90 via-[#0a0d17]/90 to-[#07090e]/95 p-6 sm:p-10 lg:p-14 backdrop-blur-2xl shadow-[0_0_50px_rgba(6,182,212,0.12)] overflow-hidden">
          
          {/* Cybernetic decorative corner markers */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-400"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-400"></div>

          {/* Background image overlay with high-tech blend */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-luminosity pointer-events-none transition-transform duration-1000 scale-105"
            style={{ backgroundImage: `url(${HERO_FEATURED.bgImage})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#07090e] via-[#07090e]/80 to-transparent pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl space-y-6">
            {/* Holographic Broadcast Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono tracking-widest backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <Radio className="w-3.5 h-3.5 text-cyan-400" />
              <span>{HERO_FEATURED.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Orbitron'] tracking-wide text-white leading-tight uppercase">
              NEXT-GEN IMMERSION // <br />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-200 to-purple-400 bg-clip-text text-transparent text-glow-cyan">
                ENTER THE MATRIX
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg font-sans leading-relaxed max-w-2xl">
              Access the ultimate nexus of sci-fi universes. Play triple-A futuristic titles, synchronize neural saves across quantum nodes, and squad up with netrunners across the globe.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#games"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-['Orbitron'] font-bold text-sm tracking-wider uppercase rounded-xl transition-all duration-300 glow-cyan shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.7)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <Zap className="w-5 h-5 fill-current" />
                <span>INITIALIZE NEURAL LINK</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                type="button"
                onClick={() => alert("Transmitting Nexus Holo-Stream...")}
                className="inline-flex items-center gap-3 px-6 py-4 bg-slate-900/80 hover:bg-slate-800/80 text-cyan-300 font-['Rajdhani'] font-bold text-base tracking-wider uppercase border border-cyan-500/30 hover:border-cyan-400/80 rounded-xl backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
              >
                <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400 ml-0.5" />
                </div>
                <span>HOLOPLAY TRAILER</span>
              </button>
            </div>

            {/* Telemetry Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 font-mono">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-cyan-400 text-xs">
                  <Activity className="w-4 h-4" />
                  <span>ONLINE USERS</span>
                </div>
                <div className="text-xl sm:text-2xl font-bold font-['Orbitron'] text-white">
                  {HERO_FEATURED.totalUsers}
                </div>
                <div className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  +18.4% Peak Load
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-purple-400 text-xs">
                  <Cpu className="w-4 h-4" />
                  <span>QUANTUM SERVERS</span>
                </div>
                <div className="text-xl sm:text-2xl font-bold font-['Orbitron'] text-white">
                  {HERO_FEATURED.activeServers}
                </div>
                <div className="text-[11px] text-slate-400">
                  99.98% Synchronized
                </div>
              </div>

              <div className="space-y-1 col-span-2 sm:col-span-1">
                <div className="flex items-center gap-2 text-pink-400 text-xs">
                  <ShieldCheck className="w-4 h-4" />
                  <span>LATENCY</span>
                </div>
                <div className="text-xl sm:text-2xl font-bold font-['Orbitron'] text-white">
                  {HERO_FEATURED.ping}
                </div>
                <div className="text-[11px] text-cyan-400">
                  Direct Subsea Fiber
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
