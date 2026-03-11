import { useSelector, useDispatch } from 'react-redux';
import { selectTheme, toggleTheme } from '../../../redux/slices/themeSlice';
import UserListRedux from './UserListRedux';

function DZ45() {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  return (
    <div className={`dz44 dz44--${theme}`}>
      <div className="dz44__header">
        <p className="dz-description">
          Refactored from <strong>React Context</strong> (DZ44) to <strong>Redux Toolkit</strong>.
          All components read state via <code className="inline-code">useSelector</code> and
          dispatch actions via <code className="inline-code">useDispatch</code> — no Provider nesting needed.
        </p>
        <button className="theme-toggle" onClick={() => dispatch(toggleTheme())}>
          {theme === 'light' ? '🌙 Dark mode' : '☀️ Light mode'}
        </button>
      </div>

      <div className="dz44__meta">
        <span className="dz44__badge">Current theme: <strong>{theme}</strong></span>
        <span className="dz44__badge">Store: <strong>theme + users slices</strong></span>
      </div>

      <div className="context-level context-level--1">
        <span className="context-level__label">Level 1 — DZ45</span>
        <span className="context-level__reads">
          reads: <code className="inline-code">theme</code> — dispatches: <code className="inline-code">toggleTheme()</code>
        </span>
        <UserListRedux />
      </div>
    </div>
  );
}

export default DZ45;
