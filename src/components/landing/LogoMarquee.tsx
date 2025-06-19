
'use client';

import { useEffect, useRef } from 'react';

const logos = [
  '/images/logos/slack.svg',
  '/images/logos/hubspot.svg',
  '/images/logos/shopify.svg',
  '/images/logos/intercom.svg',
];

export default function LogoMarquee() {
  const track = useRef<HTMLDivElement>(null);
  const doubled = [...logos, ...logos]; // seamless loop

  useEffect(() => {
    if (!track.current) return;
    const anim = track.current.animate(
      [{ transform: 'translateX(0)' }, { transform: 'translateX(-50%)' }],
      { duration: 70000, iterations: Infinity, easing: 'linear' },
    );
    return () => anim.cancel();
  }, []);

  return (
    <section className="py-12 bg-oracle-cream">
      <h3 className="text-center font-semibold text-oracle-navy mb-8">
        World-class teams trust Oracle AI
      </h3>

      <div className="overflow-hidden">
        <div ref={track} className="flex gap-16 whitespace-nowrap">
          {doubled.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              width={120}
              height={40}
              className="opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
