import { ShieldCheck, Lock, CheckCircle } from 'lucide-react';

const items = [
  { icon: ShieldCheck, label: 'SOC 2' },
  { icon: Lock, label: 'GDPR-ready' },
  { icon: CheckCircle, label: '2-factor auth' },
];

export default function TrustBar() {
  return (
    <section className="py-12 bg-oracle-cream border-t border-oracle-beige/30">
      <div className="flex justify-center gap-12">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 text-oracle-navy/80">
            <Icon className="h-6 w-6 text-oracle-gold" />
            <span className="font-medium">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
