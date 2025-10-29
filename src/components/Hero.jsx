import Spline from '@splinetool/react-spline';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-20 lg:px-8">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-600 shadow-sm">
            <ShieldCheck size={14} className="text-emerald-600" />
            Secure bookings, payments, and chat
          </div>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Salon & Skincare Management, reimagined
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
            Manage services, staff, bookings, and real-time customer chat in one modern platform. Stripe payments, email automation, and analytics included.
          </p>

          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row">
            <a href="#booking" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow hover:bg-slate-800">
              Book an appointment
              <ArrowRight className="ml-2" size={16} />
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
              Explore Features
            </a>
          </div>

          <p className="mt-6 text-xs text-slate-500">Powered by Stripe, Nodemailer, JWT, and Socket.io</p>
        </div>

        <div className="relative h-[420px] w-full rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white shadow-sm lg:h-[520px]">
          <Spline
            scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-white/40 via-transparent to-white/10" />
        </div>
      </div>
    </section>
  );
}
