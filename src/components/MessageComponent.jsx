import { use } from 'react';

function MessageComponent({ messagePromise }) {
  const message = use(messagePromise);

  return (
    <div className="form-card">
      <h2>Message Component</h2>
      <p className="form-description">
        Uses the <code>use()</code> hook to read data from a Promise passed as a prop.
      </p>
      <div className="result">
        <pre>{JSON.stringify(message, null, 2)}</pre>
      </div>
    </div>
  );
}

export default MessageComponent;
