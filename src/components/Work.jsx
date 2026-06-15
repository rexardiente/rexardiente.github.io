import { motion } from 'framer-motion';
import { work } from '../data/content';
import { SectionLabel } from './SectionLabel';
import { stagger, item } from './Reveal';

function StatusPill({ status }) {
  const tone =
    status === 'Live'
      ? 'text-ember border-ember/40'
      : status === 'Internal'
        ? 'text-ash-400 border-ink-600'
        : 'text-ash-200 border-ink-600';
  return (
    <span className={`rounded-full border px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.2em] ${tone}`}>
      {status}
    </span>
  );
}

function ProjectCard({ p }) {
  const Wrapper = p.href ? motion.a : motion.div;
  const wrapperProps = p.href
    ? { href: p.href, target: '_blank', rel: 'noreferrer' }
    : {};

  return (
    <Wrapper
      variants={item}
      {...wrapperProps}
      className="card-surface group block p-7 md:p-9"
    >
      {/* corner glow on hover */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-ember/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-sm text-ember">{p.index}</span>
          <div>
            <h3 className="font-display text-2xl font-semibold text-ash-100 md:text-3xl">
              {p.name}
              {p.href && (
                <span className="ml-2 inline-block text-ember transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              )}
            </h3>
            <p className="mono-label mt-1">{p.kind}</p>
          </div>
        </div>
        <StatusPill status={p.status} />
      </div>

      <p className="relative mt-6 max-w-2xl leading-relaxed text-ash-300">{p.summary}</p>

      <div className="relative mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ember-bright">
          {p.role}
        </span>
        <span className="hairline hidden h-px w-8 sm:block" />
        <div className="flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span
              key={s}
              className="rounded-md border border-ink-600/70 bg-ink-900 px-2.5 py-1 font-mono text-[0.65rem] text-ash-300"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export function Work() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-6 py-28 lg:px-10">
      <SectionLabel index="02">Selected Work</SectionLabel>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="grid gap-5"
      >
        {work.map((p) => (
          <ProjectCard key={p.name} p={p} />
        ))}
      </motion.div>
    </section>
  );
}
