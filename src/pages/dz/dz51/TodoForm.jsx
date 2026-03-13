import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

function TodoForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText('');
  };

  return (
    <form className="dz51-form" onSubmit={handleSubmit}>
      <input
        className="dz51-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new task..."
        maxLength={100}
      />
      <button className="dz51-add-btn" type="submit">
        <FiPlus size={18} />
        Add
      </button>
    </form>
  );
}

export default TodoForm;
