const tiers = [
  {
    name: 'Free',
    price: '$0',
    perks: ['1 workspace', 'AI board (lite)', 'Community support'],
    cta: { label: 'Start for free', href: '/signup' },
    coming: false,
  },
  {
    name: 'Growth',
    price: '$49 /mo',
    perks: ['Unlimited workspaces', '3 advisors', 'Slack integration'],
    cta: { label: 'Coming soon', href: '#' },
    coming: true,
  },
  {
    name: 'Pro',
    price: '$199 /mo',
    perks: ['Everything in Growth', 'Custom insights', 'Priority support'],
    cta: { label: 'Coming soon', href: '#' },
    coming: true,
  },
];

export default function PricingTeaser() {
  return (
    <section className="py-24 bg-oracle-gray">
      <h2 className="text-center font-display text-4xl md:text-5xl mb-16 text-oracle-navy">
        Simple, transparent pricing
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {tiers.map((t) => (
          <div key={t.name} className="bg-white rounded-xl shadow p-8 flex flex-col">
            <h3 className="text-xl font-semibold text-oracle-navy mb-4">{t.name}</h3>
            <p className="text-3xl font-bold text-oracle-navy mb-6">{t.price}</p>
            <ul className="space-y-2 text-oracle-navy/80 flex-1">
              {t.perks.map((perk) => (
                <li key={perk}>• {perk}</li>
              ))}
            </ul>
            <a
              href={t.cta.href}
              className={`mt-8 block text-center font-medium py-3 rounded-lg ${
                t.coming
                  ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                  : 'bg-oracle-gold text-oracle-navy hover:bg-oracle-gold/90'
              }`}
            >
              {t.cta.label}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
