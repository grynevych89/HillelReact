import { useEffect, useState } from 'react';
import { FiClock, FiCheckCircle } from 'react-icons/fi';

function IdleModal({ onConfirm, idleSince }) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setElapsed(Math.floor((Date.now() - idleSince) / 1000));
    }, 1000);
    return () => clearInterval(id);
  }, [idleSince]);

  return (
    <div className="idle-overlay" role="dialog" aria-modal="true" aria-labelledby="idle-title">
      <div className="idle-modal">
        <div className="idle-modal__icon">
          <FiClock size={36} />
        </div>

        <h3 id="idle-title" className="idle-modal__title">Are you still there?</h3>

        <p className="idle-modal__body">
          You have been inactive for <strong>{elapsed}s</strong>.
          <br />
          Click the button below to continue your session.
        </p>

        <button className="idle-modal__btn" onClick={onConfirm} autoFocus>
          <FiCheckCircle size={18} />
          Yes, I&apos;m still here!
        </button>
      </div>
    </div>
  );
}

export default IdleModal;
