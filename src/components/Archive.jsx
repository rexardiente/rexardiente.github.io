import { motion } from 'framer-motion';
import { archive } from '../data/content';
import { SectionLabel } from './SectionLabel';
import { stagger, item } from './Reveal';

export function Archive() {
  return (
    <section id="archive" className="relative mx-auto max-w-6xl px-6 py-28 lg:px-10">
      <SectionLabel index="03">Archive</SectionLabel>

      <p className="mb-10 max-w-xl text-ash-400">
        Earlier chapters — exchanges, trading apps, and the bare-metal work: custom Linux
        for crypto-mining hardware. The track record the current work is built on.
      </p>

      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="border-t border-ink-600/70"
      >
        {archive.map((a) => (
          <motion.li
            key={a.name}
            variants={item}
            className="group grid grid-cols-[1fr_auto] items-center gap-4 border-b border-ink-600/70 py-5 transition-colors hover:bg-ink-900/60 md:grid-cols-[auto_1fr_auto] md:px-3"
          >
            <span className="font-display text-lg text-ash-100 transition-colors group-hover:text-ember md:w-56">
              {a.name}
            </span>
            <span className="col-span-2 mono-label md:col-span-1 md:text-left">{a.kind}</span>
            <span className="font-mono text-xs text-ash-400">{a.year}</span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
