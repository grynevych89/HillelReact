import { useState } from 'react';
import DataFetcher from '../../components/DataFetcher';

const TOTAL_USERS = 10;

function DZ42() {
  const [userId, setUserId] = useState(1);

  return (
    <div className="section">
      <div className="id-controls">
        <button
          className="refresh-btn"
          onClick={() => setUserId((id) => Math.max(1, id - 1))}
          disabled={userId === 1}
        >
          ←
        </button>
        <span>User ID: {userId}</span>
        <button
          className="refresh-btn"
          onClick={() => setUserId((id) => Math.min(TOTAL_USERS, id + 1))}
          disabled={userId === TOTAL_USERS}
        >
          →
        </button>
      </div>
      <DataFetcher id={userId} />
    </div>
  );
}

export default DZ42;
