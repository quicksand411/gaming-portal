import { useState } from 'react';
import { Gamepad2, Search, Bell, Shield, ChevronDown, Menu, X, Sparkles, Terminal } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { name: 'DISCOVER', href: '#featured' },
    { name: 'GAMES MATRIX', href: '#games' },
    { name: 'LEADERBOARD', href: '#leaderboard' },
    { name: 'TRANSMISSIONS', href: '#transmissions' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-cyan-500/20 bg-[#07090e]/80 backdrop-blur-xl transition-all">
      {/* Top micro status bar */}
      <div className="hidden md:flex justify-between items-center px-6 py-1 bg-cyan-950/20 border-b border-cyan-500/10 text-[11px] font-mono tracking-widest text-cyan-400/80">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            SYS STATUS: OPTIMAL
          </span>
          <span>//</span>
          <span>PROTOCOL: V9.4-QUANTUM</span>
          <span>//</span>
          <span>ENCRYPTION: 4096-BIT SHA</span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span className="text-cyan-400">NODE: TOKYO-03</span>
          <span>|</span>
          <span>PING: 14ms</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/40 group-hover:border-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
              <Gamepad2 className="w-7 h-7 text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 transition-transform" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full blur-[2px] animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-['Orbitron'] text-xl sm:text-2xl font-black tracking-wider bg-gradient-to-r from-cyan-400 via-sky-200 to-purple-400 bg-clip-text text-transparent group-hover:brightness-125 transition-all">
                NEXUS<span className="text-cyan-400 ml-1.5 text-glow-cyan">PORTAL</span>
              </span>
              <span className="text-[10px] font-mono tracking-[0.25em] text-cyan-500/70 uppercase">
                Sci-Fi Gaming Matrix
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 font-['Rajdhani'] font-semibold text-sm tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-4/5 transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Search bar & User controls */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search Input */}
            <div className="relative w-60 lg:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400/60" />
              <input
                type="text"
                placeholder="Search games, sectors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-12 py-2 bg-slate-900/80 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/40 transition-all font-sans"
              />
              <div className="absolute right-2.5 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] font-mono text-slate-400">
                ⌘K
              </div>
            </div>

            {/* Notifications */}
            <button 
              title="Notifications"
              className="relative p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-400 transition-all"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.9)]"></span>
            </button>

            {/* User Profile Badge */}
            <div className="flex items-center gap-3 pl-2 border-l border-slate-800">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-purple-600 to-pink-500 p-[1.5px]">
                  <div className="w-full h-full rounded-[10px] bg-[#07090e] flex items-center justify-center overflow-hidden">
                    <Terminal className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-[#07090e] rounded-full"></div>
              </div>
              <div className="hidden xl:flex flex-col">
                <span className="text-xs font-['Orbitron'] font-semibold text-slate-200">KRONOS-7</span>
                <span className="text-[10px] font-mono text-cyan-400">LVL. 84 NETRUNNER</span>
              </div>
            </div>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-cyan-500/20 bg-[#0a0d14]/95 backdrop-blur-2xl px-6 py-6 space-y-4">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400/60" />
            <input
              type="text"
              placeholder="Search games, sectors..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500"
            />
          </div>

          <div className="flex flex-col space-y-2 font-['Rajdhani'] font-semibold text-base">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 p-[1.5px]">
                <div className="w-full h-full rounded-[10px] bg-[#07090e] flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div>
                <div className="text-xs font-['Orbitron'] font-semibold text-slate-200">KRONOS-7</div>
                <div className="text-[10px] font-mono text-cyan-400">LVL. 84 NETRUNNER</div>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-400">ONLINE</span>
          </div>
        </div>
      )}
    </header>
  );
}
