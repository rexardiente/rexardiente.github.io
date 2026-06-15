import { motion } from 'framer-motion';
import { profile } from '../data/content';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const line = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* atmosphere */}
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(80%_70%_at_50%_30%,black,transparent)]" />
      <div className="ember-glow absolute inset-0 animate-flicker" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-28 lg:px-10">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* status line */}
          <motion.div variants={line} className="mb-10 flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-ember opacity-60 animate-pulse-dot" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
            </span>
            <span className="mono-label">{profile.status}</span>
          </motion.div>

          {/* name */}
          <h1 className="font-display font-semibold leading-[0.92] tracking-tightest">
            <motion.span variants={line} className="block text-[clamp(3rem,11vw,9rem)] text-ash-100">
              {profile.firstName}
            </motion.span>
            <motion.span
              variants={line}
              className="block text-[clamp(3rem,11vw,9rem)] text-ember-glow"
            >
              {profile.lastName}
            </motion.span>
          </h1>

          {/* role + intro */}
          <motion.div variants={line} className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-xl text-lg leading-relaxed text-ash-300 md:text-xl">
              <span className="font-display text-ash-100">{profile.role}.</span>{' '}
              {profile.intro}
            </p>

            <div className="flex shrink-0 items-center gap-6 font-mono text-xs uppercase tracking-[0.18em]">
              <a href={profile.links.github} target="_blank" rel="noreferrer" className="link-wipe text-ash-300 hover:text-ash-100">
                GitHub
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="link-wipe text-ash-300 hover:text-ash-100">
                LinkedIn
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-ash-400 hover:text-ember"
      >
        Scroll ↓
      </motion.a>
    </section>
  );
}
