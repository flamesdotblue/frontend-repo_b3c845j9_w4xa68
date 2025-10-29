import { BarChart3, MessageCircle, BadgePercent, CreditCard } from 'lucide-react';

const features = [
  {
    icon: CreditCard,
    title: 'Stripe Payments',
    desc: 'Accept one-time bookings, refunds, and subscriptions with secure checkout.'
  },
  {
    icon: MessageCircle,
    title: 'Real-time Chat',
    desc: 'Instant messaging between customers and admins via Socket.io.'
  },
  {
    icon: BadgePercent,
    title: 'Dynamic Pricing',
    desc: 'Create natural-language rules to run promos and seasonal discounts.'
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    desc: 'Track bookings, revenue, and loyalty tiers with clear visual insights.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Everything you need to run your salon</h2>
          <p className="mt-3 text-slate-600">Built for speed, security, and growth — from bookings to referrals.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-white shadow-sm">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
