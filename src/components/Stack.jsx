import { stack } from '../data/content';
import { SectionLabel } from './SectionLabel';
import { Reveal } from './Reveal';

export function Stack() {
  return (
    <section id="stack" className="relative mx-auto max-w-6xl px-6 py-28 lg:px-10">
      <SectionLabel index="04">Stack</SectionLabel>

      <div className="grid gap-5 md:grid-cols-2">
        {stack.map((s, i) => (
          <Reveal key={s.group} delay={i * 0.08}>
            <div
              className={`h-full rounded-xl border p-7 ${
                s.tag === 'roots'
                  ? 'border-ink-600/60 bg-transparent'
                  : 'border-ink-600/70 bg-ink-850/50'
              }`}
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-display text-xl font-medium text-ash-100">{s.group}</h3>
                <span
                  className={`font-mono text-[0.6rem] uppercase tracking-[0.2em] ${
                    s.tag === 'roots' ? 'text-ash-400' : 'text-ember'
                  }`}
                >
                  {s.tag === 'roots' ? '◦ foundations' : '● current'}
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-md border border-ink-600/70 bg-ink-900 px-3 py-1.5 font-mono text-xs text-ash-200"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
