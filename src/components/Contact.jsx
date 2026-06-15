import { profile } from '../data/content';
import { SectionLabel } from './SectionLabel';
import { Reveal } from './Reveal';

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <div className="ember-glow absolute inset-0 opacity-70" />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <SectionLabel index="05">Contact</SectionLabel>

        <Reveal>
          <h2 className="max-w-3xl font-display text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[0.98] tracking-tightest text-ash-100">
            Let’s build something that<span className="text-ember-glow"> runs.</span>
          </h2>

          <a
            href={profile.links.email}
            className="group mt-10 inline-flex items-center gap-4 font-display text-2xl text-ash-100 md:text-3xl"
          >
            <span className="link-wipe">{profile.email}</span>
            <span className="text-ember transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.18em]">
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="link-wipe text-ash-300 hover:text-ash-100">
              GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="link-wipe text-ash-300 hover:text-ash-100">
              LinkedIn
            </a>
            <a href={profile.links.email} className="link-wipe text-ash-300 hover:text-ash-100">
              Email
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
