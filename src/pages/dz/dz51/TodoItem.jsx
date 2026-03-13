import { FiCheck, FiTrash2, FiRotateCcw, FiX } from 'react-icons/fi';

function TodoItem({ todo, onToggle, onDelete, onRestore, onPurge }) {
  const { id, text, status } = todo;

  return (
    <li className={`dz51-item dz51-item--${status}`}>
      {/* Check / uncheck — only for active and done */}
      {status !== 'deleted' && (
        <button
          className="dz51-check-btn"
          onClick={() => onToggle(id)}
          title={status === 'done' ? 'Mark as active' : 'Mark as done'}
        >
          <FiCheck size={16} />
        </button>
      )}

      <span className="dz51-item-text">{text}</span>

      <div className="dz51-item-actions">
        {status === 'deleted' ? (
          <>
            <button className="dz51-restore-btn" onClick={() => onRestore(id)} title="Restore task">
              <FiRotateCcw size={15} />
            </button>
            <button className="dz51-purge-btn" onClick={() => onPurge(id)} title="Delete permanently">
              <FiX size={15} />
            </button>
          </>
        ) : (
          <button className="dz51-delete-btn" onClick={() => onDelete(id)} title="Delete task">
            <FiTrash2 size={16} />
          </button>
        )}
      </div>
    </li>
  );
}

export default TodoItem;
