import { useState, useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { FiClipboard, FiSettings } from 'react-icons/fi';
import 'react-toastify/dist/ReactToastify.css';

import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import IdleWarning from './IdleWarning';

const MIN_SEC = 5;
const MAX_SEC = 120;

const STATUS = { ACTIVE: 'active', DONE: 'done', DELETED: 'deleted' };
const FILTERS = ['all', STATUS.ACTIVE, STATUS.DONE, STATUS.DELETED];
const STATUS_ORDER = { [STATUS.ACTIVE]: 0, [STATUS.DONE]: 1, [STATUS.DELETED]: 2 };

let nextId = 1;

function DZ51() {
  const [todos, setTodos] = useState([
    { id: nextId++, text: 'Learn React Icons', status: STATUS.DONE },
    { id: nextId++, text: 'Integrate React Toastify', status: STATUS.ACTIVE },
    { id: nextId++, text: 'Set up React Idle Timer', status: STATUS.ACTIVE },
    { id: nextId++, text: 'Add React Modal', status: STATUS.DELETED },
    { id: nextId++, text: 'Try React Spinners', status: STATUS.DELETED },
  ]);
  const [filter, setFilter] = useState('all');

  const [idleEnabled, setIdleEnabled] = useState(false);
  const [idleTimeout, setIdleTimeout] = useState(10_000);
  const [timeLeft, setTimeLeft] = useState(null);

  const handleTick = useCallback((seconds) => setTimeLeft(seconds), []);

  const addTodo = (text) => {
    setTodos((prev) => [...prev, { id: nextId++, text, status: STATUS.ACTIVE }]);
    toast.success(`Task added: "${text}"`);
  };

  const toggleDone = (id) => {
    const target = todos.find((t) => t.id === id);
    if (!target || target.status === STATUS.DELETED) return;
    const next = target.status === STATUS.DONE ? STATUS.ACTIVE : STATUS.DONE;
    next === STATUS.DONE
      ? toast.info(`Done: "${target.text}"`)
      : toast.warning(`Back to active: "${target.text}"`);
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: next } : t))
    );
  };

  const softDelete = (id) => {
    const target = todos.find((t) => t.id === id);
    if (!target) return;
    toast.error(`Deleted: "${target.text}"`);
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: STATUS.DELETED } : t))
    );
  };

  const restore = (id) => {
    const target = todos.find((t) => t.id === id);
    if (!target) return;
    toast.success(`Restored: "${target.text}"`);
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: STATUS.ACTIVE } : t))
    );
  };

  const purge = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const counts = todos.reduce((acc, t) => {
    acc[t.status] = (acc[t.status] || 0) + 1;
    return acc;
  }, {});

  const doneCount = counts[STATUS.DONE] || 0;
  const activeCount = counts[STATUS.ACTIVE] || 0;
  const progress = activeCount + doneCount > 0
    ? Math.round((doneCount / (activeCount + doneCount)) * 100)
    : 0;

  const visible = todos
    .filter((t) => filter === 'all' || t.status === filter)
    .sort((a, b) => STATUS_ORDER[a.status] - STATUS_ORDER[b.status]);

  const idleTotalSec = idleTimeout / 1000;
  const idleProgress = timeLeft !== null
    ? Math.round(((idleTotalSec - timeLeft) / idleTotalSec) * 100)
    : 0;

  return (
    <div className="dz51-wrapper">
      <IdleWarning timeout={idleTimeout} enabled={idleEnabled} onTick={handleTick} />
      <ToastContainer position="bottom-right" autoClose={2500} />

      <div className="dz51__desc">
        <p>
          <code className="inline-code">React Icons</code> — ready-made SVG icon sets from
          the <code className="inline-code">react-icons/fi</code> (Feather Icons) collection.
          Every interactive control — add, check, delete, restore, and settings — uses a
          dedicated icon instead of text labels.
        </p>
        <p>
          <code className="inline-code">React Toastify</code> — non-blocking contextual
          notifications for every action: <em>success</em> on add or restore,{' '}
          <em>info</em> when marking done, <em>warning</em> when reverting to active,
          and <em>error</em> on delete.
        </p>
        <p>
          <code className="inline-code">React Idle Timer</code> — tracks mouse and keyboard
          inactivity with a configurable <code className="inline-code">timeout</code> and{' '}
          <code className="inline-code">throttle: 500ms</code>. When enabled, a live countdown
          bar shows the time remaining. Once the timeout expires a modal asks
          "Are you still there?" — the session resumes only after explicit confirmation.
        </p>
      </div>

      <h2 className="dz51-title">
        <FiClipboard size={22} />
        Task Manager
      </h2>

      <div className="dz51-progress">
        <div className="dz51-progress-bar">
          <div className="dz51-progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="dz51-subtitle">{doneCount} / {activeCount + doneCount} done</span>
      </div>

      <TodoForm onAdd={addTodo} />

      <div className="dz51-filters">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`dz51-filter-btn${filter === f ? ' dz51-filter-btn--active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
            {counts[f] > 0 && (
              <span className="dz51-filter-badge">{counts[f]}</span>
            )}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="dz51-empty">No tasks here.</p>
      ) : (
        <ul className="dz51-list">
          {visible.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleDone}
              onDelete={softDelete}
              onRestore={restore}
              onPurge={purge}
            />
          ))}
        </ul>
      )}

      <div className="dz51-settings">
        <div className="dz51-settings__header">
          <FiSettings size={15} />
          Idle Timer Settings
        </div>

        <p className="dz51-settings__note">
          Idle detection is <strong>disabled by default</strong>. Toggle the switch to enable it,
          then use the slider to set how many seconds of inactivity trigger the presence confirmation modal.
        </p>

        <div className="dz51-settings__row">
          <label className="dz51-toggle" title="Enable / disable idle detection">
            <input
              type="checkbox"
              checked={idleEnabled}
              onChange={(e) => setIdleEnabled(e.target.checked)}
            />
            <span className="dz51-toggle__track">
              <span className="dz51-toggle__thumb" />
            </span>
            <span className="dz51-toggle__label">
              {idleEnabled ? 'Enabled' : 'Disabled'}
            </span>
          </label>

          <div className="dz51-slider-wrap">
            <input
              className="dz51-slider"
              type="range"
              min={MIN_SEC}
              max={MAX_SEC}
              step={1}
              value={idleTimeout / 1000}
              disabled={!idleEnabled}
              onChange={(e) => setIdleTimeout(Number(e.target.value) * 1000)}
            />
            <span className="dz51-slider-value">{idleTimeout / 1000} s</span>
          </div>
        </div>

        {idleEnabled && timeLeft !== null && (
          <div className="dz51-idle-countdown">
            <div className="dz51-idle-countdown__bar">
              <div
                className="dz51-idle-countdown__fill"
                style={{ width: `${idleProgress}%` }}
              />
            </div>
            <span className="dz51-idle-countdown__label">
              Idle modal in <strong>{timeLeft}s</strong>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default DZ51;
