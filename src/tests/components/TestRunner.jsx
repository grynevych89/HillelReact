import { useState, useEffect, useRef, useCallback } from 'react';
import UserProfile from '../../pages/dz/dz49/UserProfile';
import { DZ49_SCENARIOS } from '../dz49.scenarios';

function TestCase({ scenario, onResult }) {
  const ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const text = ref.current?.textContent ?? '';
      onResult(scenario.id, text.includes(scenario.expectedText));
    }, scenario.checkDelay);
    return () => clearTimeout(timer);
  }, [scenario, onResult]);

  return (
    <div ref={ref} className="test-runner__hidden">
      <UserProfile fetchFn={scenario.fetchFn} />
    </div>
  );
}

function TestRunner() {
  const [results, setResults] = useState({});

  const handleResult = useCallback(
    (id, passed) => setResults((prev) => ({ ...prev, [id]: passed })),
    []
  );

  const total = DZ49_SCENARIOS.length;
  const passed = Object.values(results).filter(Boolean).length;
  const done = Object.keys(results).length === total;

  return (
    <div className="test-runner">
      <h4>Test Results</h4>
      <ul className="test-runner__list">
        {DZ49_SCENARIOS.map((s) => {
          const status = results[s.id];
          return (
            <li key={s.id} className="test-runner__item">
              <span className={`test-runner__icon ${status === undefined ? 'pending' : status ? 'pass' : 'fail'}`}>
                {status === undefined ? '○' : status ? '✓' : '✗'}
              </span>
              {s.name}
              <TestCase scenario={s} onResult={handleResult} />
            </li>
          );
        })}
      </ul>
      {done && (
        <p className={`test-runner__summary ${passed === total ? 'pass' : 'fail'}`}>
          {passed}/{total} tests passed
        </p>
      )}
    </div>
  );
}

export default TestRunner;
