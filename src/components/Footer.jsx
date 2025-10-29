export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} GlowUp Salon. All rights reserved.</p>
          <nav className="flex items-center gap-5 text-sm text-slate-600">
            <a className="hover:text-slate-900" href="#privacy">Privacy</a>
            <a className="hover:text-slate-900" href="#terms">Terms</a>
            <a className="hover:text-slate-900" href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
