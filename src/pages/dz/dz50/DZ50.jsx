import MemoDemo from './MemoDemo';

function DZ50() {
  return (
    <div>
      <ul className="dz-description dz50__desc">
        <li>
          <code className="inline-code">useMemo</code> — filters the product list only when the
          search input changes; also memoizes cart total.
        </li>
        <li>
          <code className="inline-code">useCallback</code> — keeps the toggle handler reference
          stable across parent re-renders.
        </li>
        <li>
          <code className="inline-code">React.memo</code> — wraps <code className="inline-code">ProductItem</code> so
          it skips re-render when its props have not changed.
        </li>
        <li>
          Verify via <strong>React DevTools → Profiler</strong>: clicking <em>+1</em> re-renders the
          parent but <code className="inline-code">ProductItem</code> rows are skipped entirely.
        </li>
      </ul>
      <MemoDemo />
      <p className="dz50__note">
        Note: in development renders show <strong>+2</strong> per action —{' '}
        <code className="inline-code">StrictMode</code> double-invokes renders intentionally.
        Production builds show <strong>+1</strong>.
      </p>
    </div>
  );
}

export default DZ50;
