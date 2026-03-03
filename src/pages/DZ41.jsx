import { Suspense, useState } from 'react';
import MessageComponent from '../components/MessageComponent';
import ErrorBoundary from '../components/ErrorBoundary';
import CountdownFallback from '../components/CountdownFallback';

const DELAY_SECONDS = 2;

function fetchMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        text: 'Hello! This message was loaded asynchronously.',
        author: 'Server',
        timestamp: new Date().toLocaleTimeString(),
      });
    }, DELAY_SECONDS * 1000);
  });
}

function DZ41() {
  const [messagePromise, setMessagePromise] = useState(fetchMessage);

  const handleRefresh = () => setMessagePromise(fetchMessage());

  return (
    <>
      <div className="section">
        <ErrorBoundary>
          <Suspense fallback={<CountdownFallback seconds={DELAY_SECONDS} />}>
            <MessageComponent messagePromise={messagePromise} />
          </Suspense>
        </ErrorBoundary>
        <button className="refresh-btn" onClick={handleRefresh}>
          Refresh
        </button>
      </div>
    </>
  );
}

export default DZ41;
