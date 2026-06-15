// Monospace section index, e.g.  // 02 — SELECTED WORK
export function SectionLabel({ index, children }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="font-mono text-xs text-ember">{`// ${index}`}</span>
      <span className="mono-label text-ash-300">{children}</span>
      <span className="hairline ml-2 flex-1 opacity-60" />
    </div>
  );
}
