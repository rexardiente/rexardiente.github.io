import { useEffect, useState } from 'react';
import { profile } from '../data/content';
import { ThemeToggle } from './ThemeToggle';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-ink-600/70 bg-ink-950/80 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid h-7 w-7 place-items-center rounded-md border border-ink-600 bg-ink-850 font-display text-sm font-semibold text-ember transition-colors group-hover:border-ember/60">
            R
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ash-300">
            ardiente<span className="text-ember">.dev</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="link-wipe font-mono text-xs uppercase tracking-[0.18em] text-ash-300 transition-colors hover:text-ash-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href={profile.links.email}
            className="hidden font-mono text-xs uppercase tracking-[0.18em] text-ember transition-colors hover:text-ember-bright md:inline-block"
          >
            Get in touch ↗
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
