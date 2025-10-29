import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-fuchsia-500 to-indigo-500 text-white shadow-md">
              <Sparkles size={18} />
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-800">GlowUp Salon</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a className="hover:text-slate-900" href="#services">Services</a>
            <a className="hover:text-slate-900" href="#pricing">Pricing</a>
            <a className="hover:text-slate-900" href="#contact">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Login</button>
            <button className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-slate-800">Book Now</button>
          </div>

          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-200/60 py-4">
            <div className="flex flex-col gap-3 text-slate-700">
              <a onClick={() => setOpen(false)} className="hover:text-slate-900" href="#services">Services</a>
              <a onClick={() => setOpen(false)} className="hover:text-slate-900" href="#pricing">Pricing</a>
              <a onClick={() => setOpen(false)} className="hover:text-slate-900" href="#contact">Contact</a>
              <div className="mt-2 flex items-center gap-3">
                <button className="flex-1 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Login</button>
                <button className="flex-1 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-slate-800">Book</button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
