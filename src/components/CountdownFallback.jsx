import { useEffect, useState } from 'react';

function CountdownFallback({ seconds = 2 }) {
  const [remaining, setRemaining] = useState(seconds * 1000);

  useEffect(() => {
    if (remaining <= 0) return;
    const timer = setTimeout(() => setRemaining((r) => r - 100), 100);
    return () => clearTimeout(timer);
  }, [remaining]);

  const display = (remaining / 1000).toFixed(1);

  return (
    <div className="form-card countdown-card">
      <h2>Message Component</h2>
      <p className="form-description">
        Uses the <code>use()</code> hook to read data from a Promise passed as a prop.
      </p>
      <div className="result countdown-result">
        <p>
          Loading...{' '}
          <span className="countdown-number">
            {remaining > 0 ? `${display}s` : 'almost there...'}
          </span>
        </p>
      </div>
    </div>
  );
}

export default CountdownFallback;
