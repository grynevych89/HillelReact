import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import UserListContext from './UserListContext';

function DZ44() {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <div className={`dz44 dz44--${theme}`}>
      <div className="dz44__header">
        <p className="dz-description">
          All three components read data directly from <strong>AppContext</strong> via{' '}
          <code className="inline-code">useContext</code> — no props passed between levels.
        </p>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark mode' : '☀️ Light mode'}
        </button>
      </div>

      <div className="context-level context-level--1">
        <span className="context-level__label">Level 1 — DZ44</span>
        <span className="context-level__reads">reads: <code className="inline-code">theme</code>, <code className="inline-code">toggleTheme</code></span>

        {/* Level 2 — UserList reads from context directly, not from DZ44 props */}
        <UserListContext />
      </div>
    </div>
  );
}

export default DZ44;
