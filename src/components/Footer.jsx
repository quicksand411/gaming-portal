import { Gamepad2, Globe, Radio, Shield, Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-[#05070a] pt-12 pb-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/60">
          {/* Brand */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-400">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <span className="font-['Orbitron'] text-lg font-bold tracking-wider text-white">
                NEXUS<span className="text-cyan-400">PORTAL</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 font-sans max-w-sm leading-relaxed">
              Decentralized sci-fi gaming gateway. Built for high-frequency neural rendering, cross-platform cloud synchronization, and competitive matrix tournaments.
            </p>
            <div className="flex items-center gap-3 pt-1 text-slate-400">
              <span className="text-[11px] font-mono text-cyan-400/80 bg-cyan-950/40 px-2.5 py-1 rounded border border-cyan-500/20">
                SYSTEM VER: 2026.4-STABLE
              </span>
            </div>
          </div>

          {/* Sectors */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-cyan-400 font-bold uppercase tracking-wider font-['Orbitron']">
              SECTORS
            </div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#games" className="hover:text-cyan-300 transition-colors">// Cyberpunk Worlds</a></li>
              <li><a href="#games" className="hover:text-cyan-300 transition-colors">// Space Armada</a></li>
              <li><a href="#games" className="hover:text-cyan-300 transition-colors">// Tactical Mecha</a></li>
              <li><a href="#games" className="hover:text-cyan-300 transition-colors">// Neural Esports</a></li>
            </ul>
          </div>

          {/* Security & Protocol */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-purple-400 font-bold uppercase tracking-wider font-['Orbitron']">
              PROTOCOL
            </div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-purple-300 transition-colors">// Quantum Encryption</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">// Anti-Cheat Matrix</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">// Neural Privacy Act</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">// Node Diagnostics</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 NEXUS PORTAL CORP. ALL RIGHTS RESERVED. OPERATING ON NEURAL LINK V4.
          </div>
          <div className="flex items-center gap-4 text-cyan-500/80">
            <span>PING 11MS</span>
            <span>•</span>
            <span>SHANGHAI // TOKYO // FRANKFURT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
