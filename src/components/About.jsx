import { about } from '../data/content';
import { SectionLabel } from './SectionLabel';
import { Reveal } from './Reveal';

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-28 lg:px-10">
      <SectionLabel index="01">Profile</SectionLabel>

      <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="space-y-6">
            {about.body.map((para, i) => (
              <p
                key={i}
                className={`leading-relaxed ${
                  i === 0 ? 'text-xl text-ash-100 md:text-2xl' : 'text-ash-300'
                }`}
              >
                {para}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-ink-600/70 bg-ink-600/40 lg:grid-cols-1">
            {about.stats.map((s) => (
              <div key={s.label} className="bg-ink-900 p-6">
                <div className="font-display text-4xl font-semibold text-ember">{s.value}</div>
                <div className="mono-label mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
