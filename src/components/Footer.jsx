import { profile } from '../data/content';

export function Footer() {
  return (
    <footer className="border-t border-ink-600/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-ash-400">
          © 2026 {profile.name}
        </p>
        <p className="font-mono text-xs text-ash-400">
          Designed &amp; built from scratch · React · Vite · Tailwind
        </p>
        <a
          href="#top"
          className="font-mono text-xs uppercase tracking-[0.18em] text-ash-300 hover:text-ember"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
