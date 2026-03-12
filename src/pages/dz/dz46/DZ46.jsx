import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme, toggleTheme } from '../../../redux/slices/themeSlice';
import { fetchUsers, selectAsyncStatus } from '../../../redux/slices/usersAsyncSlice';
import UserListAsync from './UserListAsync';

function DZ46() {
  const theme = useSelector(selectTheme);
  const status = useSelector(selectAsyncStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  return (
    <div className={`dz44 dz44--${theme}`}>
      <div className="dz44__header">
        <p className="dz-description">
          Refactored from <strong>static Redux data</strong> (DZ45) to <strong>async Redux Thunk</strong> (DZ46).
          Uses <code className="inline-code">createAsyncThunk</code> to fetch real users from the API —
          data is no longer hardcoded in the slice. The slice owns all async states:{' '}
          <code className="inline-code">pending</code>,{' '}
          <code className="inline-code">fulfilled</code>, and{' '}
          <code className="inline-code">rejected</code> — so components stay clean and
          any component can subscribe to <code className="inline-code">status</code> or{' '}
          <code className="inline-code">error</code> via <code className="inline-code">useSelector</code>.
          The fetch is triggered once via <code className="inline-code">useEffect</code> only when{' '}
          <code className="inline-code">status === 'idle'</code>, preventing duplicate requests on re-renders.
          On failure, a <strong>Retry</strong> button re-dispatches{' '}
          <code className="inline-code">fetchUsers()</code> without a page reload.
        </p>
        <button className="theme-toggle" onClick={() => dispatch(toggleTheme())}>
          {theme === 'light' ? '🌙 Dark mode' : '☀️ Light mode'}
        </button>
      </div>

      <div className="dz44__meta">
        <span className="dz44__badge">Current theme: <strong>{theme}</strong></span>
        <span className="dz44__badge">Slice: <strong>usersAsync</strong></span>
        <span className="dz44__badge">API: <strong>jsonplaceholder.typicode.com</strong></span>
      </div>

      <div className="context-level context-level--1">
        <span className="context-level__label">Level 1 — DZ46</span>
        <span className="context-level__reads">
          reads: <code className="inline-code">theme</code>,{' '}
          <code className="inline-code">status</code> — dispatches:{' '}
          <code className="inline-code">fetchUsers()</code>,{' '}
          <code className="inline-code">toggleTheme()</code>
        </span>
        <UserListAsync />
      </div>
    </div>
  );
}

export default DZ46;
